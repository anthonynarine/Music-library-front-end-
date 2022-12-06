import React, { useState } from 'react';


function SearchBar({onSubmit}){
    const [term, setTerm] = useState("")


    //listend for enter key push
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term)
        // console.log("passing data to parent")
    };

    const handleChange = (event) =>{
        setTerm(event.target.value)
//accesses input value & passes it to setTerm(), which is passed to term)
        // console.log(event)
    };


    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    )
};

export default SearchBar;