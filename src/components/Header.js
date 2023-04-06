import React,{ useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';

import Login from "./Login";
import CardDetails from './CardDetails';

const Header = () => {   
    const navigate=useNavigate()
    const getData= useSelector((state)=>state.cartReducer.carts)
    // console.log(getData)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    console.log(open)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem("isLogIn")
        navigate("/login" )
    }
    return (
        <div>
            <Navbar  bg="dark" variant="dark" >
                <Container className="d-flex flex-row justify-content-end ">
                    <NavLink className="text-decoration-none px-5" to="/cards">Home</NavLink>
              
                    <NavLink  className="px-5" to="/cartpage" element={<CardDetails/>}>
                    <Badge className="mt-2" badgeContent={getData.length} color="primary"
                                onClick={handleClick}
                    >
                        <ShoppingCartIcon style={{ color: "red", fontSize: "2.2rem", cursor: "pointer" }}/>
                    </Badge>
                    </NavLink>

                    <NavLink className="text-decoration-none" to="/login" element={<Login/>}>            
                        < LogoutIcon onClick={handleLogOut} style={{ color: "red", fontSize: "2.2rem", cursor: "pointer" }}/>                  
                    </NavLink>
                 
                </Container>
            </Navbar>
        </div>
    )
}

export default Header