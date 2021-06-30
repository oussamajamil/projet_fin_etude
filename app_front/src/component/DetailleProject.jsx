import React, { useEffect,useState} from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import './Detailleprojet.css';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
function DetailleProject()
{
    let {nomProjet}=useParams();
    const [Data,setData]=useState({});
    const [dataCadeaux,setdataCadeaux]=useState({});
    let history=useHistory();
    const name={nomProjet}
    const dataprojet=async()=>{
         await axios({
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
    console.log(Data);
    return(
      <>
        <div className="container-fluid" style={{height:'400px',backgroundColor:'#000'}}>
          <div className="row">
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               > 
               <div className="rowyoutubetitre">
                <h3 className="titreProjrtslance">{Data.nom_projet}</h3> 
          <ReactPlayer 
          style={{marginTop:'10px'}}
          className="urlYoutubeprojet"
          url={Data.Url_vedio_youtube}
          />
             </div> 
           </Grid>
          </div>
          </div>
        <div className="container">
        <div className="row" style={{marginTop:'50px'}}>
        <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
          <h3>Un aperçu des projets:</h3>
          </Grid>
          </div>
          <div className="row" >
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
          <h5>{Data.Résumé}</h5>
          </Grid>
          </div>
       
          <div className="row">

            <img className="imageprojetdata" src={`http://127.0.0.1:8000/${Data.images}`}/>
          </div>
          <div className="row">
          <div className="col-sm-12 col-lg-8 col-md-8"> 
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
             >
          <h2 className="titreProjrtslance" style={{mariginTop:'20px'}}>les information:</h2>
          </Grid>
           {Data.titre1==null && Data.titre2==null && Data.titre3==null?
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
             >
          
          <Alert severity="warning" width={600}>Auccun Information Affichier </Alert>
          </Grid>:
            <>
            {Data.titre1!=null?
            <div>
             <div className="row">
               <h3>{Data.titre1}</h3>
             </div>
             <div className="row">
             <h5>{Data.description1}</h5>
             </div>
             </div>
             :""
             }
             {Data.titre3!=null?
            <div>
            <div className="row">
              <h3>{Data.titre3}</h3>
            </div>
            <div className="row">
            <h5>{Data.description3}</h5>
            </div>
            </div>
             :""
             }
             {Data.titre2!=null?
             <div>
             <div className="row">
               <h3>{Data.titre2}</h3>
             </div>
             <div className="row">
             <h5>{Data.description2}</h5>
             </div>
             </div>
             :""
             }
             
           </>
           }
           </div>
           <div className="col-sm-12 col-lg-4 col-md-4">
           
           </div>
          </div>
          </div>
          </>
       
    );
}
export default DetailleProject;