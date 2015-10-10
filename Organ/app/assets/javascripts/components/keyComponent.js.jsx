var KeyComponent = React.createClass({
  getInitialState: function() {
    return {playing : false};
  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.on("change", this._onChange);
  },

  render: function() {
    var playing = (this.state.playing) ? "playing" : "";
    var className = "key " + playing;
    return (<p className={className}>{ this.props.noteName }</p>);
  },

  _thisKeyPressed: function() {
    return KeyStore.all().indexOf(this.props.noteName) !== -1;
  },

  _onChange: function() {
    var playing = this._thisKeyPressed();
    this.setState({playing : playing});
    if (playing) {
      this.note.start();
    } else {
      this.note.stop();
    }
  }
});
