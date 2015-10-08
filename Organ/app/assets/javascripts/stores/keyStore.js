(function(root) {

var _store = {};

function startNote(note) {
  _store[note] = true;
}

function stopNote(note) {
  _store[note] = false;
}

root.MyStore = $.extend({}, EventEmitter.prototype, {
  all : function () {
    return _store.splice();
  },

  emitChange: function() {
    this.emit("change");
  }
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case "start":
      startNote(action.note);
      MyStore.emitChange();
      break;
    case "stop":
      stopNote(action.note);
      MyStore.emitChange();
      break;
    default:
      // no op
  }
});

})(this);
