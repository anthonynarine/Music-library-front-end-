import MusicTable from "./MusicTable"

function SongList ({songs, onDelete}){
    const renderedSong = songs.map((song) =>{
        return <MusicTable onDelete={onDelete} key={song.id} song={song} />
    });


    return <div>{renderedSong}</div>;
}

export default SongList;