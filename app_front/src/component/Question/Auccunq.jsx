import React, { useState } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import './Auccunq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import TextField from '@material-ui/core/TextField';
import Cookies from  'js-cookie';
import axios from 'axios';
function Auccunq() {
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
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleClose1 = () => {
        setOpen(false);
        history.push('/CONNECTER');
        dispatch(connection_login('/Questions'));
      };
        const [show, setShow] = useState(false);
        const closeModal = () => setShow(false);
        const handleShow = () => setShow(true);
        const [errorQ,seterrorQ]=useState('');
    const envoyerQuestion=async()=>{
      // console.log(Question);
      // setShow(false)
      if(Question=="")
      {
        seterrorQ('remplir la zone de Question');
      }
      else
      {
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
               console.log(res.data);
            }).catch(errres=>{
                console.log(errres);
            })
      }
        
    }
 
    return (
        <div>
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
             
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                 Fermé
                </Button>
                <Button className="btnQ" onClick={envoyerQuestion}>
                  Ajouter votre Question
                </Button>
              </Modal.Footer>
            </Modal>
            <Alert id="alQes"severity="warning">
            <AlertTitle>Avertissement</AlertTitle>
                <strong>Aucun Question</strong> 
                <h5>s'il vous plaît poser des question concernant notre plateforme</h5>
                <h5>pour clarification  pensèes</h5>  
                <h5> ils seront repondus et ajoutés à notre platform</h5>
                    </Alert>  
                    <Button
                    variant="contained"
                    color="secondary"
                    className="buttonAddQ"
                    startIcon={<HelpIcon/>}
                    onClick={user==null?
                      user1==null?
                      handleClickOpen:
                      handleShow:
                      handleShow}
                >
                   Ajouter Question
                </Button>
            </div>
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

export default Auccunq
