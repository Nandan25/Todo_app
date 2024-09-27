import React, { useEffect, useState } from "react";

const TodoInput = ({ title, description, setTitle, setDescription, handleSubmit }) => {
    useEffect(() => { }, []);
    return (

        <div className='todo-input'>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="What's the task title?"
                />
            </div>
            <br />
            <div>
                <label>Description:</label>
                <textarea

                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="What's the task description?"
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="primaryBtn"
                >
                    Add
                </button>
            </div>
        </div>


    );
};

export default TodoInput;