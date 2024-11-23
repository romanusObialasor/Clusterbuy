import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { IoChevronBack } from "react-icons/io5";

const Register = () => {
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
            <Comp
              initial={{
                marginLeft: "70px",
                opacity: 0,
              }}
              animate={{
                marginLeft: "0",
                opacity: 1,
              }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Number>
                <span>01</span>/ 02
              </Number>
              <Line />
            </Comp>
            <Header1
              initial={{
                marginTop: "0px",
                opacity: 0,
              }}
              animate={{
                marginTop: "20px",
                opacity: 1,
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Be among the first to experience a smarter way to shop
            </Header1>
            <Sub
              initial={{
                marginTop: "26px",
                opacity: 0,
              }}
              animate={{
                marginTop: "16px",
                opacity: 0.7,
              }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              By joining our waitlist, you’re taking the first step toward
              unlocking unbeatable group deals, exclusive discounts, and the
              power of collective buying
            </Sub>
            <LeftImage
              src="/assets/asset4.png"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.3, delay: 1 }}
            />
          </Wrapper2>
        </Left>
        <Right
          initial={{
            marginRight: "40px",
            marginBottom: "50px",
          }}
          animate={{
            marginRight: "0",
            marginBottom: "0",
          }}
        >
          <RightWrapper
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Back>
              <IoChevronBack />
            </Back>
            <RightHead>Apply Now!</RightHead>
            <RightSub>
              Welcome to the Fooddey waitlist, let's get you registered
            </RightSub>
            <RightLine></RightLine>
            <Form>
              <Inputer>
                <span>Name</span>
                <Input placeholder="Obialasor Romanus"></Input>
              </Inputer>
              <Inputer>
                <span>Email</span>
                <Input placeholder="robialasor123@gmail.com"></Input>
              </Inputer>
              <Inputer>
                <span>Phone Number</span>
                <Input placeholder="+234 701 551 4272"></Input>
              </Inputer>
              <Button>Apply</Button>
            </Form>
          </RightWrapper>
        </Right>
      </Body>
    </Main>
  );
};

export default Register;

const myAnimation = keyframes`


    0% {
        background: #f5cebd ;
    }
    
    100% {
      background-color: #e8e8e8;
    
  }`;
const Right = styled(motion.div)`
  flex: 0.5;
  display: flex;
  align-items: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${myAnimation} 1s ease-in-out 1;
  animation-fill-mode: forwards; /* Keep the final state */
`;

const RightWrapper = styled(motion.div)`
  width: 72%;
  color: #06160f;
`;

const Back = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #d3722c;
  color: white;
  cursor: pointer;
  margin-top: -20px;
`;

const RightHead = styled.div`
  font-family: "Funnel Display", sans-serif;
  font-weight: 600;
  font-size: 36px;
  max-width: 80%;
  margin-top: 30px;
`;

const RightSub = styled.div`
  opacity: 0.7;
  font-size: 14px;
  margin-top: 5px;
`;

const RightLine = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background-color: black;
  opacity: 0.5;
`;

const Form = styled.div`
  font-family: "Funnel Display", sans-serif;
  margin-top: 50px;
`;

const Inputer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  span {
    font-size: 14px;
  }
`;

const Input = styled.input`
  height: 52px;
  margin-top: 5px;
  border-radius: 10px;
  border: unset;
  padding-left: 18px;
  outline: none;
  font-family: "Funnel Display", sans-serif;

  &::placeholder {
    opacity: 0.7;
  }
`;

const Button = styled.div`
  height: 52px;
  margin-top: 5px;
  border-radius: 10px;
  border: unset;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3722c;
  color: white;
  margin-top: 30px;
  cursor: pointer;
`;

// const Main = styled.div``;

// const Main = styled.div``;

// const Main = styled.div``;

// const Main = styled.div``;

// const Main = styled.div``;

const Comp = styled(motion.div)`
  font-size: 16px;
  display: flex;
  align-items: flex-end;
`;

const Number = styled.div`
  color: #343434;

  span {
    font-weight: bold;
    font-size: 40px;
    color: black;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 200px;
  background: black;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const Header1 = styled(motion.div)`
  font-family: "Funnel Display", sans-serif;
  font-weight: 600;
  font-size: 36px;
  max-width: 80%;
  p {
    margin: 0;
    width: fit-content;
    padding: 5px 30px;
    border: 1px solid #00a85a;
    background-color: rgba(0, 168, 90, 0.1);
  }
`;

const Sub = styled(motion.div)`
  max-width: 540px;
  font-size: 14px;
`;

const Wrapper2 = styled.div`
  width: 100%;
  padding-left: 90px;
  z-index: -1;
  /* display: none; */
`;

const Main = styled.div``;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  /* justify-content: center; */
  flex: 0.7;
  padding-top: 120px;
  /* margin-left: 50px; */
`;

const LeftImage = styled(motion.img)`
  height: 400px;
  position: fixed;
  left: 13%;
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
