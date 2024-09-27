import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem.js";
import { isEmpty } from "lodash";

const TodoList = ({ todos, handleComplete, handleMoveToPending, handleDeleteTodo }) => {
    useEffect(() => { }, [todos]);
    return (
        <>
            {!isEmpty(todos) ? <>


                {
                    todos.map((todo, index) => {
                        return <>
                            <TodoItem todo={todo} handleMoveToPending={handleMoveToPending} handleComplete={handleComplete} handleDeleteTodo={handleDeleteTodo} />
                        </>;
                    })
                }

            </> : <div>no records</div>}



        </>
    );
};

export default TodoList;