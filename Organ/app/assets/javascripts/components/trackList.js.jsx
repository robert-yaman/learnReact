TrackList = React.createClass({
    getInitialState: function(){
      return { currentlyPlaying: null, tracks : TrackStore.all() };
    },

    componentDidMount: function() {
      TrackStore.on("change", this._onChange);
    },

    playTrack: function(track) {
      if (this.state.currentlyPlaying) {
        this.state.currentlyPlaying.stopRecording();
      }

      track.playRecording();
      this.setState({ currentlyPlaying : track});
    },

    stopTrack: function(track) {
      if (this.state.currentlyPlaying) {
        this.state.currentlyPlaying.stopRecording();
        this.setState({ currentlyPlaying : null });
      }
    },

    render: function () {
      return (
        <ul>
          { this.state.tracks.map(function(track) {
            return (
              <TrackPlayer
              track={track}
              playTrack={this.playTrack}
              stopTrack={this.stopTrack}
              isPlaying={this._isPlaying(track)}
              />
            );
          }.bind(this))}
        </ul>
      );
    },

    _isPlaying: function(track) {
      return this.state.currentlyPlaying === track;
    },

    _onChange: function() {
      console.log("changed") // not getting here
      this.setState({ tracks : TrackStore.all() });
    }
});
