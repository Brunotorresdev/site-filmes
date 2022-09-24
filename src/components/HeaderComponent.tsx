import styled from "styled-components";
import ImgLupa from "../assets/lupa.png";
import ImgCoracao from "../assets/coracao.png";
import ImgCoracaoRed from "../assets/coracao-red.png";
import ImgCarrinho from "../assets/carrinho.png";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const HeaderComponent = () => {
  const [busca, setBusca] = useState("");

  const {
    favIsChecked,
    setFavIsChecked,
    carIsChecked,
    setCarIsChecked,
    data,
  }: any = useContext(CartContext);

  const handleSetCar = () => {
    setFavIsChecked(false);
    setCarIsChecked(!carIsChecked);
  };

  const handleSetFav = () => {
    setCarIsChecked(false);
    setFavIsChecked(!favIsChecked);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <ContainerPoints>
            <Point />
            <Point />
            <Point />
          </ContainerPoints>
        </HeaderTop>
        <HeaderBottom>
          <p>LOGO</p>
          <InputArea>
            <input
              onChange={(e) => setBusca(e.target.value)}
              value={busca}
              placeholder="Pesquisar"
              type="text"
              name=""
              id=""
            />
            <img src={ImgLupa} alt="" />
          </InputArea>
          <RightSideHeaderBottom>
            <img
              src={favIsChecked ? ImgCoracaoRed : ImgCoracao}
              onClick={handleSetFav}
              alt=""
            />
            <img src={ImgCarrinho} onClick={handleSetCar} alt="" />
            <div>{data.length}</div>
          </RightSideHeaderBottom>
        </HeaderBottom>
      </Header>
    </>
  );
};
export default HeaderComponent;

const Header = styled.div``;
const HeaderTop = styled.div`
  height: 40px;
  width: 100%;
  background-color: #9eadba;
  display: flex;
  align-items: center;
`;
const HeaderBottom = styled.div`
  height: 60px;
  width: 100%;
  background-color: #8dd7cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-left: 40px;
  }
`;
const ContainerPoints = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
const Point = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #8f9eac;
  margin-right: 5px;
`;
const InputArea = styled.div`
  max-width: 400px;
  width: 100%;
  input {
    height: 40px;
    width: 100%;
    outline: none;
    ::placeholder {
      font-size: 20px;
      color: #c6d1db;
      padding-left: 20px;
    }
  }
  img {
    width: 25px;
    position: absolute;
    margin-top: 8px;
    margin-left: -35px;
    cursor: pointer;
  }
`;

const RightSideHeaderBottom = styled.div`
  margin-right: 40px;
  max-width: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }

  div {
    position: absolute;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: #fbe192;
    margin-top: -13px;
    margin-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
