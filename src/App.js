import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './component/Header';
import CreateUserForm from './component/CreateUserForm';


function App() {
  const [alldata, setAlldata] = useState([]);

  const fetchdata = async ()=>{
    await axios.get('https://reqres.in/api/users?page=1')
    .then((response)=>{
      setAlldata(response.data.data);
    })
  }

  useEffect(() => {
    fetchdata();
  },[]);
  return (
    <>
      <Header />
      
      <Container style={{ marginTop: 55, marginBottom: 250, }}>

      <CreateUserForm />

      <Row xs={1} md={3} className="g-5">
      {
        alldata.map((value)=>{
          return(
            <>
              <Col key={value.id}>
                <Card>
                <Card.Img variant="top" src={value.avatar} />
                <Card.Body>
                  <Card.Title>{value.first_name} {value.last_name}</Card.Title>
                  <Card.Text>
                    {value.email}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </>
          )
        })
      }   
        </Row>
      </Container>

    </>
  );
}

export default App;
