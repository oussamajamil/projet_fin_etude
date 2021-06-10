
import React, { useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import ListItem from '@material-ui/core/ListItem';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import axios from 'axios';
import Cookies from  'js-cookie';
import AddIcon from '@material-ui/icons/Add';
import {Hommes} from '../redux/actions/UserActions';
import {useDispatch } from 'react-redux' ; 
import Logo from './slideHomme/OJ.png';
import {Nav,Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  img_slage: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  button: {
    margin: theme.spacing(0,10),
    backgroundColor: 'palevioletred',
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
function NavP() {
  const [data,setData]=useState({})
  const dispatch=useDispatch();
  useEffect(() => {
   if(localStorage.getItem('token'))
    getData();
  },[]);
  const getData=()=>{
        let token='Bearer '+localStorage.getItem('token');
        const frm=new FormData();
        frm.append('user_name',Cookies.get('user_name'))
      axios({
            method: "POST",
            url: '/getUser_Connected',
            data: frm,
            headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token
                     },
            }).then(res=>{
                dispatch(Hommes(res.data.data[0]));
                setData(res.data.data[0]);
            }).catch(errres=>{
                console.log(errres);
            })
    }
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  const classes = useStyles();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClicks1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses1 = () => {
    setAnchorEl(null);
  }; 
  const user=useSelector((state)=>state.app1.user_connecter);
  const user1=useSelector((state)=>state.app.users);
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
    return (
      <Router>
        <div>
         <Navbar expand="lg" className="ng" style={{width:'100%!important'}}>
        <Navbar.Brand href="/"><img src={Logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Homme" > Découvrir</Nav.Link>
            <Nav.Link href="/Questions">Question</Nav.Link>
            <Nav.Link href="/AllProjet">Projets</Nav.Link>
             {user==null && user1==null?
              "":
            <Button
            variant="contained"
            href="/Confirmation"
            className={classes.button}
            startIcon={<AddIcon/>}
          >
            creer Votre projet
          </Button>
             }

          </Nav>
          {user==null?
          user1==null?
            <Nav>
            <div>
          <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          className="btnConnec"
          onClick={handleClicks1}
          >
          Connection
          </Button>
          <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloses1}
          >
          <StyledMenuItem >
          <ListItemLink href="/CONNECTER">
            <ListItemIcon >
              <LockOpenIcon fontSize="small" />
            
            </ListItemIcon>
            <ListItemText primary="Connecter" />
            </ListItemLink>
          </StyledMenuItem>
          <StyledMenuItem>
          <ListItemLink href="/CreerCompte">
            <ListItemIcon>
              <CreateIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="creer compte" />
            </ListItemLink>
          </StyledMenuItem>
          </StyledMenu>
          </div>
          </Nav>:
           <Nav>
           <div>
       <Button
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="primary"
         className="btnConnec"
         onClick={handleClicks1}
       >
         {user1.user_name}
       </Button>
       <StyledMenu
         id="customized-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleCloses1}
       >
          <ListItemLink href="/Profil">
         <StyledMenuItem>
           <ListItemIcon>
             <AccountCircleIcon fontSize="small" />
           </ListItemIcon>
           <ListItemText primary="Profil" />
         </StyledMenuItem>
         </ListItemLink>
         <ListItemLink href="/Deconecter">
         <StyledMenuItem>
           <ListItemIcon>
             <LockIcon fontSize="small" />
           </ListItemIcon>
           <ListItemText primary="Deconecter"/>
         </StyledMenuItem>
         </ListItemLink>
       </StyledMenu>
     </div>
           <Avatar className={classes.img_slage} src={user1 && user1.photo!="images/user.png"?"http://127.0.0.1:8000/"+user1.photo:user && user.photo!="images/user.png"?"http://127.0.0.1:8000/"+user.photo:""}>
              {user1 && user1.photo=="images/user.png"?user1.prenom.charAt(0).toUpperCase():user && user.photo=="images/user.png"?user.prenom.charAt(0).toUpperCase():""}
            </Avatar>
          </Nav>
          :<Nav>
          <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className="btnConnec"
        onClick={handleClicks1}
      >
        {user.user_name}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloses1}
      >
         <ListItemLink href="/Profil">
        <StyledMenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profil" />
        </StyledMenuItem>
        </ListItemLink>
        <ListItemLink href="/Deconecter">
        <StyledMenuItem>
          <ListItemIcon>
            <LockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Deconecter"/>
        </StyledMenuItem>
        </ListItemLink>
      </StyledMenu>
    </div>
       <Avatar className={classes.img_slage} src={data.photo!="images/user.png"?"http://127.0.0.1:8000/"+data.photo:""}>
              {data.photo=="images/user.png"?data.prenom.charAt(0).toUpperCase()+data.nom.charAt(0).toUpperCase():""}
            </Avatar>
         </Nav>
             
         }
            
          
        </Navbar.Collapse>
       </Navbar>
        </div>
       </Router>
    )
}
export default NavP