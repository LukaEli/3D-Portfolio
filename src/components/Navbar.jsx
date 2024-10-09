import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  font-size: 40px;
  margin-left: 100px;

  border: none;
  border-radius: 1000px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #008cff, #e100ff);
    z-index: -1;
  }

  &:hover {
    z-index: 0;
    box-shadow: 40px 0 100px #008cff, -40px 0 100px #e100ff;
  }
`;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const Button = styled.button`
//   width: 100px;
//   padding: 10px;
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* <Logo src="./img/logo.png" /> */}
          <List>
            <ListItem>
              <a
                href="#hero"
                style={{ textDecoration: "none", color: "#f0f0f0" }}
              >
                Home
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#who"
                style={{ textDecoration: "none", color: "#f0f0f0" }}
              >
                Skills
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#works"
                style={{ textDecoration: "none", color: "#f0f0f0" }}
              >
                Projects
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "#f0f0f0" }}
              >
                Contact
              </a>
            </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
