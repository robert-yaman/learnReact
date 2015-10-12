TrackActions = {
  addTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: "addTrack",
      track: track
    });
  },

  deleteTrack: function(track) {
    AppDispatcher.dispatch({
      deleteType: "deleteTrack",
      track: track
    });
  },

  playTrack: function(track) {
    AppDispatcher.dispatch({
      playType: "playTrack",
      track: track
    });
  }
};
