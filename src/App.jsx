
import Footer from "./layouts/Footer"
import Header from "./layouts/header"
import { cn } from "./lib/utils"
import Blogs from "./pages/Blogs"
import GiftCard from "./pages/GiftCard"
import Login from "./pages/Login"

import MainPage from "./pages/mainPage"
import Post from "./pages/Post"
import Register from "./pages/Register"
import SnapCard from "./pages/SnapCard"
import { Switch, Route } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="w-full">
      <Header />

      <Switch>

        <Route path="/giftcard">
          <GiftCard />
        </Route>
        <Route path="/snapcard">
          <SnapCard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>

      </Switch>

      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App
