import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoginPage from './LoginPage'

const Home: React.FC = () => {
  return (
    <Container fluid className="bg-gray">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={12} lg={11} xl={10}>
          <div className="card d-flex mx-auto my-5">
            <Row>
              <Col md={5} sm={12} xs={12} className="c1 p-5">
                <div className="row mb-5 m-3">
                  <img
                    src="https://i.imgur.com/pFfTOwy.jpg"
                    width="70vw"
                    height="55vh"
                    alt=""
                  />
                </div>
                <img
                  src="https://i.imgur.com/kdE7GKw.jpg"
                  width="120vw"
                  height="210vh"
                  className="mx-auto d-flex"
                  alt="Teacher"
                />
                <div className="row justify-content-center">
                  <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                    <h1 className="wlcm">Welcome to your blackboard</h1>
                    <span className="sp1">
                      <span className="px-3 bg-danger rounded-pill"></span>
                      <span className="ml-2 px-1 rounded-circle"></span>
                      <span className="ml-2 px-1 rounded-circle"></span>
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={7} sm={12} xs={12} className="c2 px-5 pt-5">
                <LoginPage />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
