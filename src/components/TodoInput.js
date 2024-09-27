import React, { useEffect, useState } from "react";

const TodoInput = ({ title, description, setTitle, setDescription, handleSubmit }) => {
    useEffect(() => { }, []);
    return (

        <div className='todo-input'>
            <form onSubmit={() => { handleSubmit(); }}>
                <div>

                    <label>Title:</label>&nbsp;
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="What's the task title?"
                    />
                </div>
                <br />
                <div>
                    <label>Description:</label>&nbsp;
                    <textarea

                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="What's the task description?"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className="primaryBtn"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>


    );
};

export default TodoInput;