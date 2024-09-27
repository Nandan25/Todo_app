import React, { useEffect, useState } from "react";
import { filters } from "../constants";

const TodoFilters = ({ activeFilter, setActiveFilter }) => {
    const handleFilterClick = (index) => {
        setActiveFilter(filters[index]);
    };

    useEffect(() => { }, [activeFilter]);

    return (
        <>
            <div className='filter-toggle'>
                <button className={`secondaryBtn ${activeFilter === filters[0] && 'active'}`} onClick={(e) => { e.preventDefault(); handleFilterClick(0); }}>All</button>
                <button className={`secondaryBtn ${activeFilter === filters[1] && 'active'}`} onClick={(e) => { e.preventDefault(); handleFilterClick(1); }}>Pending</button>
                <button className={`secondaryBtn ${activeFilter === filters[2] && 'active'}`} onClick={(e) => { e.preventDefault(); handleFilterClick(2); }}>Completed</button>
            </div>

        </>
    );
};

export default TodoFilters;