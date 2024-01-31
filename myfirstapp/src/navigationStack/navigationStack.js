import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginsScrenn/homeScreen"
import SettingsScreen from "../screens/postLoginsScrenn/settingsScreen"
import AboutScreen from "../screens/postLoginsScrenn/aboutScreen"
import ProductScreen from "../screens/postLoginsScrenn/productScreen"
import InvalidScreen from "../screens/invlaidScreen"


 





  
const Navigator=()=>{


return(
<BrowserRouter>
<Routes>
    <Route path="/" Component={HomeScreen}     /> 
    {/* <Route path="/settings"   Component={SettingsScreen}/>
    <Route path="/about" Component={AboutScreen}/>
    <Route  path="/product" Component={ProductScreen}/>
    <Route path="*" Component={InvalidScreen}/> */}

</Routes>

</BrowserRouter>
)

}
export default Navigator