import Home from "./route/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/authentication.component";
// import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Shop from "./route/shop/shop.component";




const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="/auth" element={<Authentication/>}/>
        {/* <Route path="/sign-up" element={<SignUpForm/>}/> */}
      </Route>
      
    </Routes>
  );
}

export default App;
