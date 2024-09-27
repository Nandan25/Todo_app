import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

const TodoItem = ({ todo, handleComplete, handleMoveToPending, handleDeleteTodo }) => {
    useEffect(() => { }, [todo]);
    return (
        <>
            <div>
                <div className="todo-list-item" >
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                    </div>
                    <div>
                        {!todo.completed && <AiOutlineDelete
                            className="icon"
                            onClick={() => handleDeleteTodo(todo)}
                            title="Delete task?"
                        />}
                        {!todo.completed && <BsCheckLg
                            className="icon"
                            onClick={() => handleComplete(todo)}
                            title="Complete task?"
                        />}
                    </div>
                </div>
                {todo.completed ? <div className="todo-list-item" key={todo}>
                    <div>

                        <p><small>Completed on: {todo.completedOn}</small></p>
                    </div>

                    <div>
                        <AiOutlineEdit className="icon"
                            onClick={() => handleMoveToPending(todo)}
                            title="Move to pending?" />
                        <AiOutlineDelete
                            className="icon"
                            onClick={() => handleDeleteTodo(todo)}
                            title="Delete task?"
                        />
                    </div>

                </div> : <></>}
            </div>

        </>
    );
};

export default TodoItem;