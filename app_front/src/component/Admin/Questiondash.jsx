import React,{ useState } from 'react';
import {Modal,Row,Card,Button,InputGroup,FormControl} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {supprimerQestion} from '../../redux/actions/UserActions';
import axios from 'axios';
import { useHistory } from 'react-router';
function Questiondash() {
    const data=useSelector((state)=>state.QuestionPoser.question);
    let dispatch = useDispatch();
    const [suppQuest,setsuppQuest]=useState(0);
    const [smShow, setSmShow] = useState(false);
    const [repnde,setreponde]=useState('');
    let history = useHistory();
    return (
        <div>            
             {data.map((dt,index)=>{
                 return(
                <article style={{marginTop:'10px'}}>
                <Row>
              <Card className="text-center" style={{width:'700px',marginLeft:'170px'}}>
                <Card.Header>Question
                <IconButton aria-label="delete" style={{marginLeft:'500px',color:'red'}} onClick={(e)=>{
                    e.preventDefault();
                    setSmShow(true)
                    setsuppQuest(dt.id)
                    }}>
                <BackspaceOutlinedIcon/>
                    </IconButton>  
            </Card.Header>
                <Card.Body>
                    <Card.Title key={index}>{dt.nom+" "+dt.prenom}</Card.Title>
                    <Card.Text>
                   {dt.Qustion}
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Votre reponde"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={repnde}
                        onChange={(event)=>{
                            event.preventDefault();
                            setreponde(event.target.value);

                        }}
                        />
                        <Button variant="outline-info" id="button-addon2" onClick={(e)=>{
                            e.preventDefault();
                            let token='Bearer '+localStorage.getItem('token');
                            let dts=new FormData();
                            dts.append('reponde',repnde);
                            dts.append('id',dt.id);
                             axios({
                                method: "POST",
                                url: '/reponder',
                                data:dts,
                                headers: { "Content-Type": "multipart/form-data" , 
                                            "Authorization":token
                                        },
                                        }).then(res=>{ 
                                            dispatch(supprimerQestion({id:dt.id}));
                                            setreponde('');
                                        }).catch(err=>{
                                            console.log(err);
                                        })
                                       
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
              <Modal
         size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-sm"
       >
         <Modal.Header closeButton>
           <Modal.Title id="example-modal-sizes-title-sm">
           Êtes-vous sûr de supprimer cette question
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <Button  variant="danger" onClick={(e)=>{
                 e.preventDefault();
                let token='Bearer '+localStorage.getItem('token');
                 axios({
                    method: "DELETE",
                    url: '/suppquestion/'+suppQuest,
                    headers: { "Content-Type": "multipart/form-data" , 
                                "Authorization":token
                            },
                            }).then(res=>{ 
                                dispatch(supprimerQestion({id:suppQuest}));
                                setSmShow(false);
                            }).catch(err=>{
                               history.push('/error');
                            })
                
             }}>Supprimer</Button>
         </Modal.Body>
       </Modal>
        </div>
        
    )
}

export default Questiondash
