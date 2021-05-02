import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
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
    backgroundColor: 'palevioletred',
	},
  lg1:
  {
    
  },
  }));
function Login() {
	const [email,Setemail]=useState('');
  const [envoi,getEnvoi]=useState(false);
  const [err,seterr]=useState(false);
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');
  const [open, setOpen] = React.useState(false);
  const [loadin,setloadin]=useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
  }, [])
	  const classes = useStyles();
   async function EnvoyerEmail(e)
    {
      setloadin(true);
      e.preventDefault();
      const dt=new FormData();
      dt.append('email',email);
      await axios({
        method: "post",
        url: "/ForgetPassemail",
        data: dt,
        headers: { "Content-Type": "multipart/form-data" },
        }).then(res=>{
          if(res.data.Erreurs)
          {
            setError(res.data.Erreurs);
            seterr(true);
          }
          else
          {
            setMessage(res.data.message);
            seterr(false);
            getEnvoi(true)
            setOpen(true);
          }
        }).catch(err=>{
          console.log(err);
        })

        setloadin(false);
    }

    return (
        <div>
		 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form noValidate>
        {err==false?
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>{
              Setemail(e.target.value);
            }}
          />:
          <TextField
            error
            variant="outlined"
            margin="normal"
            id="outlined-error-helper-text"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            
            
            onChange={(e)=>{
              Setemail(e.target.value);
            }}
          />}
          {loadin==false?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary"
            className={classes.submit}
            onClick={(e)=>{
              EnvoyerEmail(e)
            }}
          >
           Envoyer Email
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
          
          
          
          
        </form>
        <Snackbar 
        open={open} 
        autoHideDuration={6000}
         onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Email Bien envoyer
        </Alert>
      </Snackbar>
      </div>

    </Container>	
        </div>
    )
}

export default Login
const Btnloqd= styled.button `
     width:60px;
`;
