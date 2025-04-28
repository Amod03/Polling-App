import {BrowserRouter as Router , Routes,Route,Navigate} from "react-router-dom"
import './App.css'
import LoginForm from "./pages/Auth/LoginForm"
import SignUpForm from "./pages/Auth/SignUpForm"
import Home from "./pages/Dashboard/Home"
import CreatePoll from "./pages/Dashboard/CreatePoll"
import MyPolls from "./pages/Dashboard/MyPolls"
import VotedPolls from "./pages/Dashboard/VotedPolls"
import Bookmarks from "./pages/Dashboard/Bookmarks"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/login" exact element={<LoginForm/>}/>
        <Route path="/signUp" exact element={<SignUpForm/>}/>
        <Route path="/dashboard" exact element={<Home/>}/>
        <Route path="/create-poll" exact element={<CreatePoll/>}/>
        <Route path="/my-polls" exact element={<MyPolls/>}/>
        <Route path="/voted-polls" exact element={<VotedPolls/>}/>
        <Route path="/bookmarked-polls" exact element={<Bookmarks/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App

//Define the root to handle the initial redirect
const Root=()=>{
  const isAuthenticated=!!localStorage.getItem("token");

  //Redirect to dashboard if authenticated,otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ):(
    <Navigate to="/login"/>
  );
};
