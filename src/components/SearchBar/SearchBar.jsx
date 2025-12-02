import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const [searchData, setSearchData] = useState([]);
    const handleChange = (event) => {
        setInput(event.target.value);
        // setTimeout(() => {
        //   handleSearchClick()
        // }, 2000)

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
            // console.log(searchData)
        } else {
            navigate("/search-not-found", { state: { input } })
        }
        // console.log("clicked search...")
    }


    return (
        <>
            <div className="relative">
                {/* <div class="flex items-center border border-gray-300 rounded-md px-1 relative">
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
                </div> */}
                
                   
                    <input
                        class="bg-transparent border border-gray-400 dark:border-gray-600 rounded-md py-1.5 pl-4 pr-3 w-40 duration-300 focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Search..." type="text"
                        onChange={handleChange}
                        onKeyDown={(event) => { if (event.key == "Enter") handleSearchClick() }}
                        value={input}
                    />
                    <button className="absolute right-2 top-1 ml-2 p-1  text-white rounded-md cursor-pointer focus:outline-none z-50" onClick={handleSearchClick}>
                        <i class="fas fa-search" style={{color:"grey"}}></i>
                    </button>
               
            </div>
        </>
    );
}
