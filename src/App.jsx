
import Footer from "./layouts/Footer"
import Header from "./layouts/header"

import Blogs from "./pages/Blogs"
import Cart from "./pages/Cart"
import CategoryPage from "./pages/CategoryPage"
import DiscountedProducts from "./pages/DiscountedProducts"
import Favorites from "./pages/Favorites"
import GiftCard from "./pages/GiftCard"
import Login from "./pages/Login"

import MainPage from "./pages/mainPage"
import Post from "./pages/Post"
import Profile from "./pages/Profile"
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
        <Route path="/hediyekartı">
          <GiftCard />
        </Route>
        <Route path="/snapkart">
          <SnapCard />
        </Route>
        <Route path="/indirim">
          <DiscountedProducts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/sepet">
          <Cart />
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
        <Route path="/:gender/:subcategory">
          <CategoryPage />
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
