import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Confirmation.css';
import Strepper from './Strepper';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: 'palevioletred',
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    StepC:
    {
        backgroundColor: 'palevioletred', 
    }
  }));
  function getSteps() {
    return ['Entrer vos informations de projets', 'Entrer une photo ou url de vos videos youtube', 'Propose cadeaux','Validation de vos projets'];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `vous devez ajouter obligatoire les informations de vos projets`;
      case 1:
        return 'Pour la validation de chaque information vous devez ajouter une photo ou un url de video';
      case 2:
        return `La récompense prend de nombreuses formes et est remise aux personnes 
                  pour les remercier de leur contribution des bonus sont accordés aux actionnaires à titre 
                  d'incitation non monétaire à soutenir le projet.
                  Remarque : vous devez ajouter au moins 3 récompenses pour publier votre projet.`;
      case 3:
        return 'démarrez votre projet';
      default:
        return 'Unknown step';
        
    }
  }  
function Confirmation() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [addP, setaddP] = React.useState(false);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      activeStep === steps.length - 1?
      setaddP(true):
      setaddP(false)
      
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
        <div className="container">
          {addP==false?
          <div>
        <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel >{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Précédent
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                   
                  >
                    {activeStep === steps.length - 1 ? 'Fin' : 'Suivant'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
        </div>:
      <Strepper/> 
              }
        </div>
    )
}

export default Confirmation