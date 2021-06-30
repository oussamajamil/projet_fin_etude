import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector,useDispatch} from 'react-redux';
import Buttons from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import {updateUser} from '../../redux/actions/UserActions';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function UserAdmin()
{
  const dispatch=useDispatch()
    let history=useHistory();
    const classes = useStyles();
    let token='Bearer '+localStorage.getItem('token');
    const [datausers,setdatausers]=useState([]);
    const [loading,setloading]=useState(false);
    // useEffect(() => {
        
    //   }, [])
    const data=useSelector((state)=>state.alluser.user);
   console.log(data);
    return(
       <>
       <section class="grid">
       <article style={{height:'530px'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell align="right">pays</StyledTableCell>
            <StyledTableCell align="right">email</StyledTableCell>
            <StyledTableCell align="right">Nombre Projet lancer</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((dt)=>{
               return(
              <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {dt.nom+dt.prenom}
              </StyledTableCell>
              <StyledTableCell align="right">{dt.pays}</StyledTableCell>
              <StyledTableCell align="right">{dt.email}</StyledTableCell>
              <StyledTableCell align="right">{dt.nembre_projet_lancer}</StyledTableCell>
              <StyledTableCell align="right">{dt.Type=="Admin"?<Button variant="contained" disabled style={{width:'100px'}} >
                                    Admin
                                    </Button>:
                                    dt.ActiveCompte=="oui"?
                                    <Buttons variant="danger" onClick={()=>{
                                    
                                       axios({
                                        method: "POST",
                                        url: '/desActiverCompteAdmin/'+dt.id,
                                        headers: { "Content-Type": "multipart/form-data" , 
                                                     "Authorization":token
                                                 },
                                                }).then(res=>{ 
                                                  dispatch(updateUser({
                                                    id:dt.id,
                                                    ActiveCompte:"non"
                                                  }));
                                                  
                                                }).catch(err=>{
                                                   console.log(err);
                                               
                                      })
                                    }} >désactiver</Buttons>:
                                    <Buttons variant="success"style={{width:'100px'}} onClick={()=>{
                                   
                                      
                                       axios({
                                        method: "POST",
                                        url: '/ActiverCompteAdmin/'+dt.id,
                                        headers: { "Content-Type": "multipart/form-data" , 
                                                     "Authorization":token
                                                 },
                                                }).then(res=>{ 
                                                  dispatch(updateUser({
                                                    id:dt.id,
                                                    ActiveCompte:"oui"
                                                  }));
                                                }).catch(err=>{
                                                   console.log(err);
                                               
                                      })
                                    }}>Activer</Buttons>
                                    }
</StyledTableCell>
            </StyledTableRow>
               )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
       </article>
       </section>
       </>
    );
}
export default UserAdmin;