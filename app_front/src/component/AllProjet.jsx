import axios from 'axios';
import   React ,{useEffect, useState}  from 'react'


function AllProjet() {
    const [projet,SetProjet]=useState({});
  
    useEffect(() => {
        projet1();
    },[])
    const projet1=()=>{
        axios.get('/projet').then(res=>{
                console.log(res.data);
          }).catch(err=>{
            console.log(err);
          });
    }
    
    return (
        <div>
            HELLO
        </div>
    )
}

export default AllProjet
