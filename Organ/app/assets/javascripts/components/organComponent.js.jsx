var OrganComponent = React.createClass({
  render: function () {
    var keys = Object.keys(TONES);
    return (
      <div>
        <ul>
          {
            keys.map(function(key){
              return (<li><KeyComponent noteName={key}/></li>);
            })
          }
        </ul>
        <Recorder/>
      </div>
    );
  }
});

$(function(){
  React.render(<OrganComponent/>, document.getElementById("organ"));
});
