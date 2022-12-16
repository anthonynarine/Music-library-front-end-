import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './Components/SearchBar';
import SongList from "./Components/SongList"
import CreateSong from './Components/CreateSong';



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
    //end of get request

    //this function will take in a url and object body.
    const createSong = async (title,artist,album,genre,release_date) => {
        const response = await axios.post("http://127.0.0.1:8000/api/music/", {
            title,
            artist,
            album,
            genre,
            release_date,
        });

        const uppdatedSongs = [...songs, response.data];
        setSongs(uppdatedSongs)
    };
    //end of create request


    const deleteSongById = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/music/${id}`)


        const uppdatedSongs = songs.filter((song) =>{
            return song.id !==id;
        });
        
        setSongs(uppdatedSongs);
    };
    //end of delete by id request


    //function to handle search bar 
    const handleSubmit = (searchInput) => {
        console.log("do a search with", searchInput);
    };



    

    return (
        <div className='app'>
           <CreateSong onCreate={createSong} />
           <SongList songs={songs} onDelete={deleteSongById} />
           <SearchBar onSubmit={handleSubmit} />
        </div>

    );
}

export default App;