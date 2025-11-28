import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const [searchData, setSearchData] = useState([]);
    const handleChange = (event) => {
        setInput(event.target.value);

    }
    const navigate = useNavigate();
    const structureInput = (input) => {
        return input;
    }

    useEffect(() => {
        const searchInput = structureInput(input);
        const url = `${import.meta.env.VITE_SearchUrl}?api_key=${import.meta.env.VITE_ApiKey}&query=${searchInput}`
        axios.get(url)
            .then((response) => {
                setSearchData([...response.data.results])
                // console.log(searchData)
            })

    }, [input]);

    const handleSearchClick = () => {
        if (searchData.length > 0) {
            navigate("/search-result", { state: { Data: searchData } })
            console.log(searchData)
        }
        console.log("clicked search...")
    }


    return (
        <>
            <div>
                <div class="flex items-center border border-gray-300 rounded-md px-1 relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="outline-none bg-transparent text-white placeholder-gray-500 w-30 px-2"
                        onChange={handleChange}
                        onKeyDown={(event) => { if (event.key == "Enter") handleSearchClick() }}
                        value={input}
                    />
                    <button class="ml-2 p-1  text-white rounded-md cursor-pointer focus:outline-none z-50" onClick={handleSearchClick}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
