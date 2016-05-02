var React = require('react')
var transparentBg = require('../styles').transparentBg
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function(){
    return{
      username: ''
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne){
      console.log(this.context)
      this.context.router.push({
        pathname: '/battle',
        query: {
          //this information gets passed onto the new battle route
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
      //go to /battle, the playerOne param was passed through the Router
      //if the param is playerOne, that means we are on the PlayerTwo page
    }else{
      console.log(this.context)
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    console.log(this.props.routeParams)
    return(
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username = {this.state.username}
      />
    )
  }
})

module.exports = PromptContainer
