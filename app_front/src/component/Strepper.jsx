import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarProjet from './StarProjet';
import './Strepper.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import WarningIcon from '@material-ui/icons/Warning';
import CakeIcon from '@material-ui/icons/Cake';
import Grid from '@material-ui/core/Grid';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThoProjets from './ThoProjets';
import Cadeaux from './Cadeaux';
import ValidationProjets from './ValidationProjets';
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(253,169,239)  0%,rgb(240,49,209) 50%,rgb(255,255,102) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(253,169,239) 0%,rgb(233,64,87) 50%,rgb(255,255,102) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
    'linear-gradient( 95deg,rgb(253,169,239)  0%,rgb(240,49,209) 50%,rgb(255,255,102) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
    'linear-gradient( 95deg,rgb(253,169,239)  0%,rgb(240,49,209) 50%,rgb(255,255,102) 100%)',
  
  },
  button:
  {
    marginTop: 30,
    marginBottom:30,
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const dataRedu=useSelector((state)=>state.projet.projet);
  let user_name1=null;
  let error="";
  let icons={};
   if(dataRedu=="error1")
   {
     error=dataRedu;
   }
   if(error=="")
   {
    icons = {
      1:<SettingsIcon />,
      2: <ImageSearchIcon />,
      3: <CakeIcon />,
      4: <CheckCircleIcon />,
    };
   }
   else
   {
      icons = {
    1: <WarningIcon styles={{backgroundColor:'red',color:'red'}}/>,
    2: <ImageSearchIcon />,
    3: <CakeIcon />,
    4: <CheckCircleIcon />,
      }
   }
   

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:'50px',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  // conta:
  // {
  //   border:
  // }
}));

function getSteps() {
  return ['information general ', 'photo/video', 'les cadeaux','Succès'];
}
export default function Strepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const dataRedu=useSelector((state)=>state.projet.projet);
  const errorP=useSelector((state)=>state.irrorP.error);
  let user_name1=null;
  let error="";
   if(dataRedu=="error1")
   {
     error=dataRedu;
   }
   else
   {
   user_name1=dataRedu;
   }


  function handleNext(){
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
  
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="container gradient-border" id="box">
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />

      }>
        {steps.map((label,index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div >
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className={classes.conta}>
           
            {activeStep === 0?

              <StarProjet nb={activeStep}/> :
              activeStep === 1?
              <ThoProjets nb={activeStep}/>  :
              activeStep === 2?
              <Cadeaux nb={activeStep}/>:
              activeStep === 3?
              <ValidationProjets nb={activeStep}/>:
              ""
              }
            <div className="btnFooter">
           {errorP!=null?
           activeStep === steps.length-1?
           "":
           <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
              <Button
              className="btnnextinprojets"
                disabled
                variant="contained"
                color="primary"
                onClick={ 
                  handleNext }
              >
                {activeStep === steps.length - 1 ? '' : <NavigateNextIcon/>}
              </Button> </Grid>:
                      <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
              <Button
             className="btnnextinprojets"
              variant="contained"
              color="primary"
              onClick={ 
                handleNext }
            >
              {activeStep === steps.length - 1 ? '' : <NavigateNextIcon/>}
            </Button>
            </Grid>
            }
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
    }