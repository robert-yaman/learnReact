keyActions = {
  startNote: function(note) {
    AppDispatcher.dispatch({
      actionType: "start",
      note: note
    });
  },

  stopNote: function(note) {
    AppDispatcher.dispatch({
      actionType: "stop",
      note: note
    });
  },

  setNotes: function(notes) {
    AppDispatcher.dispatch({
      actionType: "set",
      notes: notes
    });
  }
};
