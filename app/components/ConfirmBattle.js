var React = require('react');

function ConfirmBattle (props) {
  //if the component is loading, render loading, otherswise render confirm battle
  return props.isLoading ===true
    ? <p>LOADING!</p>
    : <p>CONFIRM BATTLE!</p>
}

module.exports = ConfirmBattle;
