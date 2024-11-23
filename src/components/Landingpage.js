import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 100px;
  margin-left: 20px;
`;

const LeftHeader = styled.div`
  display: flex;
  margin-right: 40px;
`;

const Linker = styled.a`
  font-family: "Geist Mono", monospace;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: none;
  margin-right: 30px;
  text-decoration: none;
  color: black;
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Right = styled.div`
  background: #f5cebd;
  flex: 0.5;
  margin-right: 40px;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
`;

const RightImage = styled.img`
  width: 100%;
`;

const Comp = styled.div`
  font-size: 20px;
  display: flex;
  align-items: flex-end;
`;

const Number = styled.div`
  color: #343434;

  span {
    font-weight: bold;
    font-size: 50px;
    color: black;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 200px;
  background: black;
  margin-bottom: 13px;
  margin-left: 10px;
`;

const Header1 = styled.div`
  font-family: "Funnel Display", sans-serif;
  font-weight: 700;
  font-size: 60px;
  width: fit-content;
  margin-top: 20px;
  margin-right: 50px;
  p {
    margin: 0;
    width: fit-content;
    padding: 5px 30px;
    border: 1px solid #00a85a;
    background-color: rgba(0, 168, 90, 0.1);
  }
`;

const Sub = styled.div`
  max-width: 540px;
  font-size: 18px;
  margin-top: 16px;
`;

const Wrapper2 = styled.div``;

const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Button1 = styled(Link)`
  background: #f58634;
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
`;

const Button2 = styled.div`
  margin-left: 20px;
  color: #f58634;
  border: 1px solid #f58634;
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
`;

// const Main = styled.div`
//
// `;

const Landingpage = () => {
  return (
    <Main>
      <Header>
        <Logo src="/assets/asset1.png" />
        <LeftHeader>
          <Linker href="https://google.com">Facebook</Linker>
          <Linker href="https://google.com">Linkedin</Linker>
          <Linker href="https://google.com">Instagram</Linker>
        </LeftHeader>
      </Header>
      <Body>
        <Left>
          <Wrapper2>
            <Comp>
              <Number>
                <span>01</span>/ 02
              </Number>
              <Line />
            </Comp>
            <Header1>
              Unlock Big Savings <br />
              Through Group <p>Buying!</p>
            </Header1>
            <Sub>
              Welcome to Fooddey, where collaboration meets savings. With our
              cluster buying model, the more buyers that join, the lower the
              prices go. It's simple
            </Sub>
            <Buttons>
              <Button1 to="/register">Register</Button1>
              <Button2>Sponsor</Button2>
            </Buttons>
          </Wrapper2>
        </Left>
        <Right>
          <RightImage src="/assets/asset3.jpg" />
        </Right>
      </Body>
    </Main>
  );
};

export default Landingpage;
