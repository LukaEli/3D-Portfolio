import React, { useState } from "react";
import styled from "styled-components";
import Development from "./NCNEWS";
import ProductDesign from "./Limoney";
import WebDesign from "./YoutubeClone";
import { color } from "three/webgpu";

// Project data with titles and descriptions
const data = [
  {
    title: "Youtube Clone",
    description: "A clone of Youtube with basic features and UI.",
  },
  {
    title: "NC NEWS",
    description:
      "Successfully built on my API with my front-end development project. This application allows users to filter through a database of articles and allows visitors to vote and comment on articles.",
  },
  {
    title: "Limoney",
    description:
      "Teamed up to plan and develop a full-stack application aimed at teaching essential skills such as budgeting and money management.",
  },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: color 0.3s, -webkit-text-stroke 0.3s;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.$text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  ${(props) =>
    props.selected &&
    `
    color: pink; // Change this to your preferred color
    -webkit-text-stroke: 0px; // Remove stroke when selected
  `}
`;

const Description = styled.div`
  font-size: 20px;
  color: #333;
  margin-top: 20px;
  text-align: center;
  max-width: 80%;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Works = () => {
  const [selectedTitle, setSelectedTitle] = useState(data[0].title);

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item.title}
                $text={item.title}
                selected={selectedTitle === item.title}
                onClick={() => setSelectedTitle(item.title)}
              >
                {item.title}
              </ListItem>
            ))}
          </List>

          <Description>
            {selectedTitle === "Youtube Clone" ? (
              <>
                YouTube clone built using React, designed to replicate the core
                functionalities of the popular video-sharing platform.
                <a
                  href="https://github.com/LukaEli/Youtube-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <p></p>
                <a
                  href="https://test1532.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Demo</Button>
                </a>
              </>
            ) : selectedTitle === "NC NEWS" ? (
              <>
                Successfully built on my API with my front-end development
                project. This application allows users to filter through a
                database of articles and allows visitors to vote and comment on
                articles.
                <p></p>
                <a
                  href="https://github.com/LukaEli/nc_news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <p></p>
                <a
                  href="https://brilliant-d6ad17.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Demo</Button>
                </a>
              </>
            ) : (
              <>
                Teamed up to plan and develop a full-stack application aimed at
                teaching essential skills such as budgeting and money
                management.
                <p></p>
                <a
                  href="https://github.com/joao-ponte/limoney"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <p></p>
                <a
                  href="https://github.com/joao-ponte/limoney"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Demo</Button>
                </a>
              </>
            )}
          </Description>
        </Left>
        <Right>
          {selectedTitle === "Youtube Clone" ? (
            <WebDesign />
          ) : selectedTitle === "NC NEWS" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
