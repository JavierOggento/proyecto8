import { useRef } from "react";
import "../Styles/SearchFilter.css"

export default function SearchFilter ({ setSearch }) {
    const inputRef = useRef();

    const handleChange = () => {
        setSearch(inputRef.current.value)
    }

    return(
        <div className="search-filter">
            <input type="text" ref={inputRef} placeholder="Find a task" className="inputFilter"/>
            <button onClick={handleChange} className="button1">Filter</button>
        </div>
    )
}