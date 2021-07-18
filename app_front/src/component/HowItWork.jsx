import React from 'react'
import Grid from '@material-ui/core/Grid';
import './works.css';
import { Container,Row,Col } from 'react-bootstrap';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PaymentIcon from '@material-ui/icons/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import FileSaver from 'file-saver';
import Footer from './Footer';
import fedwa from './Admin/imageAdmin/fedwa.jpeg';
import rachid from './Admin/imageAdmin/rachid.jpeg';
import oussama from './Admin/imageAdmin/oussama.jpeg';
function HowItWork() {
    let history=useHistory();
    const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const saveFile = () => {
            FileSaver.saveAs(
          process.env.REACT_APP_CLIENT_URL + "./pdf/QUI_SOMMES_NOUS.pdf'",
          "AMMAL.pdf"
        );
      }
    return (
        <>
         <img height="450px" src="https://www.affiches-parisiennes.com/content/images/2020/10/01/11022/adobestock252397847.jpg" alt='image' className="card-img-top  "  />
         <h4 id="txtimageh4">AMMAL est une plateforme de financement participatif dans le grand maghreb qui vise à soutenir les créateurs et l'innovation
            Des fonds peuvent être collectés sur Ammal pour des projets et initiatives dans les secteurs créatifs, innovants ou liés à la communauté.</h4>
         <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <p className="ppropsAmal">A propos de AMMAL</p>
            </Grid>
            <p className="papropsttxt">Basée au Maroc, Ammal a débuté 2021 en 
            tant que l'une des premières plateformes de financement 
            participatif dans le grand Maghreb fondée par Oussama Jamil  Les supporters peuvent contribuer n'importe quel
             montant aux projets de leur choix, et les propriétaires de
              projets offrent des récompenses aux supporters en fonction 
              de leurs contributions.
            </p>

            
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <Row>
                  <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               < WorkIcon className="fontdivhomitwork"/>
               <h5 className="h5howitwork">Réalisez votre projet !</h5>
           <span className="spanparahowitwork"> L'argent ne sera pas reçu avant la réussite du projet une fois que votre projet est financé avec succès et que vous recevez l'argent, 2% des bénéfices seront déduits en faveur de la plateforme Ammal, lorsqu'il sera temps de commencer à mettre en œuvre votre projet. Lorsque vous commencez à faire de votre projet une réalité, vous devez envoyer les dernières nouvelles de votre projet et des mises à jour à ses partisans, ils seront aussi ravis de connaître votre projet que vous.</span> 
               </div>
               
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <MonetizationOnIcon  className="fontdivhomitwork"/>
               <h5 className="h5howitwork">Collectez les contributions de vos supporters</h5>
          <span className="spanparahowitwork">Si vous avez un bon projet, beaucoup voudront vous soutenir, de votre famille, amis et personnes qui admirent votre projet, à la diaspora arabe qui veut soutenir les communautés dont ils sont issus, les organisations internationales et les sponsors locaux.</span> 
               </div>
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <EmojiObjectsIcon  className="fontdivhomitwork"/>
               <h5 className="h5howitwork">Soumettez votre projet maintenant</h5>
           <span className="spanparahowitwork">Les créateurs arabes de partout peuvent soumettre leurs projets. Vous pouvez trouver les critères d'acceptation des projets sur Ammal ici.</span> 
               </div>
               </Col>
            
               </Row>
               </div>
               <Row>
               <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <p className="ppropsAmal">équipe de travaille</p>
            </Grid>
               </Row>
               <div style={{display:'flex',justifyContent:'space-between', marginLeft:'50px',marginTop:'50px'}}>
                   <Row>
                   <Col>
                   
               <div className="card text-center" style={{marginTop:'60px'}}>
            <div className="overflow">
                <img src={rachid} alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Rachid</h4>
                <p className="card-text text-secondary">
                    Nom:Rachid Maia
                    Email:RachidMaia@gmail.com
                </p>
                
                </div>    
                </div>
                </Col>
                <Col  xs={12} sm={4}>
              
                <div className="card text-center  cardoussama" >
            <div className="overflow">
                <img src={oussama} alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">oussama</h4>
                <p className="card-text text-secondary">
                    Nom: Oussama Jamil
                    Email:OussamaJamil01@gmail.com
                </p>
                </div>    
                </div>
                </Col>

                <Col  xs={12} sm={4}>
                <div className="card text-center" style={{marginTop:'60px'}}>
            <div className="overflow">
                <img src={fedwa} alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Fedwa</h4>
                <p className="card-text text-secondary">
                    Nom:Fedwa Ech-chaaba
                    Email:fdw1997@outlook.fr
                </p>

                
                </div>    
                </div>
                </Col>
                </Row>
                </div>

               <Row style={{marginTop:'60px'}}>
                  <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center" >
                    <div style={{display:'flex' ,flexDirection:'column'}}>
                        <h2 style={{color:'#f50057',marginLeft:'40px'}} className="h2Amal">Pourquoi AMMAL</h2>
                         <h4>Nous avons pour mission d'être créatifs</h4>
                    </div>
                  </Grid>
              </Row>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
              <Row>
                  <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               < PaymentIcon className="fonticondslow" style={{color:'red !important'}}/>
               <h5 className="h5howitwork">Paiements non électroniques</h5>
           <span className="spanparahowitwork">  Financement Ammal et financement de projet, et ce financement est calculé comme l'objectif de financement</span> 
               </div>
               
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <LocalLibraryIcon  className="fonticondslow"/>
               <h5 className="h5howitwork">Pas de prêts ni d'actions</h5>
          <span className="spanparahowitwork">Ammal est une plateforme de financement  Les porteurs de projets financés avec succès envoient des prix et leurs soutiens, mais ils ne donnent pas une part de leurs projets et ils ne rendent pas l'argent récolté par leurs campagnes</span> 
               </div>
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <EmojiObjectsIcon  className="fonticondslow"/>
               <h5 className="h5howitwork">Objectifs Les entrepreneurs </h5>
           <span className="spanparahowitwork">sur Ammal peuvent transformer leurs objectifs en réalisations. Réservé ou pour les entrepreneurs qui souhaitent obtenir l'opportunité qui appartient à l'entreprise, qui est égale ou supérieure à leur première réalisation</span> 
               </div>
               </Col>
            
               </Row>
               </div>
               <Row style={{width:'100%',height:'400px',backgroundColor:'#f48fb1',marginTop:'50px'}}>
            
                   <Grid 
                   container
                  direction="row"
                  justify="center"
                  alignItems="center">
                     <div classNamme="footr1howitworks">
                      <p><h2  >Voici la liste des informations nécessaires pour créer une campagne !</h2></p>
                      <ul>
                          <li>
                          <h5>Je sais comment fonctionne le financement participatif.</h5> 
                          </li>
                          <li>
                          <h5> Mon projet s'inscrit dans l'une des catégories acceptées sur Ammal.</h5> 
                          </li>
                          <li>
                          <h5> Je suis prêt à tourner une vidéo pour ma campagne.</h5> 
                          </li>
                          <li>  
                          <h5> J'ai au moins 4 heures par jour pour gérer ma campagne.</h5> 
                          </li>
                          <li>
                          <h5> Je peux demander à mes amis, ma famille et mes collègues de me soutenir pour atteindre 30% de mon objectif.</h5> 
                          </li>
                      </ul>
                      <div >
                      <p>Vous voulez en savoir plus sur le financement participatif ? Téléchargez le guide de financement participatif Ammal.</p>
                      <a className="btn btn-outline-dark" onClick={()=>{
                         saveFile();
                      }}>Télécharger</a>
                      </div>
                      <div className="btnprojet">
                      <a className="btn  btn-outline-dark" onClick={()=>history.push("/confirmation")} >démarrez votre projet</a>
                      </div>
                 </div>
                   </Grid>
               </Row>
            </Container>
            <Footer/>
        </> 
         
    )
}
                   


export default HowItWork