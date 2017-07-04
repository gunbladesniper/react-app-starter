/*
if this component is using Redux you need to import Redux and react redux functionality
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

additionally you need to import the actions from ../actions/name of actions file

import any components here from ../components/ name of component

require any scss here

Then create the class as normal
class AnotherContainer extends React.Component{
	constructon(props){
	  super(props)
	}


	render(){
	  return(

	  )
	}
}

afterwards you have to map state to props and dispatch to props

function mapStateToProps(state){
  return{
    something: state.something
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    someAction: someAction
  },dispatch)
}

finally you export

export default connect(mapStateToProps, mapDispatchToProps)(AnotherContainer);

otherwise proceed as you normally would
*/