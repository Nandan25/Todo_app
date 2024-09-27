import React, { useEffect, useState } from "react";
import TodoFilters from "./TodoFilters";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { filters } from "../constants";
import { isEmpty } from "lodash";

const TodoApp = ({ }) => {


    const [allTodos, setAllTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [activeFilter, setActiveFilter] = useState(filters[0]);


    /*Handles adding new todo task */
    const handleSubmit = () => {
        let newTodoItem = {
            title: title,
            description: description,
            completed: false
        };

        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setAllTodos(updatedTodoArr);
        setTitle('');
        setDescription('');
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    };

    /*Handles todo task deletion*/

    const handleDeleteTodo = todo => {
        console.log(todo);
        let reducedTodo = allTodos.filter(todos => todos !== todo);

        localStorage.setItem('todolist', JSON.stringify(reducedTodo));
        setAllTodos(reducedTodo);
    };

    /*Handles moving todo task to pending*/

    const handleMoveToPending = todo => {
        let index = allTodos.indexOf(todo);
        let filteredItem = {
            ...allTodos[index],
            completed: false,

        };

        let updatedArr = [...allTodos];
        updatedArr[index] = filteredItem;
        localStorage.setItem('todolist', JSON.stringify(updatedArr));
        setAllTodos(updatedArr);
    };

    /*Handles moving todo task to completed*/

    const handleComplete = todo => {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let completedOn = ` ${dd} - ${mm} - ${yyyy} at ${h} : ${m} : ${s}`;

        let index = allTodos.indexOf(todo);
        let filteredItem = {
            ...allTodos[index],
            completed: true,
            completedOn: completedOn,
        };


        let updatedArr = [...allTodos];
        console.log(updatedArr);
        updatedArr[index] = filteredItem;
        console.log(updatedArr);
        localStorage.setItem('todolist', JSON.stringify(updatedArr));
        setAllTodos(updatedArr);
    };

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));

        if (!isEmpty(savedTodo)) {
            setAllTodos(savedTodo);
        }


    }, []);

    useEffect(() => { }, [todos]);

    useEffect(() => {

        if (activeFilter == filters[1]) {
            const pendingToDos = allTodos.filter(todo => !todo.completed);
            setTodos(pendingToDos);
        }
        else if (activeFilter == filters[2]) {
            const completedToDos = allTodos.filter(todo => todo.completed);
            setTodos(completedToDos);
        }
        else {
            setTodos(allTodos);
        }
    }, [activeFilter, allTodos]);
    return (
        <>
            <div className="App">
                <h1>My Todos</h1>
                <div className='todo-wrapper'>
                    <TodoInput handleSubmit={handleSubmit} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />

                    <TodoFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

                    <TodoList todos={todos} handleMoveToPending={handleMoveToPending} handleDeleteTodo={handleDeleteTodo} handleComplete={handleComplete} />

                </div>
            </div>

        </>
    );
};

export default TodoApp;