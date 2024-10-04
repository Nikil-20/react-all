import React from 'react';
import { useState } from "react";

function State2() {
    const [courses, setCourses] = useState(["MERN", "MEAN", "DS", "JS", "PHP"]);

    function addCourse() {
        const newCourse = window.prompt("Enter a new course:");
        if (newCourse) {
            setCourses([...courses, newCourse]);
        }
    }

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Students Courses List</h1>
                <ul className="mb-6 space-y-3">
                    {courses.map((val, i) => (
                        <li
                            key={i}
                            className="text-lg text-gray-700 bg-gray-200 p-3 rounded-md hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 ease-in-out"
                        >
                            {val}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={addCourse}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition-all duration-300"
                >
                    Add Course
                </button>
            </div>
        </div>
        </>
    );
}

export default State2;
