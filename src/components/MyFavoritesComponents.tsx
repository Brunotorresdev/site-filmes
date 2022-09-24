import styled from "styled-components";
import ImgLixeira from "../assets/lixo.png";
import ImgCarrinho from "../assets/carrinho-verde.png";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const MyFavoritesComponents = ({ dataFav }: any) => {
  return (
    <MyCar>
      <HeaderCar>
        <p>Meus Favoritos</p>
        <a href="">Esvaziar</a>
      </HeaderCar>
      <ItemCarContainer>
        {dataFav.map((item: any) => (
          <ItemCar>
            <img
              src={`https://image.tmdb.org/t/p/original${item.image}`}
              alt=""
            />
            <NameFilm>{item.title}</NameFilm>
            <p>R$ 9,99</p>
            <ImgLixo src={ImgCarrinho} />
            <ImgLixo src={ImgLixeira} />
          </ItemCar>
        ))}
      </ItemCarContainer>
    </MyCar>
  );
};
export default MyFavoritesComponents;

const MyCar = styled.div`
  width: 300px;
  height: calc(100% - 101px);
  position: absolute;
  right: 0;
  border: 2px solid #c6d1db;
  display: flex;
  flex-direction: column;
  padding: 20px 8px;
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

const NameFilm = styled.p`
  max-width: 80px !important;
`;
