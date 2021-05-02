import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import Cookies from  'js-cookie';
import { Router } from 'react-router';
import {Hommes, login} from '../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
const useStyles = makeStyles((theme) => ({
	paper: {
	  marginTop: theme.spacing(8),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: 'palevioletred',
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
    backgroundColor: 'transparnt',
	},
  lg1:
  {
    
  },
  }));
  
 
function Login() {
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      history.push('/');
    }
      Cookies.remove('user_name');
      localStorage.removeItem('token');
  
    
  })
  
  const dispatch=useDispatch();
  const coki=Cookies.get('email');
  const [log,SetLog]=useState({
    email:'',
    password:'',
    showPassword1: false,
  });
  const [cnt,setcnt]=useState(0);
  const [emptyEmail,setEmptyemail]=useState('');
  const [emptypassword,setEmptypassword]=useState('');
  const [errorActivate,seterrorActivate]=useState('');
  const [rt,srt]=useState(false);
  useEffect(() => {
    if(errorActivate!=null)
    {
      setInterval(() => {
        seterrorActivate('');
      }, 10000);
    }
  },[errorActivate])
  const handleClickShowPassword1 = () => {
    SetLog({ ...log, showPassword1: !log.showPassword1 });
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    SetLog({ ...log, [prop]: event.target.value });
  };
	  const classes = useStyles();
  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  

  let history = useHistory();
let connect=useSelector((state)=>state.conn.loginConn);
  const handlesubmit=(e)=>
  { e.preventDefault();
    if(validateEmail(log.email) && log.password!="" && log.email!="")
    {
      srt(true);
      const bodyFormData=new FormData();
      bodyFormData.append('email',log.email);
      bodyFormData.append('password',log.password);
      axios({
      method: "post",
      url: "/Login",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      }).then(res=>{
           if(res.data.erroremail)
           {
            setEmptyemail("email n'xists pas");
           }
           if(res.data.errorpass)
           {
            setEmptypassword('mode passe incorrect');
           }
           if(res.data.errorActivation)
           {
              seterrorActivate(res.data.errorActivate);
           }
           if(res.data.success)
           {
            dispatch(login(res.data.type));
            localStorage.setItem('token',res.data.success.token);
            let userCokie=(Cookies.set('user_name',res.data.type.user_name).split(';'));
             userCokie=(userCokie[0].split('='))[1].replace("%20", " ");
             Cookies.set('user_name',userCokie);
           
            
            if(res.data.type.Type=="user")
            {   
              connect==null?
              history.push('/'): 
              history.push(connect)
            }
            else
            {
              history.push('/AdminOussa');
            }
            

           }
   
      }).catch(err=>{
        console.log(err);
      })
     srt(false);
    }
    else
    {
      if(!log.email=="")
      {
        if(!validateEmail(log.email))
          setEmptyemail('forma email invalide');
        
        else
        setEmptyemail('');
      }
      if(log.email=="")
      {
        setEmptyemail('tapez email s\'il vous plait');
      }
      if(log.password=="")
      {
        setEmptypassword('tapez mode passe s\'il vous plait');
      }
      if(!log.password=="")
      {
        setEmptypassword('');
      }

    }
  }
  
    return (
        <div>
		 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connecter
        </Typography>
        <form className={classes.form} >
        {coki==""  && emptyEmail==""?
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            values={log.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange('email')}
          />:
          emptyEmail=="" &&coki!=""?
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            text={coki}
            values={log.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange('email')}
            />:
            emptyEmail!="" &&coki!=""?
           <TextField
             error
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            values={log.email}
            text={coki}
            autoComplete="email"
            autoFocus
            helperText={emptyEmail}
            onChange={handleChange('email')}
             />:
             <TextField
             error
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            values={log.email}
            text={coki}
            autoComplete="email"
            autoFocus
            helperText={emptyEmail}
            onChange={handleChange('email')}
            />
             }
          {emptypassword==""?
           <FormControl  variant="outlined"  fullWidth>
           <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={log.showPassword1 ? 'text' : 'password'}
              value={log.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    edge="end"
                  >
                    {log.showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>: <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
          error
            id="outlined-adornment-password"
            type={log.showPassword1 ? 'text' : 'password'}
            value={log.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {log.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {emptypassword==""?"":<Pred>{emptypassword}</Pred>}
        </FormControl>}
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"  />}
            label="Reste Connecter"
          />
           <Grid container justify="flex-end" item xs={12}>
              <Link href='/envoyerEmail'>
			        Vous avez oublié votre mot de passe?
              </Link>
            </Grid>
            {rt==false?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={(e)=>{
              handlesubmit(e);
            }}
          >
           Connecter
          </Button>:
            <Button
            disabled
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            
          > 
           <CircularProgress color="secondary" />
          </Button>
          }
       
           
           <Grid container justify="flex-end" item xs={12}>
              <Link href="/CreerCompte" className={classes.lg1}>
                {"Vous n'avez pas de compte? creer compte"}
              </Link>
              </Grid>
        </form>
      </div>
      <Aler>
        {errorActivate!=""?
         <Alert variant="warning" >
        {'s\'il vous plait checker votre email pour activer compte'}
      </Alert>:""
         }
      </Aler>
         
    </Container>	
        </div>
    )
}

export default Login

const Pred= styled.p `
    color:red;
    font-size: 0.9em;
    padding-left:5px;
`;
const Aler= styled.div `
   margin-top:10px;
`;