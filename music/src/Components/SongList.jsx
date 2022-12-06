import MusicTable from "./MusicTable"

function SongList ({songs}){
    const renderedSong = songs.map((song) =>{
        return <MusicTable key={song.id} song={song} />
    });


    return <div>{renderedSong}</div>;
}

export default SongList;