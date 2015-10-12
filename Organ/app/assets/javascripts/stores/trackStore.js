(function(root) {

_store = [];

function addTrack(track) {
  var idx = _store.indexOf(track);
  if (idx === -1) {
    _store.push(track);
  }
}

function deleteTrack(track) {
  var idx = _store.indexOf(track);
  if (idx !== -1) {
    _store.splice(idx, 1);
  }
}

function playTrack(track) {
  var idx = _store.indexOf(track);
  if (idx !== -1) {
    _store[idx].playRecording();
  }
}

root.TrackStore = $.extend({}, EventEmitter.prototype, {
  all: function() {
    return _store.slice();
  },

  emitChange: function() {
    this.emit("change");
  }
});

AppDispatcher.register(function(action){
  switch (action.actionType) {
    case "addTrack":
      addTrack(action.track);
      TrackStore.emitChange();
      break;
    case "deleteTrack":
      deleteTrack(action.track);
      TrackStore.emitChange();
      break;
    case "playTrack":
      playTrack(action.track);
      TrackStore.emitChange();
      break;
  }
});

})(this);
