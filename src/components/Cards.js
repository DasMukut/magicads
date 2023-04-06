import React, { useState } from 'react';
import "./Styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import { useDispatch } from "react-redux";
import Header from "./Header"
import { Cardsdata } from './CardsData';
import { ADD } from "../redux/actions/action"

const Cards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(Cardsdata);
  console.log(setData)
  return (
    <>
      <Header />
      <div className='container'>

        <h4 className='text-center mt-5'> Product Landing Page </h4>

        <div className='row d-flex justify-content-center align-items-center'>
          {
            data.map((val, id) => {
              return (
                <>
                  <Card className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src={val.img} style={{ height: "16rem" }} />
                    <Card.Body>
                      <Card.Title>{val.name}</Card.Title>
                      <Card.Text>
                        <h6>Id : {val.id}</h6>

                        <h5>Price:<CurrencyRupeeIcon />-{val.price}</h5>
                      </Card.Text>
                      <div className='button_div d-flex justify-content-center align-items-center'>
                        <Button
                          onClick={() => dispatch(ADD(val))}
                          className="col-lg-12" variant="primary">Add To Cart</Button>
                      </div>

                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Cards