import React from 'react';
import axios from 'axios';
// import { createStore } from 'redux';
// import allReducers from '../reducers';
// import { Provider } from 'react-redux';
/*
Import the necessary bootstrap components if using React Bootstrap
*/

/*
Set up redux store here for redux here using i.e const store = createStore(allReducers);
then wrap jsx below in a <Provider store={store}></Provider> then wrap anny other conatiners that need that state in the providers
*/
class App extends React.Component {

	render(){
		return(
			<h1> Welcome to Your App</h1>
		)
	}
}

export default App;