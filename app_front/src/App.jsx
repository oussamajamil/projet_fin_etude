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
import Confirmation from './component/Confirmation';
import CreationSeccus from './component/CreationSeccus';
import Doshbord from './component/Admin/Doshbord';
import HowItWork from './component/HowItWork';
import DetailleProject from './component/DetailleProject';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

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
         <Route exact path = "/Confirmation" component ={Confirmation}/>
         <Route exact path = "/projetsSecuss" component ={CreationSeccus}/>
         <Route exact path = "/Seccusprojets"  component={ AllProjet }/>
         <Route exact path = "/doshbord"  component={ Doshbord }/>
         <Route exact path = "/Homme"  component={ HowItWork }/>
         <Route exact path = "/detailleProjet/:nomProjet"  component={ DetailleProject }/>
         
         <Route  component ={NotFound}/>
        </Switch>
        
        </div>
         </Router>
         
    );
    
}

export default App;