var Recorder = React.createClass({
  getInitialState: function() {
    return { isRecording : false, track : new Track({}) };
  },

  componentDidMount: function() {
    KeyStore.on("change", this._onChange);
  },

  playRecording: function() {
    this.state.track.playRecording();
  },

  startRecording: function() {
    this.setState({isRecording : true});
    this.state.track.startRecording();
  },

  stopRecording: function() {
    this.setState({isRecording : false});
    this.state.track.stopRecording();
  },

  render: function() {
    var recordingMessage = (this.state.isRecording) ? "Recording..." : "";
    return (
      <div>
        <span>{recordingMessage}</span>
        <button onClick={this.startRecording}>Start</button>
        <button onClick={this.stopRecording}>Stop</button>
        <button onClick={this.playRecording}>Play</button>
      </div>
    );
  },

  _onChange: function() {
    if (this.state.isRecording) {
      this.state.track.addNote(KeyStore.all());
    }
  }
});
