import React, { useState } from 'react';
import  './Footer.css';
import {Modal,Button,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
function Footer() {
  const [data,setdata]=useState({
    Message:'',
    errorMesssage:'',
    nom:'',
    errornom:'',
    email:'',
    erroremail:'',
    sujet:'',
    errorsujet:'',
  })
  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setdata({ ...data, [prop]: event.target.value,['error'+prop]:event.target.validationMessage}); 
  };
  const [show, setShow] = useState(false);
  const[alertt,setalertt]=useState(false);
  const [envoyerData,setenvoyerData]=useState(false);
 const [loading,setloading]=useState(false);
  const handleClose = () => {
    setenvoyerData(false);
    setShow(false);
    setalertt(false);
    setloading(false);
    setdata({
    Message:'',
    errorMessage:'',
    nom:'',
    errornom:'',
    email:'',
    erroremail:'',
    sujet:'',
    errorsujet:'',
    
    })
  }
  const handleShow = () => setShow(true);
    return (
<footer>
  <div className="footer-gray">
    <div className="footer-custom">
      <div className="footer-lists">
        <div className="footer-list-wrap">
          
          <ul className="ftr-links-sub">
            <li>0682712855</li>
          </ul>
          <h6 className="ftr-hdr">International</h6>
          <ul className="ftr-links-sub">
            <li><a href="http://www.art.fr" rel="nofollow"> Maroc</a></li>
           
          </ul>
        </div>
      
        <div className="footer-list-wrap">
          <h6 className="ftr-hdr">Service Clients</h6>
          <ul className="ftr-links-sub">
            <li><a onClick={()=>{
             handleShow()
            }}>Contactez Nous</a></li>
            <li><a href="/Questions" rel="nofollow" >Questions fréquemment posées</a></li>
            <li><a href="/Homme" rel="nofollow">Comment fonctionne platforme Ammal?</a></li>
            <li><a href="/Homme" rel="nofollow">À propos de Ammal!!</a></li>
  
          </ul>
        </div>
        
    
  

      </div>
    
      <div className="footer-email">
        <h6 className="ftr-hdr">Sign up for exclusive offers and inspiration</h6>
        <div id="ftr-email" className="ftr-email-form">
          <form id="ftrEmailForm">
            <div className="error">Please enter a valid email address</div>
            <input type="text" name="email_address_" id="ftrEmailInput" className="input" placeholder="Enter email address" />
          
            <input type="submit" className="button" value="SUBMIT" />
            <input type="hidden" name="country_iso2" value=""/>
            <input type="hidden" name="language_iso2" value="en"/>
            <input type="hidden" name="site_domain" value="art.com"/>
            <input type="hidden" name="email_acq_source" value="01-000001"/>
            <input type="hidden" name="email_acq_date" value="" id="ftr-email-date"/>
            <input type="hidden" name="brand_id" value="ART"/>
            <input type="hidden" name="ri" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"/>
          </form>
        </div>
        
        <div className="ftr-email-privacy-policy"></div>
      </div>
     
      <div className="footer-social">
        <h6 className="ftr-hdr">Follow Us</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/art.com" title="Facebook">
              <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"/>
            </a>
          </li>
          <li>
            <a href="https://plus.google.com/108089796661280870153" title="Google+">
              <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"/>
            </a>
          </li>
          <li>
            <a href="https://pinterest.com/artdotcom/" target="_blank">
              <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"/>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com/artdotcom/">
              <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/artdotcom" title="Twitter">
              <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"/>
            </a>
          </li>
        </ul>
      </div>
   
      <div className="footer-legal">
       <p>
         copyright AMMAL 2021
       </p>
      </div>
     
      <div className="footer-payment">
        <ul>
          <li className="ftr-stella">
            <span title="Stella Service" ></span>
          </li>
          {/* <li>
            <span><img  alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="https://images.scanalert.com/meter/www.art.com/31.gif"/></span>
          </li> */}
          <li className="ftr-bbb">
            <span title="BBB"></span>
          </li>
        </ul>
      </div>
   
    </div>
    
  </div>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contactez nous</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <form>
          <div class="form-row">
             <div class="form-group col-md-6">
              <input type="text" id="form-name" class="form-control" placeholder="votre nom complete" required  pattern="[A-Za-z ]{3,16}" value={data.nom}  onChange={handleChange('nom')
                }/>
                <span style={{fontSize:'0.6em',color:'red'}}>{data.errornom}</span>
                </div>
            <div class="form-group col-md-6">
             
            <input type="email" id="form-email" class="form-control" placeholder="votre email" onChange={handleChange('email')} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
            <span style={{fontSize:'0.6em',color:'red'}}>{data.erroremail}</span>
            </div>
                 </div>
             <div class="form-group">
             <input type="text" id="form-subject" class="form-control" placeholder="sujet" onChange={handleChange('sujet')} required pattern="[A-Za-z0-1 ]{6,70}"/>
             <span style={{fontSize:'0.6em',color:'red'}}>{data.errorsujet}</span>
             </div>
                <div class="form-group">
                  <label for="form-message">Message</label>
                 <textarea id="form-message" class="form-control" rows="4" onChange={handleChange('Message')} required pattern="[A-Za-z0-1 ]{6,300}"/>
                 <span style={{fontSize:'0.6em',color:'red'}}>{data.errorMesssage}</span>
                   </div>
            <Button variant="secondary" onClick={()=>{
              handleClose();
            }}>
            Fermer
          </Button>
         { envoyerData==true?<Button variant="primary" style={{marginLeft:'10px'}} disabled>Envoyer</Button>:
          loading==true?
           <Button variant="primary" style={{marginLeft:'10px'}} disabled>
           <Spinner
             as="span"
             animation="grow"
             size="sm"
             role="status"
             aria-hidden="true"
           />
           chargement en cours...
         </Button>
          :<button type="submit" class="btn btn-primary" style={{marginLeft:'10px'}} onClick={async(e)=>{
            e.preventDefault();
            setalertt(false);
            if(data.Message=="" || data.nom=="" || data.sujet=="" || data.email=="")
            {
              setalertt(true);
            }
            else
            {
              setalertt(false);
              setloading(true);
              let token='Bearer '+localStorage.getItem('token');
              let dt=new FormData();
              dt.append('Message',data.Message);
              dt.append('nom',data.nom);
              dt.append('email',data.email);
              dt.append('sujet',data.sujet);
                            await axios({
                                method: "POST",
                                url: '/addMessage',
                                data:dt,
                                headers: { "Content-Type": "multipart/form-data" , 
                                            "Authorization":token
                                        },
                                        }).then(res=>{ 
                                          setenvoyerData(true);

                                        }).catch(err=>{
                                            console.log(err);
                                        })
                                        setloading(false);
            }
          }}>Envoyer</button>}
          
           </form> 
        </Modal.Body>
        <Modal.Footer>
          {alertt==true?<Alert severity="error" style={{marginRight:'180px',width:'100%'}}>tous les champs il est obligatoire</Alert>:
          envoyerData?<Alert variant="outlined" severity="success" style={{marginRight:'180px',width:'100%'}}>Message Bien envoyer</Alert>:""
          }
          
        </Modal.Footer>
        
      </Modal>
</footer>
    )
}

export default Footer