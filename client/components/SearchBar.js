import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        setResults(value); 
    }

    const handlleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div class="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Tìm kiếm hoạt động" 
                type="text" value={input}
                onChange={(e) => handlleChange(e.target.value)}
            />
        </div>
    );
};
