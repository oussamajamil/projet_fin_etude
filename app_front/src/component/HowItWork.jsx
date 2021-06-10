import React from 'react'
import Grid from '@material-ui/core/Grid';
import './works.css';
import { Container,Row,Col } from 'react-bootstrap';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
function HowItWork() {
    return (
        <div>
          <div className="imageworks" style={{backgroundColor:'black',width:'100%',height:'500px'}}></div>
         <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <p className="ppropsAmal">A propos de AMMAL</p>
            </Grid>
            <p className="papropsttxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quo ex fuga, perferendis autem perspiciatis deserunt et odio dolore quod eos vero eligendi? Obcaecati eaque aperiam provident nisi assumenda sequi!</p>

            
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <Row>
                  <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               < WorkIcon className="fontdivhomitwork"/>
           <span className="spanparahowitwork"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repudiandae assumenda officia necessitatibus eaque consectetur soluta sapiente facilis aspernatur veniam, unde a perspiciatis dolorum vitae non laboriosam quisquam laborum rem nihil maxime id iste architecto quaerat. A omnis optio possimus inventore quas nihil aliquam, explicabo accusamus voluptates quia aperiam ipsam eaque, id libero alias iste molestias blanditiis doloremque consequatur beatae impedit iure, in officia. Quidem id repellat nobis, eligendi expedita fugiat saepe error magni repudiandae ut soluta, laboriosam nostrum iusto!</span> 
               </div>
               
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <MonetizationOnIcon  className="fontdivhomitwork"/>
          <span className="spanparahowitwork">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit illum reprehenderit vero temporibus nostrum iusto quae harum eaque facilis accusamus natus, odio sed minima eos quibusdam nam modi aliquid, nisi ea tempora atque sit fugiat laborum! Ea, quos asperiores. Enim officiis reprehenderit quasi numquam, at itaque aut nobis. Aliquam iste quo ex molestiae necessitatibus non delectus possimus facere? Cum, officiis voluptatum nostrum nesciunt quae sint voluptate consequatur ut quod fuga voluptatibus quibusdam nobis mollitia. Excepturi vitae officia explicabo sed ipsa.</span> 
               </div>
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <EmojiObjectsIcon  className="fontdivhomitwork"/>
           <span className="spanparahowitwork">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus ullam, aut eius libero sint at sequi perspiciatis odit, fugiat officiis! Nemo, natus vero. Accusamus expedita deserunt impedit nobis laudantium nemo temporibus, libero ad magnam sunt aspernatur fugit! Ipsam veniam eveniet fugiat laudantium similique, et vero modi amet. Excepturi sunt fuga ad. Nemo illum quam perspiciatis ipsa placeat velit, culpa, pariatur adipisci quas id hic eveniet autem quo aliquam quibusdam deserunt dignissimos consequuntur quia saepe quos! Numquam laborum omnis alias.</span> 
               </div>
               </Col>
            
               </Row>
               </div>
               
               <div style={{display:'flex',justifyContent:'space-between', marginLeft:'50px',marginTop:'50px'}}>
                   <Row>
                   <Col>
                   
               <div className="card text-center" style={{marginTop:'60px'}}>
            <div className="overflow">
                <img src="" alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Rachid</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quia, pariatur! Ipsa, 
                    provident laborum atque nobis dignissimos at. 
                    Delectus, sequi optio?
                </p>
                
                </div>    
                </div>
                </Col>
                <Col  xs={12} sm={4}>
              
                <div className="card text-center  cardoussama" >
            <div className="overflow">
                <img src="" alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">oussama</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quia, pariatur! Ipsa, 
                    provident laborum atque nobis dignissimos at. 
                    Delectus, sequi optio?
                </p>
                </div>    
                </div>
                </Col>

                <Col  xs={12} sm={4}>
                <div className="card text-center" style={{marginTop:'60px'}}>
            <div className="overflow">
                <img src="" alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Fedwa</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quia, pariatur! Ipsa, 
                    provident laborum atque nobis dignissimos at. 
                    Delectus, sequi optio?
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
                        <h2 style={{color:'#f50057',marginLeft:'40px'}}>pourquoi AMMAL</h2>
                         <h5>Nous avons pour mission d'être créatifs</h5>
                    </div>
                  </Grid>
              </Row>
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
              <Row>
                  <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               < WorkIcon className="fonticondslow" style={{color:'red !important'}}/>
           <span className="spanparahowitwork"> epudiandae ut soluta, laboriosam nostrum iusto!</span> 
               </div>
               
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <MonetizationOnIcon  className="fonticondslow"/>
          <span className="spanparahowitwork">Lorem ipsum dolor sipsa.</span> 
               </div>
               </Col>
               <Col xs={12} sm={4}>
               <div className='cntndivhowitworks'>
               <EmojiObjectsIcon  className="fonticondslow"/>
           <span className="spanparahowitwork">Lorem ipsumsint at sequi perspiciatis odit, fugiat officiis! Nemo, natus vero. Accusamus dignissimos consequuntur quia saepe quos! Numquam laborum omnis alias.</span> 
               </div>
               </Col>
            
               </Row>
               </div>
               <Row style={{width:'100%',height:'400px',backgroundColor:'#f50057',marginTop:'50px'}}>
                   <Grid 
                   container
                  direction="row"
                  justify="center"
                  alignItems="center">
                     <div classNamme="footr1howitworks">
                      <p>dkvfdvfddfvfg vfvfvfvfvf</p>
                      <p>dkvfdvfddfvfg vfvfvfvfvf</p>
                      <p>dkvfdvfddfvfg vfvfvfvfvf</p>
                      <p>dkvfdvfddfvfg vfvfvfvfvf</p>
                 </div>
                   </Grid>
                
               </Row>
               </Container>
               <Row style={{width:'99.6vw',height:'300px',backgroundColor:'black',marginTop:'20px'}}>

               </Row>
           
        </div>
    )
}

export default HowItWork
