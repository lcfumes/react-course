var React = require('react');
var ReactDOM = require('react-dom');

var Catalog = React.createClass({
  render: function () {
    var teamName = 'Catalog'
    var team = ['Luiz Fumes', 'Luis Baroni', 'Paulo Gomes', 'Fabio Ribeiro']
    return (
      <div>
        <h3>{teamName}</h3>
        <ShowList names={team} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(team){
      return <li> {team} </li>;
    });
    return (
      <div>
        <h3> Team </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<Catalog />, document.getElementById('app'));