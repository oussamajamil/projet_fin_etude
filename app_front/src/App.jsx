import Nav from './component/Nav'
import Login from './component/Login'
import Siup from './component/Siup'
import SendE from './component/SendE'
import Profil from './component/Profil'
import AllProjet from './component/AllProjet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homme from './component/Homme';
import ChPasse from './component/ChPasse';
import ActiverCompte from './component/ActiverCompte';
import Deconecter from './component/Deconecter';
import NotFound from './component/NotFound';
import Qustion from './component/Question/Qustion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Hommes } from './redux/actions/UserActions'
import { useDispatch } from 'react-redux'

function App() {
  return (
    
       
        <Router>
        <div className = "App" >
        <Nav className = "navpp" />
        <Switch>
        <Route exact path = "/">
            <Homme/>
        </Route>
        <Route exact path = "/CONNECTER" component = { Login }/>
         <Route exact path = "/AllProjet" component = { AllProjet }/>
         <Route exact path = "/CreerCompte" component = { Siup }/>
         <Route exact path = "/envoyerEmail" component = {SendE}/>
         <Route path = "/forgitPass/:email" component = {ChPasse}/>
         <Route path = "/ActiverCompte/:email" component = {ActiverCompte}/>
         <Route exact path = "/Deconecter" component ={Deconecter}/>
         <Route exact path = "/Profil" component ={Profil}/>
         <Route exact path = "/Questions" component ={Qustion}/>
         <Route  component ={NotFound}/>

        </Switch>
        </div>
         </Router>
         
    );
    
}

export default App;