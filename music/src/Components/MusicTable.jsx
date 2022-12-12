
function MusicTable({song, onDelete}) {
    
    const handleDelete = () => {
        onDelete(song.id);
    };


    return ( 
    <div>  
        <table>
            <thead>
                <tr>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                    <th>{song.title}</th>
                    <th>{song.artist}</th>
                    <th>{song.album}</th>
                    <th>{song.genre}</th>
                    <th>{song.release_date}</th>      
                </tr>
            </thead>         
        </table>
    </div>

    )
}


export default MusicTable;