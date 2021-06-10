import React, { useEffect, useState } from 'react'
import Auccunq from './Auccunq';
import axios from 'axios';
import DataQuest from './DataQuest';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {useDispatch, useSelector} from 'react-redux';
import {connection_login} from '../../redux/actions/UserActions';
import { useHistory } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Cookies from  'js-cookie';


function Qustion() {
  useEffect(() => {
    getData();
  }, [])
  const dispatch=useDispatch();
  let history = useHistory();
    function PaperComponent(props) {
       
        return (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        );
      }
    const user=useSelector((state)=>state.app1.user_connecter);
    const user1=useSelector((state)=>state.app.users);
    const [open, setOpen] = React.useState(false);
    const [Question, setQuestion]=useState('');
    const [alertS,setAlertS]=useState('');
    const handleClickOpen = () => {
        setOpen(true);
        seterrorQ('');
      };
    
      const handleClose = () => {
        setOpen(false);
        seterrorQ('');
        setAlertS('');
      };
      const handleClose1 = () => {
        setOpen(false);
        history.push('/CONNECTER');
        dispatch(connection_login('/Questions'));
      };
        const [show, setShow] = useState(false);
        const closeModal = () => 
        {    setShow(false);
             seterrorQ('');
             setAlertS('');
             setQuestion('');
        };
        const handleShow = () => setShow(true);
        const [loadin,setloadin]=useState(false);
        const [errorQ,seterrorQ]=useState('');
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
           Tapez ou mois 6 caractere pour activer le role de cette button
          </Tooltip>
        );
    const envoyerQuestion=async()=>{
      if(Question.trim()=="")
      {
        seterrorQ('remplir la zone de Question');
      }
      else
      {
        setloadin(true);
        let token='Bearer '+localStorage.getItem('token');
        const frm=new FormData();
        frm.append('user_name',Cookies.get('user_name'));
        frm.append('Qustion',Question);
       await axios({
            method: "POST",
            url: '/QuestionPoser',
            data: frm,
            headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token
                     },
            }).then(res=>{
              setAlertS(res.message);
            }).catch(errres=>{
                console.log(errres);
            })
            setloadin(false);
            
      }
        
    }
  const[getDt,setDt]=useState([]);
  const[getMess,setMess]=useState('');
  const getData=async()=>
  {
   await axios.get('/getQestion').then(res=>{
        if(res.data.Data)
        {
          setDt(res.data.Data);
        }
        else
        {
          setMess(res.data.Message);
        }
   }).catch(err=>{
     console.log(err)
   })
   console.log(getDt);
  }
 
    return (
        <div className="container">
           <Modal show={show} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Posser votre Question</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {errorQ==""?
               <TextField
             
               id="outlined-multiline-static"
               label="Question"
               multiline
               rows={6}
               variant="outlined"
               onChange={(e)=>setQuestion(e.target.value)}
               />:
               <TextField
               error
               id="outlined-multiline-static"
               label="Question"
               multiline
               rows={6}
               variant="outlined"
               onChange={(e)=>setQuestion(e.target.value)}
               helperText={errorQ}
               />
               }
             {alertS!=''?
                  <Alert severity="success">Qiestion Bien Ajouter</Alert>:
                  ""}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                 Fermé
                </Button>
                {
                  alertS!=''?
                  <Button variant="success" className="btnQ"  style={{ pointerEvents: 'none',opacity:0.5}}>Envoyer Question</Button>
                  :
                  loadin==true?
                  <Button variant="primary" disabled >
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    style={{backgroundColor:"palevioletred"}}
                  />
                  Envoyer...
                </Button>:
                Question.length>5?
                 <Button className="btnQ" onClick={envoyerQuestion}>
                 Ajouter votre Question
               </Button>:
               (
               
                <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button variant="success" className="btnQ"  >Envoyer Question</Button>
              </OverlayTrigger>
               )
                }
                  
              </Modal.Footer>
            </Modal>
            <Button
                    variant="contained"
                    color="secondary"
                    className="buttonAddQ"
                    startIcon={<HelpIcon/>}
                    onClick={
                      user==null?
                      user1==null?
                      handleClickOpen:
                      handleShow:
                      handleShow}
                >
                   Ajouter Question
                </Button>
          {getMess!=""
          ? <Auccunq/>  
          : 
          getDt.map((data)=>{
            return(
              <DataQuest base={data}/> 
            )
          }
          )
       
          }
        <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Connecter
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
        !!! pour ajouter votre Questions obligatoires obligatoire de connecter a votre compte
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose1} color="primary" 
          >
          Connecter
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default Qustion