import React,{ useState } from 'react';
import {Modal,Row,Card,Button,InputGroup,FormControl} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {supprimerMessages} from '../../redux/actions/UserActions';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
function MessageEmail() {
    let history=useHistory();
    let data=useSelector((state)=>state.messagePoster.message);
    const [reponde,setreponde]=useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [seccus,setseccus]=useState(false);
    const dispatch = useDispatch();
    return (
        <div>
             {data.map((dt,index)=>{
                 return(
                <article style={{marginTop:'10px'}}>
                <Row>
              <Card  key={index} className="text-center" style={{width:'700px',marginLeft:'170px'}}>
                <Card.Header>{`Message${index+1}`}
                <IconButton aria-label="delete" style={{marginLeft:'500px',color:'red'}} onClick={async(e)=>{
                  e.preventDefault();
                    let token='Bearer '+localStorage.getItem('token');
                 await axios({
                    method: "DELETE",
                    url: '/supprimerMessage/'+dt.id,
                    headers: { "Content-Type": "multipart/form-data" , 
                                "Authorization":token
                            },
                            }).then(res=>{ 
                                dispatch(supprimerMessages({id:dt.id}));
                                
                            }).catch(err=>{
                              console.log(err.message);
                            })
                    
                    }}>
                <BackspaceOutlinedIcon/>
                    </IconButton>  
            </Card.Header>
                <Card.Body>
                    <Card.Title>{dt.nom}</Card.Title>
                    <Card.Title>Sujet:&nbsp;&nbsp;<mark>{dt.sujet}</mark></Card.Title>
                    <Card.Text>
                   {dt.Message}
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <FormControl
                       
                        placeholder="Votre reponde"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={reponde}
                        onChange={(event)=>{
                            event.preventDefault();
                            setreponde(event.target.value);
                        }}
                        />
                        <Button variant="outline-info" id="button-addon2" onClick={(e)=>{
                           
                           if(reponde=="")
                           handleShow();
                           else
                           {
                            let token='Bearer '+localStorage.getItem('token');
                            let dts=new FormData();
                            dts.append('id',dt.id);
                            dts.append('nom',dt.nom);
                            dts.append('email',dt.email);
                            dts.append('reponde',reponde);
                            axios({
                              method: "POST",
                              url: '/repondeMessage',
                              data:dts,
                              headers: { "Content-Type": "multipart/form-data" , 
                                          "Authorization":token
                                      },
                                      }).then(res=>{ 
                                        setseccus(true);
                                        handleShow();
                                        setreponde('');
                                        dispatch(supprimerMessages({id:dt.id}));
                                      }).catch(err=>{
                                        console.log(err);
                                      })
                           }
                        
                           
                        }}>
                        répondre
                        </Button>
                    </InputGroup>
                </Card.Body>
                <Card.Footer className="text-muted">{dt.created_at}</Card.Footer>
                </Card>
                </Row>
                </article>
                 )
             })}
             <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {seccus==true?
        <Alert severity="success">message Bien reponder</Alert>:
        <Alert severity="error">S'il vous plait remplire la reponde</Alert>
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default MessageEmail
