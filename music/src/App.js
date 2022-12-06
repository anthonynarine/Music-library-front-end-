import React, { useState, useEffect } from 'react';
import axios from "axios";


function App(){

    const [songs, setSongs] = useState([])
  
    useEffect (() => {
        getAllSongs()
    }, []);
    
    async function getAllSongs(){
        const response = await axios.get("http://127.0.0.1:8000/api/music/");
        setSongs(response.data)     
        console.log(response);
    };

    // "handles onClick button to get all songs"
    const handleClick = () => {
        getAllSongs()
    }

    
    return (
        <div>
            <button onClick={handleClick}>Get All Songs</button>
        </div>
    );
}

export default App;