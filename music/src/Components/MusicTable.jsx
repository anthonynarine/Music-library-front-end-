
function MusicTable({song}) {
    return ( 
    <div>
        <table>
            <thead>
                <tr>
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