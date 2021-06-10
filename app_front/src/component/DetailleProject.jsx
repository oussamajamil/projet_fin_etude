import React, { useEffect,useState} from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import './Detailleprojet.css';
import Grid from '@material-ui/core/Grid';
function DetailleProject()
{
    let {nomProjet}=useParams();
    const [Data,setData]=useState({});
    let history=useHistory();
    const name={nomProjet}
    const dataprojet=()=>{
          axios({
            method: "GET",
            url: "/projet/"+name.nomProjet,
             headers: { "Content-Type": "multipart/form-data" },
             }).then(res=>{
                  if(res.data.message==="Aucun projet(s) trouvé(s)!")
                  {
                   history.push("/error");
                  }
                  else
                  {
                    setData(res.data[0]);
                  }
                }).catch(ex=>
                    {
                        history.push("/aaaa");
                    })
                    
    }
    useEffect(() => {
        dataprojet();
    },[]);
    return(
        <div className="container-fluid" style={{height:'400px',backgroundColor:'#000'}}>
          <div className="row">
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >      
          <ReactPlayer 
          width={1000}
          height={380}
          style={{marginTop:'10px'}}
          className="urlYoutubeprojet"
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
          />
           </Grid>
          </div>
          <div className="row">
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
                   <h3>{Data.nom_projet}</h3>
         </Grid>
          </div>

        </div>
    );
}
export default DetailleProject;