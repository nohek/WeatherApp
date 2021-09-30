import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  transition: 400ms ease-out;
  background: linear-gradient(90deg, rgba(58,130,180,0.711922268907563) 0%, rgba(29,146,253,0.7343312324929971) 50%, rgba(96,69,252,0.6278886554621849) 100%);
  background: linear-gradient(140deg, rgba(255,119,0,1) 0%, rgba(255,137,0,0.87718837535014) 8%, rgba(232,78,78,1) 100%);
  main {
    padding: 25px;
  }
`;

export const SearchBox = styled.div`
  width: 100%;

  input {
    display: block;
    width: 100%;
    padding: 15px 0 15px 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 0px 16px 16px;
    margin-top: -25px;

    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    color: #313131;
    font-size: 20px;

    transition: 400ms ease;

    &:focus {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const LocationBox = styled.div`
   color: #FFF;
   text-align: center;
 .location {
  margin-top: 75px;
  font-weight: 500;
  font-size: 32px;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
 }

 .date {
  font-weight: 300;
  font-size: 20px;
  font-style: italic;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);

 }
`;

export const WeatherBox = styled.div`
  text-align: center;
  color: #FFF;
  .temp {
    position: relative;
    display: inline-block;
    margin: 20px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 15px 25px;

    font-size: 102px;
    font-weight: 900;

    text-align: center;
    text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  }

  .weather {
    font-size: 42px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5)
  }
`;