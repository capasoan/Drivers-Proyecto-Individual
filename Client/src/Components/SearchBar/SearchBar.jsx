import {useState } from "react";

function SearchBar({ onSearch }) {
    const [id, setId]=useState("");

    const handleChange=(event)=>{

        const value= event.target.value;
        setId(value);

    }

    return (
    <div>
            <div>
                < input type='search' value={id} onChange={(e) => handleChange(e)} />
            </div>
            <button onClick={()=>onSearch(id)}>BUSCAR</button>
    </div>)
}

export default SearchBar;