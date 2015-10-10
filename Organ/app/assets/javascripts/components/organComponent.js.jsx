var OrganComponent = React.createClass({
  render: function () {
    var keys = Object.keys(TONES);
    return (
      <ul>
        {
          keys.map(function(key){
            return (<li><KeyComponent noteName={key}/></li>);
          })
        }
      </ul>
    );
  }
});

$(function(){
  React.render(<OrganComponent/>, document.getElementById("organ"));
});
