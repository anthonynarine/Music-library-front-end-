import { useState } from "react";

function SearchBar ({onSubmit}) {

    const [searchInput, setSearchInput] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDevault();

        onSubmit(searchInput);
    };

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchInput(event.target.value);
    };

    // let result = songs.filter((song)=>{
    //     if (song.title.includes(searchInput) ||
    //         song.artist.includes(searchInput)||
    //         song.album.includes(searchInput) ||
    //         song.genre.includes(searchInput) ||
    //         song.release_date.includes(SearchBar)) {
    //             return true;
    //         }
    //         else return false;
   
    // });
    // setSearchInput(result)
    // console.log(result)
    

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Search Song</label>
                <input value={searchInput} onChange={handleInputChange}/>
            </form>  
        </div>
    )
};

export default SearchBar;