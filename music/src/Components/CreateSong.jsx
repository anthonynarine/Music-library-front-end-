import {useState} from "react";


function CreateSong ({onCreate}){

  const [title, setTitle] = useState("");
  const handlChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const [artist, setArtist] = useState("");
  const handlChangeArtist = (event) => {
    setArtist(event.target.value)
  };

  const [album, setAlbum] = useState("");
  const handlChangeAlbum = (event) => {
    setAlbum(event.target.value)
  };

  const [genre, setGenre] = useState("");
  const handlChangeGenre = (event) => {
    setGenre(event.target.value)
  };

  const [release_date, setReleaseDate] = useState("");
  const handlChangeReleaseDate = (event) => {
    setReleaseDate(event.target.value)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title,album,artist,genre,release_date)
    setTitle("")
    setArtist("")
    setAlbum("")
    setGenre("")
    setReleaseDate("")
  };


  return <div className="song-create">
    <h3>Add a Song</h3>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} type="text" onChange={handlChangeTitle} />
      <label>Artist</label>
      <input className="input" value={artist} type="text" onChange={handlChangeArtist} />
      <label>Album</label>
      <input className="input" value={album} type="text" onChange={handlChangeAlbum} />
      <label>Genre</label>
      <input className="input" value={genre} type="text" onChange={handlChangeGenre} />
      <label>Release Date</label>
      <input className="input" value={release_date} type="date" onChange={handlChangeReleaseDate} />
      <button className="button">Create</button>
    </form> 
  </div>
}



export default CreateSong;