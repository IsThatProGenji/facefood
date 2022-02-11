import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Upload from "./pages/Upload/Upload"
import Profile from './pages/Profile/Profile';
import Post from './pages/Post/Post';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/login" exact render={() => <Login />}></Route>
        <Route path="/register" exact render={() => <Register />}></Route>
        <Route path="/upload" exact render={() => <Upload />}></Route>
        <Route path="/profile" exact render={() => <Profile />}></Route>
        <Route path="/post/:id" exact render={() => <Post />}></Route>
      </Router>
    </>
  );
}

export default App;
