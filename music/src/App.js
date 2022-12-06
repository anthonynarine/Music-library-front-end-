import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './Components/SearchBar';
import SongList from "./Components/SongList"



function App(){

    const [songs, setSongs] = useState([])
  
    useEffect (() => {
        getAllSongs()
    }, []);

    
    async function getAllSongs(){
        const response = await axios.get("http://127.0.0.1:8000/api/music/");
        setSongs(response.data) 
        console.log(response.data)      
    };

    

    //Searchbar component handler
    // const handleSubmit = (term) => {
    // //get all song. filter  all songs title or artist. Include term?
    //     const result = getAllSongs(term)

    // };


    return (
        <div>
            <SongList songs={songs} />
        </div>

    );
}

export default App;