import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css'

import React from 'react'
const cardData = [
    {
      Key: "all",
      Value: "all task",
    },
    {
      Key: "fav",
      Value: "favourite task",
    },
    {
      Key: "pen",
      Value: "pending task",
    },
    {
      Key: "com",
      Value: "compeleted task",
    },
  ];
  
const card = () => {
  return (
    <>
      <Container>
      <Row style={{justifyContent:'space-between'}}>
       {
        cardData.map(ele=><Col className="card-grid" key={ele.Key}>{ele.Value}</Col>)
       }
      </Row>
    </Container>
    </>
  )
}

export default card
