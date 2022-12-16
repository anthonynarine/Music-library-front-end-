
function MusicTable({song, onDelete}) {
    
    const handleDelete = () => {
        onDelete(song.id);
    };


    return ( 
    <div>  
        <table className="table table-sm">
            <thead>
                <tr>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Release Date</th>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>

            </tbody>         
        </table>
    </div>

    )
}


            // <thead className="thead-dark">
            //     <tr>
            //         <button className="delete" onClick={handleDelete}>Delete</button>
            //         <th scope="col">{song.title}</th>
            //         <th>{song.artist}</th>
            //         <th>{song.album}</th>
            //         <th>{song.genre}</th>
            //         <th>{song.release_date}</th>      
            //     </tr>
            // </thead>
export default MusicTable;