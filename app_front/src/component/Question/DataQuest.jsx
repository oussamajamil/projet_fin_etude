import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'20px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      display: 'flex',
    },
    iccolo:
    {
        color:'palevioletred',
    },
    parag:
    {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    secondaryHeading:
    {
           fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
            marginLeft:theme.spacing(4),
            marginTop: theme.spacing(1),
    }
  }));
function DataQuest(props) {
    const classes = useStyles();
    return (
        <div className="container"> 
       <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.iccolo} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
          {props.base.photo=="images/user.png"?
              <Avatar className={classes.img_slage}>{props.base.prenom.charAt(0).toUpperCase()}{props.base.nom.charAt(0).toUpperCase()}</Avatar>:
              <Avatar src={"http://127.0.0.1:8000/"+props.base.photo}/>
               }
              <p className={classes.parag}>{props.base.user_name}</p>
              </Typography>
                <p className={classes. secondaryHeading}>{props.base.Qustion}</p> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.base.reponde}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
    )
}

export default DataQuest
