var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle');


var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired  //gives access to our router
  },

  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function(){
    var query = this.props.location.query  //routed over as props from the PromptContainer
    //fetch infor from gh then update state
  },

  render: function() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>
    );
  }

})

module.exports = ConfirmBattleContainer;
