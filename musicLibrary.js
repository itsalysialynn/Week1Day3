var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var id in library.playlists) {  
    console.log(library.playlists[id].id + ": " + library.playlists[id].name + " - " + library.playlists[id].tracks.length); 
  }
}

printPlaylists(library);


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var id in library.tracks) {
    console.log(library.tracks[id].id + ": " + library.tracks[id].name + " by " + library.tracks[id].artist + " (" + library.tracks[id].album + ")")
  } 

} 

printTracks(library);


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (mainLibrary, playlistId) {
  var input = playlistId
  for (var id in mainLibrary.playlists) {
    if (id === input) {
      console.log (mainLibrary.playlists[input].id + ": " + mainLibrary.playlists[input].name + " - " + mainLibrary.playlists[input].tracks.length);
    } 
  } 

  var playlistTracks = mainLibrary.playlists[input].tracks;
  var allLibraryTracks = library.tracks;

  for (var i = 0; i < playlistTracks.length; i++) {
     for (var trackId in allLibraryTracks) {
        if (playlistTracks[j] === trackId) {
          console.log(allLibraryTracks[trackId].id + ": " + allLibraryTracks[trackId].name + " by " +allLibraryTracks[trackId].artist + " (" + allLibraryTracks[trackId].album + ")");
        }
      }
  }

} 

printPlaylist(library, 'p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var id = trackId;
  var playlist = playlistId;
  
  var tracks = library.playlists[playlistId].tracks;
  tracks.push(trackId);
}

addTrackToPlaylist("t01", "p02")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  library.tracks[newId] = {
    id: newId, 
    name: name, 
    artist: artist,
    album: album
    
  };
}

addTrack("Name", "Artist", "Album");

// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  library.playlists[newId] = {
    id: newId,
    name: name, 
  };
}

addPlaylist("My playlist");

console.log(library.playlists);
