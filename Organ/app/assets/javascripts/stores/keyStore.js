(function(root) {

var _store = [];

function startNote(note) {
  var idx = _store.indexOf(note);
  if (idx === -1) {
    _store.push(note);
  }
}

function stopNote(note) {
  var idx = _store.indexOf(note);
  if (idx !== -1) {
    _store.splice(idx);
  }
}

root.KeyStore = $.extend({}, EventEmitter.prototype, {
  all : function () {
    return _store.slice();
  },

  emitChange: function() {
    this.emit("change");
  }
});

AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case "start":
      startNote(action.note);
      KeyStore.emitChange();
      break;
    case "stop":
      stopNote(action.note);
      KeyStore.emitChange();
      break;
    default:
      // no op
  }
});

})(this);
