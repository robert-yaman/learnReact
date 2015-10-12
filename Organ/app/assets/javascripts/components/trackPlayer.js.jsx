TrackPlayer = React.createClass({
  getInitialState: function() {
    return { isPlaying : false };
  },

  render: function() {
    var playOrStopButton;
    if (this.props.isPlaying) {
      playOrStopButton = <button onClick={this._stop}>Stop</button>;
    } else {
      playOrStopButton = <button onClick={this._play}>Play</button>;
    }

    return (
      <div>
        {playOrStopButton}
        <button onClick={this._delete}>Delete</button>
      </div>
    );
  },

  _delete: function() {
    TrackActions.deleteTrack(this.props.track);
  },

  _play: function() {
    this.props.playTrack(this.props.track);
  },

  _stop: function() {
    this.props.stopTrack(this.props.track);
  }
});
