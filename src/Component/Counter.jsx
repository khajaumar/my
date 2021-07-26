import React, { useState } from "react";
import { Button, Row, Col, Card, ListGroup, Form } from "react-bootstrap";
import { counterRed } from "../Reducers/counterRed";
export const Counter = () => {
  //   const [cntr, setCntr] = useState(0);

  const {
    firstName,
    middleName,
    lastName,
    houseNum,
    street,
    cityName,
    country,
  } = counterRed.Data;
  const [fname, setFname] = useState(firstName);
  const [mname, setMname] = useState(middleName);
  const [lname, setLname] = useState(lastName);
  const [hnum, setHnum] = useState(houseNum);
  const [strt, setStrt] = useState(street);
  const [city, setCity] = useState(cityName);
  const [cntry, setCntry] = useState(country);
  return (
    <div>
      {/* //     <table>
        //         <tr>
        //             <td><Button variant="primary" onClick={()=> cntr>0 && setCntr(cntr-5)}><h1>-</h1></Button></td>
        //             <td><h1>{cntr}</h1></td>
        //             <td><Button variant="primary" onClick={()=> cntr<50 && setCntr(cntr+5)}><h1>+</h1></Button></td>
        //         </tr>
        //     </table> */}
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Row>First Name</Row>
              <Row>
                <input type="text" />
              </Row>
              <Row>Last Name</Row>
              <Row>
                <input type="text" />
              </Row>
              <Row>Address</Row>
              <Row>
                <Col>
                  <Row>
                    H.No. <input type="text" />
                  </Row>
                  <Row>
                    Street <input type="text" />
                  </Row>
                  <Row>
                    City <input type="text" />
                  </Row>
                  <Row>
                    Country <input type="text" />
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              {" "}
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Button variant="primary">
                <h4>Submit</h4>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* /-----------------Form Tag---------------/ */}

      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    onChange={(e) => setMname(e.target.value)}
                    value={mname}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                  />
                  <br />
                </>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Address:</Form.Label>
                <>
                  <Form.Control
                    type="text"
                    placeholder="House No.:  1-4-512"
                    onChange={(e) => setHnum(e.target.value)}
                    value={hnum}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Street"
                    onChange={(e) => setStrt(e.target.value)}
                    value={strt}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setCntry(e.target.value)}
                    value={cntry}
                  />
                </>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Row>{`${fname} ${mname} ${lname}`}</Row>
                        <Row>{hnum}</Row>
                        <Row>{strt}</Row>
                        <Row>{city}</Row>
                        <Row>{cntry}</Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Button variant="danger">Submit</Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
