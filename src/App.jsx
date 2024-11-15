import { Testdata } from "./axios";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Products } from "./products";
import { Tp } from "./tp";
import { NombreUser } from "./tpNbrUser";

import { UsersPost } from "./tpcours";
import { Compteur } from "./compteur";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Logged } from "./logged";
import { Login } from "./login";
import { Inscription } from "./inscription";
export function App(){

    return(
        <div>
        {/* <Router>
            <nav style={{display:"flex",justifyContent:"space-between"}}>
                <Link to="/product/:product_name">Tp Products</Link> ||
                <Link to="/SearchUser">Tp search on user</Link>||
                <Link to="/NombresUsers">Tp nombre users</Link>||
                <Link to="/userspost">Tp users post</Link>||
                <Link to="/compteur">compteur</Link>



            </nav>
            <Routes>
                <Route path="/product/:product_name" element={<Products/>}/>
                <Route path="/SearchUser" element={<Tp/>}/>
                <Route path="/NombresUsers" element={<NombreUser/>}/>
                <Route path="/userspost" element={<UsersPost/>}/>
                <Route path="/compteur" element={<Compteur/>}/>    
            </Routes>    
        </Router>     */}

            <Router>


                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Inscription" element={<Inscription/>}/>


                    <Route path="/logged" element={<Logged/>}/>
                </Routes>
            </Router>

        
        </div>
    )
}