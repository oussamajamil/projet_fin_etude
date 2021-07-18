import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { errorprojets,cadeauxProjets} from '../redux/actions/UserActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import {withStyles } from '@material-ui/core/styles';
function Cadeaux(props) {
    const BootstrapInput = withStyles((theme) => ({
        root: {
          'label + &': {
            marginTop: theme.spacing(3),
          },
        },
        input: {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }))(InputBase);
const dispatch=useDispatch();
const [statecheck, setStatececk] = React.useState({
    check1: false,
    check2: false,
    check3: false,
  });
  const [statecheckpr, setStatececkpr] = React.useState({
    checkpr1: '100DH-300DH',
    checkpr2: '300DH-1000DH',
    checkpr3: '1000DH-10000DH',
  });
  const [titre,settitre]=React.useState({
    titre1: '',
    titre2: '',
    titre3: '',
  });

  const [descT1,setdescT1]= React.useState('');
  const [descT2,setdescT2]= React.useState('');
  const [descT3,setdescT3]= React.useState('');
  const handlchangeTitre=(event)=> {
    settitre({...titre,[event.target.name]: event.target.value});
  }
  const handleChange = (event) => {
    console.log(statecheck);
    setStatececk({ ...statecheck, [event.target.name]: event.target.checked });
  };
  const [errort1,seterrort1]=React.useState('');
  const [errort2,seterrort2]=React.useState('');
  const [errort3,seterrort3]=React.useState('');
  const [errdesc1,errsetdesc1]=React.useState('');
  const [errdesc2,errsetdesc2]=React.useState('');
  const [errdesc3,errsetdesc3]=React.useState('');
const [cont,setcont]=useState(1);
    useEffect(() => {
        dispatch(errorprojets("error2"));
    },[])
   
    return (
        <div  key={props.nb}>
           <p style={{textAlign:"center",alignItems:"center", fontFamily: "Lucida Console"}}>Les récompenses prennent différentes formes et sont présentées aux gens pour les remercier de leur contribution.
            Des bonus sont accordés aux contributeurs à titre d'incitation non monétaire pour soutenir le projet.
            Pensez à une récompense innovante, tangible et abordable. Rendre les récompenses intéressantes et se rapporter au thème du projet lui-même. Les contributeurs doivent se sentir importants pour les aider à atteindre vos objectifs.
            Nous vous recommandons d'offrir des avantages en quantité et en temps limités pour augmenter l'intérêt et la demande.</p>
           
              {/* //taillebottoninput in confirmation.Css */}
                <div className="CadeauxContent" style={{marginTop:'20px',marginBottom:'20px',marginLeft:'30px'}}>
                     <form>
                       <div className="cntcadr">
                         <h3>Cadeaux1</h3>
                     <div className="row cad1">
                         <div className="col-sm-12 col-md-12 col-lg-4 ">
                         <TextField 
                        className="taillebottoninput"
                         error={errort1==""?false:true}
                         fullWidth
                          id="outlined-basic"
                          label="Titre cadeaux"
                          variant="outlined"
                          name='titre1'
                          onChange={handlchangeTitre}
                          value={titre.titre1}
                          helperText={errort1!="" && errort1}
                           />
                         </div>
                         <div className="col-sm-12 col-md-12 col-lg-4">
                                <TextField
                                className="taillebottoninput"
                                error={errdesc1==""?false:true}
                                fullWidth
                                id="outlined-multiline-static"
                                label="description"
                                multiline
                                name='descT1'
                                value={descT1}
                                onChange={(event)=>{
                                  setdescT1(event.target.value)
                                }}
                                rows={4}
                                variant="outlined"
                                helperText={errdesc1!="" && errdesc1}
                                />
                         </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-12 col-md-12 col-lg-4">
                             <FormControlLabel
                             name='check1'
                                control={<Checkbox checked={statecheck.check1} onChange={handleChange} />}
                                   label="Rechargeable"
                            />
                             </div>
                             <div className="col-sm-12 col-md-12 col-lg-4">
                               <h6>le prix entre</h6>
                             <TextField
                             fullWidth
                                disabled
                                id="outlined-multiline-static"
                                multiline
                                variant="outlined"
                                value={statecheckpr.checkpr1}
                                />
                             </div>
                             </div>
                         </div>
                         <div className="cntcadr" id="cntca2" style={{display:'none',marginTop:'20px'}}>
                         <h3>Cadeaux2</h3>
                         <div className="row">
                         <div className="col-sm-12 col-md-12 col-lg-4">
                         <TextField 
                         error={errort2==""?false:true}
                         className="taillebottoninput"
                         fullWidth
                         id="outlined-basic" 
                         label="Titre cadeaux" 
                         variant="outlined"
                          name='titre2'
                          value={titre.titre2}
                          onChange={handlchangeTitre}
                          helperText={errort2==""?"":errort2}
                          />
                         </div>
                         <div className="col-sm-12 col-md-12 col-lg-4">
                                <TextField
                                   className="taillebottoninput"
                               error={errdesc2==""?false:true}
                                id="outlined-multiline-static"
                                label="description"
                                multiline
                                name='descT2'
                                fullWidth
                                rows={4}
                                variant="outlined"
                                value={descT2}
                                onChange={(event)=>{
                                  setdescT2(event.target.value);
                                }}
                                helperText={errdesc2!=""&& errdesc2}
                                />
                         </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-12 col-md-12 col-lg-4">
                             <FormControlLabel
                             name='check2'
                                control={<Checkbox checked={statecheck.check2} onChange={handleChange} />}
                                   label="Rechargeable"
                            />
                             </div>
                             <div className="col-sm-12 col-md-12 col-lg-4">
                             <h6>le prix entre</h6>
                             <TextField
                                disabled
                                fullWidth
                                id="outlined-multiline-static"
                                multiline
                                variant="outlined"
                                value={statecheckpr.checkpr2}
                                />
                             </div>
                         </div>
                         </div>
                         <div className="cntcadr" id="cntca3"  style={{display:'none',marginTop:'20px'}}>
                         <h3>Cadeaux3</h3>
                         <div className="row card3">
                         <div className="col-sm-12 col-md-12 col-lg-4">
                             <TextField 
                             error={errort3==""?false:true}
                             className="taillebottoninput"
                              id="outlined-basic" 
                              label="Titre cadeaux"
                                variant="outlined"
                                fullWidth
                                name='titre3'
                                value={titre.titre3}
                                onChange={handlchangeTitre}
                                helperText={errort3!="" && errort3}
                              />
                         </div>
                         <div className="col-sm-12 col-md-12 col-lg-4">
                                <TextField
                                  className="taillebottoninput"
                                 error={errdesc3==""?false:true}
                                id="outlined-multiline-static"
                                label="description"
                                multiline
                                fullWidth
                                variant="outlined"
                                name='descT3'
                                value={descT3}
                                onChange={(event)=>{
                                  setdescT3(event.target.value);
                                }}
                                rows={4}
                                helperText={errdesc3!=""&& errdesc3
                                }
                                />
                         </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-12 col-md-12 col-lg-4">
                             <FormControlLabel
                             name='check3'
                                control={<Checkbox  checked={statecheck.check3} onChange={handleChange} />}
                                   label="Rechargeable"
                            />
                             </div>
                             <div className="col-sm-12 col-md-12 col-lg-4">
                             <h6>le prix entre</h6>
                             <TextField
                                disabled
                                fullWidth
                                id="outlined-multiline-static"
                                multiline
                                variant="outlined"
                                value={statecheckpr.checkpr3}
                                />
                             </div>
                         </div>
                         </div>
                     </form>
              
                </div>
              
           <div className="row">
               {cont<3?
                <Button
                style={{marginLeft:"20px"}}
                 variant="outlined"
                 color="secondary"
                     startIcon={<AddCircleOutlineTwoToneIcon />}
                     
                     onClick={(e)=> { 
                    e.preventDefault();
                       setcont(cont+1);
                       document.getElementById('cntca'+parseInt(cont+1)).style.display='block';
                     }
                     }
                     >
                     Ajouter Cadeaux
                   
                 </Button>:
                  <Button
                  style={{marginLeft:"20px"}}
                  disabled
                   variant="outlined"
                   color="secondary"
                       startIcon={<AddCircleOutlineTwoToneIcon />}
                       >
                      impossile d'ajoute
                   </Button>
               }
          
           </div>
           
          <div className="row">
            {cont<3?
             <button displtype="button" class="btn btn-outline-success disabled" style={{marginLeft:'20px',width:'210px',marginTop:'10px'}}>
             {`ajouter les ${3-cont} cadeaux`}
           </button>:
          <button type="button" class="btn btn-outline-success" style={{marginLeft:'20px',width:'210px',marginTop:'10px'}} onClick={(Event)=>{
            Event.preventDefault();
             if(titre.titre1!="" && titre.titre2!="" && titre.titre3!="" && descT1!="" && descT2!="" && descT3!="")
             {
              errsetdesc1('');
              errsetdesc2('');
              errsetdesc3('');
              seterrort1('');
              seterrort2('');
              seterrort3('');
              const data={
                  cadeaux1:
                {
                  titre:titre.titre1,
                  description:descT1,
                  Rechargeable:statecheck.check1,
                  prix_d_inv:statecheckpr.checkpr1,
                },
                cadeaux2:{
                  titre:titre.titre2,
                  description:descT2,
                  Rechargeable:statecheck.check2,
                  prix_d_inv:statecheckpr.checkpr2,
                },
                cadeaux3:{
                  titre:titre.titre2,
                  description:descT2,
                  Rechargeable:statecheck.check3,
                  prix_d_inv:statecheckpr.checkpr3,
                }
              }
               dispatch(errorprojets(null));
              dispatch(cadeauxProjets(data));
            
             }
             else
             {
              if(titre.titre3=="")
              seterrort3('tapez le titre');
              else
              seterrort3('');
              if(titre.titre1=="")
               seterrort1('tapez le titre');
                else
                seterrort1('');
              if(titre.titre2=="")
              seterrort2('tapez le titre');
              else
              seterrort2('');
             
             if(descT1=="")
               errsetdesc1('tapez la description');
             else
             errsetdesc1('');
             if(descT2=="")
              errsetdesc2('tapez la description');
             else
             errsetdesc2('');
             if(descT3=="")
              errsetdesc3('tapez la description');
             else
             errsetdesc3('');
          }
        }
         
          }>
            envoyer Cadeaux
          </button>
          }
          </div>
           
          
           
        </div>
    )
}

export default Cadeaux