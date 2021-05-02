import React, { useEffect } from 'react'
import SlideImage from './SlideImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import axios from 'axios';
import Cookies from  'js-cookie';
import {Hommes} from '../redux/actions/UserActions';
import { useDispatch } from 'react-redux';
function Homme() {
    
    return (
        <div>
           
        <Container fluid>
            <Row>
                <Col xs={12} sm={12}>
                 <SlideImage/>
                  
                </Col>
            </Row>
        </Container> 
        </div>
    )
}

export default Homme
