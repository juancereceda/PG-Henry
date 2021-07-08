
import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import SignupForm from "./components/user/SignupForm";
import MovieDetail from "./components/details/Details";
import Billboard from "./components/billboard/Billboard";
import AdminPage from "./components/adminpage/AdminPage";
import UserProfile from "./components/userprofile/UserProfile";
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">

      <Route path="/" component={Header} />
      <Route path="/products" component={Products} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/movies/:id" component={MovieDetail} />
      <Route path="/billboard" component={Billboard} />
      <Route path="/administration" component={AdminPage} />
      <Route path="/profile" component={UserProfile} />
      <Route exact path='/' component={Home} />

    </div>
  );
}

export default App;
