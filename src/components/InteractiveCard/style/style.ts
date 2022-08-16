import styled from "styled-components";
import BgMainDesktop from "../img/bg-main-desktop.png";
import BgMainMobile from "../img/bg-main-mobile.png";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

// ========================= component cards
export const CardsImages = styled.div`
  position: relative;
  background: url(${BgMainDesktop});
  height: 100vh;
  width: 30vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    background: url(${BgMainMobile}) no-repeat;
    background-size: 100% 400px;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 340px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    height: 325px;
  }

  @media screen and (min-width: 376px) and (max-width: 599px) {
    height: 235px;
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    height: 215px;
  }

  @media screen and (max-width: 320px) {
    height: 170px;
  }
`;

export const CardBackFigure = styled.figure`
  order: 2;
  position: relative;
  top: 120px;

  img {
    width: 90%;
    display: block;
    margin-left: 55%;
  }

  figcaption {
    color: var(--Light-grayish-violet);
    position: absolute;
    bottom: 92px;
    left: 500px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    figcaption {
      bottom: 66px;
      left: 380px;
    }
  }

  @media screen and (max-width: 992px) {
    position: absolute;
    width: 100%;
    bottom: auto;

    img {
      margin-left: 0;
    }

    figcaption {
      bottom: auto;
      left: auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    top: 30px;
    right: 30px;

    img {
      width: 55%;
      margin: 0 10px 0 auto;
    }

    figcaption {
      top: 50%;
      transform: translateY(-50%);
      right: 90px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    top: 30px;
    right: 30px;

    img {
      width: 70%;
      margin: 0 10px 0 auto;
    }

    figcaption {
      top: 49%;
      transform: translateY(-49%);
      right: 60px;

      p {
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 599px) {
    top: 30px;
    right: 12px;

    img {
      width: 70%;
      margin: 0 10px 0 auto;
    }

    figcaption {
      top: 49%;
      transform: translateY(-49%);
      right: 50px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    top: 20px;
    right: 12px;

    img {
      width: 70%;
      margin: 0 10px 0 auto;
    }

    figcaption {
      top: 49%;
      transform: translateY(-49%);
      right: 43px;

      p {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    top: 20px;

    img {
      width: 65%;
      margin: 0 15px 0 auto;
    }

    figcaption {
      right: 45px;
      top: 50px;

      p {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 280px) {
    figcaption {
      top: 42px !important;
    }
  }
`;

export const CardFrontFigure = styled.figure`
  order: 1;
  position: relative;
  top: 100px;

  img {
    width: 90%;
    display: block;
    margin-left: 120px;
  }

  figcaption {
    color: var(--White);
    position: absolute;
    bottom: 20px;
    left: 140px;
    width: 80%;

    p {
      &:first-child {
        margin-bottom: 12px;
        font-size: 19px;
        letter-spacing: 5px;
      }

      &:last-child {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 140px;

    p + p {
      margin-left: 8px;
    }

    p {
      &:first-child {
        background-color: var(--White);
        padding: 12px;
        border-radius: 50%;
      }

      &:last-child {
        border: 1px solid var(--White);
        border-radius: 50%;
        width: 17px;
        height: 17px;
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    top: 125px;

    figcaption {
      p {
        &:first-child {
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    position: absolute;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    top: 170px;

    img {
      width: 55%;
      margin-left: 40px;
      box-shadow: 0 10px 70px var(--Very-dark-violet);
      border-radius: 8px;
    }

    div {
      left: 80px;
    }

    figcaption {
      left: 80px;
      bottom: 40px;
      width: 45%;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    img {
      box-shadow: 0 10px 70px var(--Very-dark-violet);
      border-radius: 10px;
      margin-left: 0;
    }

    div {
      position: absolute;
      top: 20px;
      left: 20px;
    }

    figcaption {
      position: absolute;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    top: 160px;

    img {
      width: 70%;
      margin-left: 30px;
    }

    div {
      left: 50px;
    }

    figcaption {
      bottom: 40px;
      left: 50px;
      width: 62%;

      p {
        &:first-child {
          margin-bottom: 12px;
          font-size: 22px;
        }

        &:last-child {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 599px) {
    top: 114px;

    img {
      width: 70%;
      margin-left: 22px;
    }

    div {
      left: 40px;
    }

    figcaption {
      bottom: 20px;
      left: 40px;
      width: 60%;

      p {
        &:first-child {
          margin-bottom: 12px;
          font-size: 18px;
          letter-spacing: 0;
        }
        &:last-child {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    top: 104px;

    img {
      width: 70%;
      margin-left: 20px;
    }

    div {
      left: 40px;
    }

    figcaption {
      position: absolute;
      bottom: 20px;
      left: 40px;
      width: 60%;

      p {
        &:first-child {
          margin-bottom: 12px;
          font-size: 16px;
          letter-spacing: 2px;
        }

        &:last-child {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    top: 84px;

    img {
      width: 65%;
      margin-left: 20px;
    }

    div {
      left: 35px;

      p {
        &:first-child {
          padding: 8px;
        }
        &:last-child {
          width: 13px;
          height: 13px;
        }
      }
    }

    figcaption {
      right: 45px;
      left: 35px;
      bottom: 20px;
      width: 55%;

      p {
        &:first-child {
          font-size: 13.5px;
          margin-bottom: 5px;
          letter-spacing: 0;
        }
        &:last-child {
          font-size: 12px;
        }
      }
    }
  }
`;

// ========================= component form
export const FormContainer = styled.form`
  margin: 0 auto;
  width: 25%;

  div + div {
    margin-top: 30px;
  }

  div {
    label {
      text-transform: uppercase;
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: 500;
      color: var(--Very-dark-violet);
    }

    input {
      padding: 8px 0 8px 15px;
      border-radius: 5px;
      border: 1px solid var(--Light-grayish-violet);
      outline: hsl(278, 94%, 30%);
      color: var(--Very-dark-violet);

      &:hover {
        border: 1px solid hsl(278, 94%, 30%);
      }

      &::placeholder {
        color: var(--Light-grayish-violet);
      }
    }

    p {
      color: var(--Red);
      font-size: 10px;
      margin-top: 5px;
      display: none;
    }
  }

  .form__item {
    display: flex;
    flex-direction: column;
  }

  .form__additional {
    display: flex;
    flex-direction: column;
    width: 100%;

    .form__labels {
      display: flex;
      justify-content: space-between;

      label {
        display: block;
        width: 45%;
        text-align: left;

        &:last-child {
          width: 55%;
        }
      }
    }

    .form__inputs {
      display: flex;
      position: relative;
      top: -30px;

      .colorDefault {
        color: var(--Light-grayish-violet);
      }

      .colorChecked {
        color: black;
      }

      input + input {
        margin-left: 10px;
      }

      input {
        width: 30%;

        &:last-child {
          margin-left: 20px;
          width: 100%;
        }
      }
    }

    .additional__validation {
      position: relative;
      top: -30px;
      display: flex;
      justify-content: space-between;
      margin-top: 0;

      p {
        &:first-child {
          width: 45%;
        }

        &:last-child {
          width: 55%;
        }
      }
    }
  }

  button {
    background-color: var(--Very-dark-violet);
    color: var(--White);
    padding: 10px;
    width: 100%;
    border-radius: 5px;
  }

  @media screen and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 150px;
    width: 60%;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    margin-top: 150px;
  }

  @media screen and (min-width: 413px) and (max-width: 480px) {
    margin-top: 120px;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 321px) and (max-width: 376px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 320px) {
    margin-top: 50px;
  }
`;

// ========================= component completed
export const cardComplete = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-75%, -50%);
  display: none;

  img {
    display: block;
    margin: 0 auto;
  }

  figcaption {
    h1 {
      text-transform: uppercase;
      color: var(--Very-dark-violet);
      font-weight: 500;
      font-size: 24px;
      margin: 30px 0 10px 0;
    }

    p {
      color: var(--Dark-grayish-violet);
      margin-bottom: 40px;
      font-size: 16px;
    }

    button {
      background-color: var(--Very-dark-violet);
      color: var(--White);
      padding: 10px;
      width: 100%;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 992px) {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    figcaption {
      button {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    top: 340px;
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    top: 330px;
  }

  @media screen and (max-width: 320px) {
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 30px;
  }
`;
