import { useEffect, useState } from "react";
import styled from "styled-components";
import ImgLixeira from "../assets/lixo.png";
import { useNavigate } from "react-router-dom";

const MyCarComponent = ({ dataCart }: any) => {
  const navigate = useNavigate();

  return (
    <MyCar>
      <div>
        <HeaderCar>
          <p>Meu Carrinho</p>
          <a href="">Esvaziar</a>
        </HeaderCar>
        <ItemCarContainer>
          {dataCart &&
            dataCart.map((item: any) => (
              <ItemCar>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.image}`}
                  alt=""
                />
                <NameFilm>{item.title}</NameFilm>
                <p>{item.amount}</p>
                <p>{`R$ ${item.value},00`}</p>
                <ImgLixo src={ImgLixeira} />
              </ItemCar>
            ))}
        </ItemCarContainer>
      </div>
      <ItemCarBottom>
        <div>
          <p>Total:</p>
          {/* {dataCart.map((item: any) => (
            <h2>{`R$ ${item.value},00`}</h2>
          ))} */}
        </div>
        <button
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Finalizar compra
        </button>
      </ItemCarBottom>
    </MyCar>
  );
};

export default MyCarComponent;

const MyCar = styled.div`
  width: 300px;
  height: calc(100% - 101px);
  position: absolute;
  right: 0;
  border: 2px solid #c6d1db;
  display: flex;
  flex-direction: column;
  padding: 20px 8px;
  justify-content: space-between;
  background-color: #fff;
`;

const HeaderCar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemCarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ItemCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  p {
    font-size: 14px;
  }
  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;

const ImgLixo = styled.img`
  width: 20px !important;
  height: 20px !important;
`;

const ItemCarBottom = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  button {
    width: 260px;
    outline: none;
    border: none;
    color: white;
    text-align: center;
    font-size: 16px;
    padding: 7px 0;
    background-color: #6558f5;
    border-radius: 3px;
    cursor: pointer;

    :hover {
      background-color: #6c5ff1;
    }
  }
`;

const NameFilm = styled.p`
  max-width: 80px !important;
`;
