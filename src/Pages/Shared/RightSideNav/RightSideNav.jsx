import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub />
          Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h6>Find us on </h6>
        <ListGroup>
          <ListGroup.Item className="mb-2" disabled><FaFacebook/>Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch/>Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp/>WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter/>Twitter</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel/>
      </div>
    </div>
  );
};

export default RightSideNav;