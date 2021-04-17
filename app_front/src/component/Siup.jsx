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
import 'react-phone-input-2/lib/style.css'
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
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './Siup.css';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ReactPhoneInput from 'react-phone-input-material-ui';
import axios from 'axios';
import { getDisplayDate } from '@material-ui/pickers/_helpers/text-field-helper';

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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Siup() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
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
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({ ...values, showPassword1: !values.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    const bodyFormData=new FormData();
    bodyFormData.append('nom',values.email);
    bodyFormData.append('prenom',values.password);
    bodyFormData.append('user_name',values.password);
    bodyFormData.append('email',values.email);
    bodyFormData.append('password',values.password);
    bodyFormData.append('c_password',values.password);
    bodyFormData.append('date_naissance',values.password);
    axios({
  method: "post",
  url: "Login",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
  }).then(res=>{
  console.log(res);
  }).catch(err=>{
    console.log(err);
  })
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
  function check()
  {
    alert(values.Tele)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="prenom"
                name="prenom"
                autoComplete="lname"
                onChange={handleChange('prenom')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="user_name"
                name="user_name"
                autoComplete="user_name"
                onChange={handleChange('user_name')}
              />
              
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
        </FormControl>
            </Grid>
            <Grid item xs={12}>
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
        </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
             variant="outlined"
             required
             fullWidth
            id="datetime-local"
            label="date naissance"
            type="date"
            defaultValue="2017-05-24"
            value={values.date_naissance}
            format="yyyy/MM/dd"
            onChange={handleChange('date_naissance')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
         />
            <Grid item xs={12}>
            <FormControl className={classes.combo}
            variant="outlined"
             required
             fullWidth>
        <InputLabel id="demo-controlled-open-select-label">pays</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange('pays')}
        >
          {data.map((py)=>{
            return(
              <MenuItem value={py.name}>{py.name}</MenuItem>
            )
                
          })}
         
        </Select>
      </FormControl>
          </Grid>
        </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Je souhaite recevoir de l'inspiration, des promotions marketing et des mises à jour par e-mail."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={()=>{
              check()
            }}
          >
           creer compte
          </Button>
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