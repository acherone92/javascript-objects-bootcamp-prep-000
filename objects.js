var playlist = {artistName:'songTitle'};

function updatePlaylist (playlist, artistName, songTitle){
  playlist = Object.assign({}, playlist, {artistName:songTitle});
  return playlist
}