import { Grid,Paper, TextField, Button, } from '@mui/material'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("")
    const navigate=useNavigate();
    const handleClick=(e)=>{
         e.preventDefault();
         localStorage.setItem("email", email);
         localStorage.setItem("password", password);
        //  console.log(localStorage.getItem("email"))
         if(localStorage.getItem("email")==="magiccards@gmail.com" && localStorage.getItem("password")==="Abcd@1234"){
            localStorage.setItem("isLogIn",true);
            navigate("/cards");
         }else{
            alert("Invalid Email or Password");
         }
    }
    return(
        <Grid>
            <Paper elevation={10} sx={{padding :2,height:'80%',width:280, margin:"60px auto"}}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                
                <TextField type="email" value={email} sx={{marginTop:2}} label='Email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} fullWidth required/>
                <TextField type="password" value={password} sx={{marginTop:2}} label='Password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} fullWidth required/>
                <Button sx={{marginTop:2,marginBottom:5}} type='submit' color='primary' variant="contained"  fullWidth onClick={handleClick}>Login</Button>             
            </Paper>
        </Grid>
    )
}

export default Login