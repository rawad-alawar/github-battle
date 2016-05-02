var React = require('react');
function puke(object){
  return <pre>{JSON.stringify(object,null, ' ')}</pre>
}
function ConfirmBattle (props) {
  //if the component is loading, render loading, otherswise render confirm battle
  return props.isLoading ===true
    ? <p>LOADING!</p>
    : <p>CONFIRM BATTLE!: {puke(props)}</p>
}

module.exports = ConfirmBattle;
