// import React, { useState } from "react";

// function SearchBar({songs,setSongs}) {
//     const handleSubmit = (event) => event.preventDefault()

//     const handleSearchChange = (event) => {
//         if (!event.target.value) return setSongs(songs)

//         const resultsArray = songs.filter(song => song.title.includes(event.target.value)
//         ||song.artist.include(event.taret.value)
//         ||song.album.include(event.target.value)
//         ||song.genre.include(event.targer.value)) 

//         setSongs(resultsArray)
//     }




//     return (
//         <header>
//             <form className="search" onSubmit={handleSubmit}>
//                 <input className="searchInput"
//                        type="text"
//                        onChagne={handleSearchChange} 
//                 />
//                 <button className="searchButton"></button>
//             </form>
//         </header>

//     )
// }








































//   const [searchInput, setsearchInput] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     setsearchInput(event.target.value)

//     let response = songs.filter((song) => {
//       if (
//         song.title.includes(searchInput) ||
//         song.artist.includes(searchInput) ||
//         song.album.includes(searchInput) ||
//         song.release_date.includes(searchInput) ||
//         song.genre.includes(searchInput)
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     setSongss(response);
//   }

//   return (
//     <div >
//       <div className="center">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={searchInput}
//             onChange={(event) => setsearchInput(event.target.value)}
//           ></input>
//           <button className="searchbutton" type="submit">Search</button>
//         </form>
//         <form onSubmit={getAllSongs}>
//           <button type="submit" className="searchbutton">Reset Filter</button>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default SearchBar;