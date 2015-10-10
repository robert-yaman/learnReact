(function(){

var Track = window.Track = function(attrs) {
  this.name = attrs.name;
  this.roll = attrs.role || [];
};

Track.prototype.addNote = function (noteNames) {
  this.roll.push({ timeSlice : Date.now() - this.startTime, notes : noteNames });
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.stopRecording = function () {
  this.addNote([]);
};

Track.prototype.playRecording = function () {
  if (this.interval) return;
  var playbackStartTime = Date.now();
  var currentNoteIdx = 0;
  this.interval = setInterval(function(){
    if (Date.now() - playbackStartTime >= this.roll[currentNoteIdx].timeSlice) {
      keyActions.setNotes(this.roll[currentNoteIdx].notes);
      currentNoteIdx ++;
    }
    if (currentNoteIdx >= this.roll.length) {
      clearInterval(this.interval);
    }
  }.bind(this), 50);
};

})();
