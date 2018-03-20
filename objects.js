var playlist = {artistName:'songTitle'};

function updatePlaylist (playlist, artistName, songTitle){
  playlist = playlist.artistName =`${songTitle}`;
  
  return playlist;
}