import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams,useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
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
	  // marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
    backgroundColor: 'palevioletred',
	},
  
  }));
 
function ChPasse() {
  const [log,SetLog]=useState({
    password:'',
    c_password:'',
    showPassword1: false,
    showPassword2: false,
    code:'',
  });
  const [open, setOpen] = React.useState(false);
  const[errorCode,SetErrorCode]=useState('');
  const[errorpass,SetErrorpass]=useState('');
  const[errorCpass,SetErrorCpass]=useState('');
  const[errorCpassc,SetErrorCpassc]=useState('');
  const [bienmodi,setbienModi]=useState('');
  const [loadin,setloadin]=useState(false);
  let { email } = useParams();
  const email1={email}
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const [rt,srt]=useState(false);
  const handlesubmit=(e)=>
  {
       
        e.preventDefault();
  }
  const handleClickShowPassword1 = () => {
    SetLog({ ...log, showPassword1: !log.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    SetLog({ ...log, showPassword2: !log.showPassword2 });
  };
  const handleChange = (prop) => (event) => {
    SetLog({ ...log, [prop]: event.target.value });
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let history = useHistory();
  // function HomeButton() {
  //   let history = useHistory();
  
  //   function handleClick() {
  //     history.push("/home");
  //   }
  
	  const classes = useStyles();
  async function ModifierPass(e)
  {
    e.preventDefault();
    if(log.code!="" && log.password.length>8 && log.password==log.c_password)
    {
      setloadin(true)
      const frmDatta=new FormData();
      frmDatta.append('code_pass',log.code); 
      frmDatta.append('password',log.password);
      await axios({
        method: "post",
        url: 'ForgetPass/'+email1.email,
        data: frmDatta,
        headers: { "Content-Type": "multipart/form-data" },
        }).then(res=>{
          if(res.data.message)
          {setOpen(true);
            setbienModi(res.data.message)
            SetErrorCode(''); 
            SetErrorpass('');
            SetErrorCpass('');
            SetErrorCpassc('');
            history.push("/CONNECTER");
          }
          else
          {
            SetErrorCode(res.data.error);
            setbienModi('');
            SetErrorpass('');
            SetErrorCpass('');
            SetErrorCpassc('');
          }
        })
        setloadin(false)
    }
    else
    {
      if(log.code=="")
      {
        SetErrorCode('tapez code de email');
      }
      else
      {
        SetErrorCode('');
      }
      if(log.password.length<8 )
      {
        SetErrorpass('mode passe qui contient plusieurs de 8 caracteres');
      }
      else
      {
        SetErrorpass('');
      }

      if(log.c_password.length<8 )
      {
        SetErrorCpass('mode passe qui contient plusieurs de 8 caracteres');
      }
      else
      {
        SetErrorCpass('');
      }
      if(log.c_password.length>8 && log.password.length>8 && log.c_password!=log.password)
      {
        
        SetErrorCpassc('les deux mode passe il est defferents');
      }
      else
      {
        SetErrorCpassc('');
      }
     if(log.password!=log.c_password){
      SetErrorCpassc('les deux mode passe il est defferents');
     }
      else
      {
        SetErrorCpassc('');
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
          Modifier Mode Passe
        </Typography>
        <form className={classes.form} onSubmit={handlesubmit}>
          {errorCode==""?
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="code"
            label="code"
            name="code"
            autoComplete="code"
            autoFocus
            onChange={handleChange('code')}
          />:
          <TextField
          error
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="text"
          id="code"
          label="code"
          name="code"
          autoComplete="code"
          autoFocus
          helperText={errorCode}
          onChange={handleChange('code')}
          />
        }
          <DivMar>
        {errorpass==""?
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
        </FormControl>:
         <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
            error
            id="outlined-adornment-password"
            type={log.showPassword1 ? 'text' : 'password'}
            value={log.password}
            component={errorpass}
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
        </FormControl>
         
          }
           {errorpass!=""?<Pred>{errorpass}</Pred>:""}
          </DivMar>
          <DivMar>
          {errorCpass==""?
          errorCpassc!=""?
          <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
            error
            id="outlined-adornment-password"
            type={log.showPassword2 ? 'text' : 'password'}
            value={log.c_password}
            onChange={handleChange('c_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {log.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>:
        <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">c mode passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={log.showPassword2 ? 'text' : 'password'}
            value={log.c_password}
            onChange={handleChange('c_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {log.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>: <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">c mode passe</InputLabel>
          <OutlinedInput
            error
            id="outlined-adornment-password"
            type={log.showPassword2 ? 'text' : 'password'}
            value={log.c_password}
            onChange={handleChange('c_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {log.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            }
        {errorCpass!=""?<Pred>{errorCpass}</Pred>:errorCpassc!=""?<Pred>{errorCpassc}</Pred>:""}
        </DivMar>
        {loadin==false?
          <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={(e)=>{
            ModifierPass(e);
          }
          }
        >
         Modifier mode passe
        </Button> :
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
      </div>



      <Snackbar 
        open={open} 
        autoHideDuration={6000}
         onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mode passe Bien Modifier
        </Alert>
      </Snackbar>
    </Container>	
        </div>
    )
}

export default ChPasse
//  ffb4b4//7mar
// aee1e1//zra9
// ffc478//sfar
// ee99a0//
// b8b5ff
const DivMar= styled.div `
    margin-top:15px;
`;

const Pred= styled.p `
    color:red;
    font-size: 0.9em;
    padding-left:5px;
`;