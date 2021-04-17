import logo from './logo.svg';
import Nav from './component/Nav'
import Login from './component/Login'
import Siup from './component/Siup'
import SendE from './component/SendE'
import Profil from './component/Profil'
import AllProjet from './component/AllProjet'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [user, setUsers] = useState({});
    if (localStorage.getItem('token')) {
        axios.get('/getUser_Connected').then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    return ( <
            Router >
            <
            div className = "App" >
            <
            Nav className = "navpp" / >
            <
            Switch >
            <
            Route exact path = "/CONNECTER"
            component = { Login }
            /> <
            Route exact path = "/AllProjet"
            component = { AllProjet }
            /> <
            Route exact path = "/CreerCompte"
            component = { Siup }
            /> <
            Route exact path = "/oblierModePasse"
            component = { < SendE name = { user }
                /> }/ >
                <
                Route exact path = "/Profil"
                component = { < Profil name = { user }
                    />}/ >
                    <
                    /Switch> <
                    /div> <
                    /Router>

                );
            }

            export default App;