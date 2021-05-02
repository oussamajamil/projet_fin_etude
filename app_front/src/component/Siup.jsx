import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container' 
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import 'react-intl-tel-input/dist/main.css';
import './Siup.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Cookies from  'js-cookie';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  combo:
  {
    marginTop: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'palevioletred',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'palevioletred',
  },
}));

export default function Siup() {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const classes = useStyles();
  const [pays,setPays]=useState([]);
  const [values, setValues] = React.useState({
    nom:'',
    password: '',
    c_password:'',
    prenom:'',
    user_name:'',
    date_naissance: '',
    showPassword1: false,
    showPassword2: false,
    pays:'',
    email:'',
  });
  const [errornom,seterrornom]=useState('');
  const [errorprenom,seterrorprenom]=useState('');
  const [erroruser_name,seterroruser_name]=useState('');
  const [erroremail,seterroremail]=useState('');
  const [errorpassword,seterrorpassword]=useState('');
  const [errorpasswordc,seterrorpasswordc]=useState('');
  const [errorpays,seterrorpays]=useState('');
  const [errordate,seterrordate]=useState('');
  const [loadin,setloadin]=useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  let history = useHistory();
  const handleClickShowPassword1 = () => {
    setValues({ ...values, showPassword1: !values.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
   async function handlesubmit(e)
  {
    e.preventDefault();
    if(values.nom!=="" && values.prenom!=="" && values.password!=="" && values.c_password!=="" && values.email!=="" && values.pays!=="" && values.date_naissance && values.user_name &&validateEmail(values.email) && values.password==values.c_password )
    {
      setloadin(true);
      const dt=new FormData();
      dt.append('nom',values.nom);
      dt.append('prenom',values.prenom);
      dt.append('user_name',values.user_name);
      dt.append('email',values.email);
      dt.append('password',values.password);
      dt.append('pays',values.pays);
      dt.append('date_naissance',values.date_naissance);
      
       await axios({
        method: "post",
        url: "/register",
        data: dt,
        headers: { "Content-Type": "multipart/form-data" },
        }).then(res=>{
          console.log(res.data);
          if(res.data.email)
          {
            seterroremail('email deja exists');
          }
          if(res.data.user_name)
          {
            seterroruser_name('user name déja exists');
          }
         if(res.data.Token)
          {
           console.log(res.data);
            history.push("/CONNECTER");
            Cookies.set('email',res.data.Data,new Date().getTime() +  3* 60 * 1000);
          }
      }).catch(err=>{
        console.log(err);
      })
        setloadin(false);
    }
    else
    {
    if(values.nom==="")
    {
      seterrornom("tapez votre nom");
    }
    if(values.nom!=="")
    {
      seterrornom('');
    }
    if(values.prenom==="")
    {
      seterrorprenom("tapez votre prenom");
    }
    if(values.prenom!=="")
    {
      seterrorprenom('');
    }
    if(values.user_name==="")
    {
      seterroruser_name("tapez votre user name");
    }
    if(values.user_name!=="")
    {
      seterroruser_name('');
    }
    if(values.email==="")
    {
      seterroremail("tapez votre email ");
    }
    if(values.email!=="")
    {
      if(validateEmail(values.email))
      {
        seterroremail('');
      }
      else
      {
        seterroremail('format email invalide');
        
      }
      
    }
    
    if(values.password.length<8)
    {
      seterrorpassword('tapez mode passe qui contient >8')
    }
    if(values.password.length>8)
    {
      seterrorpassword('')
    }
    if(values.c_password.length<8)
    {
      seterrorpasswordc('tapez mode passe qui contient >8')
    }
    if(values.c_password.length>8)
    {
      if(values.c_password==values.password)
      {
        seterrorpasswordc('')
      }
      else
      {
        seterrorpasswordc('les deux mode passe il est defferents');
      }
      
    }
    if(values.date_naissance=="")
    {
      seterrordate('choiser la date')
    }
    if(values.date_naissance!="")
    {
      seterrordate('')
    }
    if(values.pays==="")
    {
      seterrorpays('choiser pays')
    }
    if(values.pays!=="")
    {
      seterrorpays('')
    }
  }
  }
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const [data,setData]=useState([]);
  

  useEffect(() => {
    getData();
  
}, [])
function getData()
  {
      axios.get('https://restcountries.eu/rest/v2/all').then(res=>{
         setData(res.data);
      });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Creer Votre Compte
        </Typography>
        <form className={classes.form} onSubmit={handlesubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {errornom==""?
              <TextField
              autoComplete="nom"
              name="nom"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="nom"
              autoFocus
              onChange={handleChange('nom')}
            />:
            <TextField
               error
                autoComplete="nom"
                name="nom"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="nom"
                autoFocus
                helperText={errornom}
                onChange={handleChange('nom')}
              />
              }
              
            </Grid>
            <Grid item xs={12} sm={6}>
              {errorprenom==""?
               <TextField
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="prenom"
                name="prenom"
                autoComplete="lname"
                onChange={handleChange('prenom')}
              />:
              <TextField
                error
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="prenom"
                name="prenom"
                autoComplete="lname"
                helperText={errorprenom}
                onChange={handleChange('prenom')}
              />
              }
             
            </Grid>
            <Grid item xs={12}>
              {erroruser_name==""?
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="user_name"
                name="user_name"
                autoComplete="user_name"
                onChange={handleChange('user_name')}
              />:
              <TextField
                error
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="user_name"
                name="user_name"
                autoComplete="user_name"
                helperText={erroruser_name}
                onChange={handleChange('user_name')}
              />
              }
              
              
            </Grid>
            <Grid item xs={12}>
              {erroremail===""?
              <TextField
              
              variant="outlined"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={handleChange('email')}
            />:
            <TextField
                error
                variant="outlined"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
                helperText={erroremail}
                onChange={handleChange('email')}
              />
              }
              
            </Grid>
            <Grid item xs={12}>
            {errorpassword==""?
            <FormControl  variant="outlined"  fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword1 ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
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
          type={values.showPassword1 ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword1}
                onMouseDown={handleMouseDownPassword1}
                edge="end"
              >
                {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>}
        {errorpassword!=""?<Pred>{errorpassword}</Pred>:""}
            </Grid>
            <Grid item xs={12}>
              {errorpasswordc==""?
              <FormControl  variant="outlined"  fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">confirmer mode passe</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword2 ? 'text' : 'password'}
                value={values.c_password}
                onChange={handleChange('c_password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword2}
                      edge="end"
                    >
                      {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>:
            <FormControl  variant="outlined"  fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">confirmer mode passe</InputLabel>
            <OutlinedInput
             error
              id="outlined-adornment-password"
              type={values.showPassword2 ? 'text' : 'password'}
              value={values.c_password}
              onChange={handleChange('c_password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          }
          {errorpasswordc!=""?<Pred>{errorpasswordc}</Pred>:""}
            </Grid>
            <Grid item xs={12}>
              {errordate==""?
               <TextField
               variant="outlined"
               required
               fullWidth
              id="datetime-local"
              label="date naissance"
              type="date"
              defaultValue="2017/05/24"
              value={values.date_naissance}
              format="yyyy/MM/dd"
              onChange={handleChange('date_naissance')}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
           />:
           <TextField
           error
           variant="outlined"
           required
           fullWidth
          id="datetime-local"
          label="date naissance"
          type="date"
          defaultValue="2017-05-24"
          value={values.date_naissance}
          format="yyyy/MM/dd"
          helperText={errordate}
          onChange={handleChange('date_naissance')}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
           />
            }
           
            <Grid item xs={12}>
            {errorpays==""?
         <FormControl className={classes.combo}
            variant="outlined"
             required
             fullWidth>
        <InputLabel id="demo-controlled-open-select-label">pays</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open1}
          onClose={handleClose1}
          onOpen={handleOpen1}
          onChange={handleChange('pays')}
        >
          {data.map((py)=>{
            return(
              <MenuItem value={py.name}>{py.name}</MenuItem>
            )
                
          })}
         
        </Select>
      </FormControl>:
       <FormControl className={classes.combo}
       variant="outlined"
        required
        fullWidth>
   <InputLabel id="demo-controlled-open-select-label">pays</InputLabel>
   <Select
   error
     labelId="demo-controlled-open-select-label"
     id="demo-controlled-open-select"
     open={open1}
     onClose={handleClose1}
     onOpen={handleOpen1}
     onChange={handleChange('pays')}
   >
     {data.map((py)=>{
       return(
         <MenuItem value={py.name}>{py.name}</MenuItem>
       )
           
     })}
    
   </Select>
 </FormControl>
           }
           {errorpays!=""?<Pred>{errorpays}</Pred>:""}
          </Grid>
        </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Je souhaite recevoir de l'inspiration, des promotions marketing et des mises à jour par e-mail."
              />
            </Grid>
          </Grid>
          {loadin==false?
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={(e)=>{
              handlesubmit(e)
            }}
          >
         Creer Compte
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
          <Grid container justify="flex-end" mb={10}>
            <Grid item>
              <Link to="/CONNECTER" className="conn">
              Vous avez déjà un compte? S'identifier
              </Link>
            </Grid>
          </Grid>
        </form>
        
      </div>
    </Container>
  );
}

const Pred= styled.p `
    color:red;
    font-size: 0.9em;
    padding-left:5px;
`;