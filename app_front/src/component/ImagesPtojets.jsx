import React from 'react'

function ImagesPtojets() {
    const [donner, setDonner] = React.useState({
        url_youtube:"",
        url_projet: "",
        photo:"",
        date_naissance:"",
        description:"",
        });
        // const [Data, setData] = React.useState([]);
    
    return (
        <div className="container">
               <div className="row">
                   <div className="col-sm-12 col-md-6 col-lg-4">

                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-4">

                   </div>
               </div>
        </div>
    )
}

export default ImagesPtojets
