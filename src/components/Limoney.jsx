import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Lemonade from "./Lemonade";
import styled from "styled-components";

const Description = styled.div`
  width: 200px;
  height: 180px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Button = styled.button`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Limoney = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Lemonade />
        </Stage>

        <OrbitControls enableZoom={false}></OrbitControls>
      </Canvas>
      <Description>
        Teamed up to plan and develop a full-stack application aimed at teaching
        essential skills such as budgeting and money management.
        <p></p>
        <a href="https://github.com/joao-ponte/limoney" target="_blank">
          <Button>Github</Button>
        </a>
        <p></p>
        <a href="https://github.com/joao-ponte/limoney" target="_blank">
          <Button>Demo</Button>
        </a>
      </Description>
    </>
  );
};

export default Limoney;
