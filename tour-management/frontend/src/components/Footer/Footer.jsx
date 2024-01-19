import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo1} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                itaque.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span className="social__link d-flex align-items-center gap-4">
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-twitter-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {nav__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6
                  className="mb-0 d-flex align-item-center
                gap-2"
                >
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  address:
                </h6>
                <p>
                  Cochin – 682 005, Kerala, India. Bangalore | Delhi | Male |
                  Lakshadweep
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6
                  className="mb-0 d-flex align-item-center
                gap-2"
                >
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p>info@goltravels.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6
                  className="mb-0 d-flex align-item-center
                gap-2"
                >
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p>+91-9778389592</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, Gol Ventures Private Ltd . All rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
