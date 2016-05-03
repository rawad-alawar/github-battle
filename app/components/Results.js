var React = require('react')
var PropTypes = React.PropTypes;

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results (props) {
  return <div>{puke(props)}</div>
}
// function Results (props){
//   return(
//     <div> Results </div>
//   )
// }

Results.PropTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Results;
