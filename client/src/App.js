import React,{useEffect,createContext,useReducer} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/SignIn'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

const UserContext()=createContext()


const Routing =()=>{
	const history=useHistory()
	return(
		<Switch>
		<Route exact path="/">
			  <Home/>
		  </Route>
		  <Route path="/signin">
			  <Signin/>
		  </Route>
		  <Route path="/profile">
			  <Profile/>
		  </Route>
		  <Route path="/signup">
		        <Signup/>
		 </Route>
		  <Route path="/create">
			  <CreatePost/>
		  </Route>
		</Switch>

		)
}

function App() {
  return (
	  <BrowserRouter>
		  <NavBar/>
		  <Routing/>
	  
	  </BrowserRouter>
	  
  );
}

export default App;
