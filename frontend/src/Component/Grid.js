import { Container, Row, Col } from "react-bootstrap";

export default function Grid(props) {
  return (
    <>
      <Container fluid>
        {/*
        <Row>
          <Col className="square bg-primary rounded-pill" sm={4}>
            1
          </Col>
          <Col className="square bg-secondary rounded-pill" sm={4}>
            2
          </Col>
          <Col className="square bg-danger rounded-pill" sm={4}>
            3
          </Col>
          <Col className="square bg-success rounded-pill" md={4}>
            4
          </Col>
          <Col className="square bg-warning rounded-pill" md={4}>
            5
          </Col>
          <Col className="square bg-info rounded-pill" md={4}>
            6
          </Col>
          <Col className="square bg-primary rounded-pill" lg={4}>
            7
          </Col>
          <Col className="square bg-secondary rounded-pill" lg={4}>
            8
          </Col>
          <Col className="square bg-danger rounded-pill" lg={4}>
            9
          </Col>
          <Col className="square bg-success rounded-pill" xl={4}>
            10
          </Col>
          <Col className="square bg-warning rounded-pill" xl={4}>
            11
          </Col>
          <Col className="square bg-info rounded-pill" xl={4}>
            12
          </Col>
        </Row>
        <br />
        <Row>
          <Col
            className="square bg-primary rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            1
          </Col>
          <Col
            className="square bg-secondary rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            2
          </Col>
          <Col
            className="square bg-danger rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            3
          </Col>
          <Col
            className="square bg-success rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            4
          </Col>
          <Col
            className="square bg-warning rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            5
          </Col>
          <Col
            className="square bg-info rounded-pill"
            xl={2}
            lg={3}
            md={4}
            sm={12}
          >
            6
          </Col>
        </Row> */}
        <br />
        {/* How do I make it share a row in xl
            create two rows in md
            each have a seperate row sm
        */}
        <Row noGutters={true}>
          <Col className="square bg-primary rounded-pill" sm={12} md={6} xl={3}>
            1
          </Col>
          <Col
            className="square bg-secondary rounded-pill"
            sm={12}
            md={6}
            xl={3}
          >
            2
          </Col>
          <Col className="square bg-danger rounded-pill" sm={12} md={6} xl={3}>
            3
          </Col>
          <Col className="square bg-success rounded-pill" sm={12} md={6} xl={3}>
            4
          </Col>
        </Row>
      </Container>
      <br /> <br />
      <Container>
        <Row>
          <Col className=" square bg-primary rounded-pill">1</Col>
          <Col className="square bg-secondary rounded-pill">2</Col>
          <Col className="square bg-danger rounded-pill">3</Col>
          <Col className="square bg-success rounded-pill">4</Col>
          <Col className="square bg-warning rounded-pill">5</Col>
          <Col className="square bg-info rounded-pill">6</Col>
          <Col className="square bg-primary rounded-pill">7</Col>
          <Col className="square bg-secondary rounded-pill">8</Col>
          <Col className="square bg-danger rounded-pill">9</Col>
          <Col className="square bg-success rounded-pill">10</Col>
          <Col className="square bg-warning rounded-pill">11</Col>
          <Col className="square bg-info rounded-pill">12</Col>
        </Row>
        <br />
        <Row>
          <Col className="square bg-primary rounded-pill">1</Col>
          <Col className="square bg-secondary rounded-pill">2</Col>
          <Col className="square bg-danger rounded-pill">3</Col>
          <Col className="square bg-success rounded-pill">4</Col>
          <Col className="square bg-warning rounded-pill">5</Col>
          <Col className="square bg-info rounded-pill">6</Col>
        </Row>
        <br />
        <Row>
          <Col className="square bg-primary rounded-pill">1</Col>
          <Col className="square bg-secondary rounded-pill">2</Col>
          <Col className="square bg-danger rounded-pill">3</Col>
          <Col className="square bg-success rounded-pill">4</Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row noGutters={true}>
          <Col className="square bg-primary " lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-secondary" lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-danger" lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-success" lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-warning" lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-info" lg={2} md={6} sm={12}>
            <div className="box"></div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="square bg-primary" lg={12} md={6}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-secondary" lg={12} md={6}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-danger" lg={12} md={6}>
            <div className="box"></div>
          </Col>
          <Col className="square bg-success" lg={12} md={6}>
            <div className="box"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
