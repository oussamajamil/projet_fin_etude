import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
function Payement() {
    const [open,setopen]=useState(false);
    let history = useHistory();
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setopen(false);
      };
    const [paiement,setpaiement]=useState({
        number:'',
        cvc:'',
        exp_month:'',
        exp_year:'',
        errornumber:'',
        errorcvc:'',
        errorexp_month:'',
        errorexp_year:'',
    });
    const [message,setmessage]=useState('');
    const [errormessage,seterrormessage]=useState('');
    const [exit,setexit]=useState(false);
    const [loading,setloading]=useState(false);
    const handleChange = (prop) => (event) => {
        event.preventDefault();
        setpaiement({ ...paiement, [prop]: event.target.value,['error'+prop]:event.target.validationMessage}); 
      };
      const invipayeiemnt=async()=>{
          setloading(true);
           let dt=new FormData();
           dt.append('number',paiement.number);
           dt.append('exp_month',paiement.exp_month);
           dt.append('exp_year',paiement.exp_year);
           dt.append('cvc',paiement.cvc);
           dt.append('prix',data.prix);
           dt.append('nomComplete',data.nomComplete);
           dt.append('email',data.email);
           dt.append('visible',data.visible);
           dt.append('projetID',projet.id);
           await axios({
            method: "POST",
            url: '/payements',
            data:dt,
            headers: { "Content-Type": "multipart/form-data" , 
                    },
                    }).then(res=>{ 
                        if(res.data.message=="bien payer")
                        {
                            setmessage("bien payer");
                            setexit(true);
                            setopen(true);
                        }
                       
                       
                    }).catch(err=>{
                        seterrormessage("rresayer autre fois");
                        setopen(true);
                    })
                    setloading(false);

      }
    const data=useSelector((state)=>state.inviss.invi);
    const projet=useSelector((state)=>state.projet.projet);
    
    return (
        <div className="container py-5 contentpayements">
      
        <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-6">Paiement</h1>
            </div>
        </div> 
        <div className="tab-content">
            <div id="credit-card" className="tab-pane fade show active pt-3">
                    <form role="form">
                            <div className="form-group"> 
                            <label for="username">
                                    <h6>Nom Complete</h6>
                            </label>
                             <input type="text" name="username" placeholder="Card Owner Name" value={data.nomComplete} required class="form-control" disabled/>
                            </div>
                                <div class="form-group">
                                    <label for="cardNumber">
                                        <h6>Numero carde </h6>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control" required onChange={handleChange('number')} Required pattern="[0-9]{16}"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text text-muted">
                                                <i className="fab fa-cc-visa mx-1"></i>
                                                 <i className="fab fa-cc-mastercard mx-1"></i>
                                                  <i className="fab fa-cc-amex mx-1"></i>
                                                  </span>
                                        </div>
                                    </div>
                                   <span style={{marginTop:'-20px',fontSize:'0.8em',color:'red'}}>{paiement.errornumber}</span> 
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                        <div className="input-group">
                                             <input type="text" placeholder="MM" name="" onChange={handleChange('exp_month')} class="form-control" Required pattern="[0-9]{2}"/> 
                                             
                                             <input type="text" placeholder="YY" name="" class="form-control" required onChange={handleChange('exp_year')}  Required pattern="[0-9]{2}"/>
                                         </div>
                                        </div>
                                       <span style={{marginTop:'-40px',color:'red',fontSize:"0.8em"}}> {paiement.errorexp_month!=""?paiement.errorexp_month+""+paiement.errorexp_year:<span style={{marginLeft:"370px",marginTop:'-40px',fontSize:"0.8em",color:'red'}}>{paiement.errorexp_year}</span>}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                            </label> <input type="text" required className="form-control"  onChange={handleChange('cvc')} Required pattern="[0-9]{3}"/>
                                            <span style={{marginTop:'-20px',fontSize:"0.8em",color:'red'}}>{paiement.errorcvc}</span>
                                             </div>
                                    </div>
                                   
                                </div>
                                <div className="card-footer">
                                    {loading==true?
                                     <Button
                                     disabled
                                     type="submit"
                                     fullWidth
                                     variant="contained"
                                     className="subscribe btn btn-primary btn-block shadow-sm"
                                 > 
                                 <CircularProgress color="secondary" />
                                 </Button>:
                                        <button type="button" className="subscribe btn btn-primary btn-block shadow-sm" disabled={exit} onClick={(e)=>{
                                            e.preventDefault();
                                            invipayeiemnt();
                                        }}> Confirm Payment de {data.prix }DH </button>
                                    }
                                      <button type="button" className="subscribe btn btn-danger btn-block shadow-sm"onClick={(e)=>{
                                            e.preventDefault();
                                          history.push('/AllProjet') 
                                        }}> Quitter</button>
                                
                   
                    </div> 
                    </form>
                    </div> 
                    </div>   

        <Snackbar 
        style={{marginTop:'20px'}}
        open={open} 
        autoHideDuration={10000}
         onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={message!=""?"success":"error"}>
          {message!=""?message:errormessage}
        </Alert>
      </Snackbar>    
        </div> 
    )
}

export default Payement
