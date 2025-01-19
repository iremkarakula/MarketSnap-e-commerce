
import { Toaster } from "./components/ui/toaster"
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
import ProductDetails from "./pages/ProductDetails"
import ProductListingPage from "./pages/ProductListingPage"
import Profile from "./pages/Profile"
import ProfilePage from "./pages/ProfilePage"
import Register from "./pages/Register"
import SnapCard from "./pages/SnapCard"
import { Switch, Route } from "react-router-dom"
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  return (
    <div className="w-full">
      <Header />

      <Switch>
        <Route path="/hediyekarti">
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

        <Route path="/profile/:item">
          <ProfilePage />
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
        <Route path="/:gender/:category/:subcategory/:id">
          <ProductDetails />
        </Route>
        <Route path="/:gender/:category/:subcategory">
          <ProductListingPage />
        </Route>
        <Route path="/:gender/:category">
          <ProductListingPage />
        </Route>


        <Route path="/">
          <MainPage />
        </Route>

      </Switch>

      <Footer />

      <ToastContainer />
      <Toaster />
    </div>
  )
}

export default App
