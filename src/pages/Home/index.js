import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import wineglass1 from '../../images/temp/wineglass-1.svg'
import wineglass2 from '../../images/temp/wineglass-2.svg'
import wineglass3 from '../../images/temp/wineglass-3.svg'
import wineglass4 from '../../images/temp/wineglass-4.svg'

const Home = () => {
  return (
    <React.Fragment>
      <section className="section bg-karry">
        <Container>
          <h1 className="text-center mb-5">
            You’ve got three likes to give. And three only. Which wine
            colour gets them?
          </h1>
          <Row className="mb-4 mb-md-5 text-center">
            <Col>
              <img
                src={wineglass1}
                alt="wineglass1"
                className="img-fluid center-block mb-3"
              />
              <h6>Red</h6>
            </Col>
            <Col>
              <img
                src={wineglass2}
                alt="wineglass2"
                className="img-fluid center-block mb-3"
              />
              <h6>White</h6>
            </Col>
            <Col>
              <img
                src={wineglass3}
                alt="wineglass3"
                className="img-fluid center-block mb-3"
              />
              <h6>Rosé</h6>
            </Col>
            <Col>
              <img
                src={wineglass4}
                alt="wineglass4"
                className="img-fluid center-block mb-3"
              />
              <h6>Sparkling</h6>
            </Col>
          </Row>
          <p className="text-center">
            You can give them all to one colour or spread them out
            however you like.
          </p>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Home
