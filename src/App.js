import Home from "./route/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import SignIn from "./route/sign-in/sign-in.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";



const Shop = () => {
  return(
    <h1>i am the shop page</h1>
  )
}

const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        {/* <Route path="/sign-up" element={<SignUpForm/>}/> */}
      </Route>
      
    </Routes>
  );
}

export default App;