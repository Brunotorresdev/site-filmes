import styled from "styled-components";
import HeaderComponent from "../components/HeaderComponent";
import CardItemComponent from "../components/CardItemComponent";
import MyFavoritesComponents from "../components/MyFavoritesComponents";
import { useContext, useEffect, useState } from "react";
import MyCarComponent from "../components/MyCarComponent";
import { CartContext } from "../context/CartContext";
import { api } from "../api";

type Filmes = {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  id: number;
  amount?: number;
};

const Home = () => {
  const [filmes, setFilmes] = useState<Filmes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataCart, setDataCart] = useState<Filmes[]>([]);
  const [dataFav, setDataFav] = useState<Filmes[]>([]);

  const { favIsChecked, carIsChecked, setData }: any = useContext(CartContext);

  useEffect(() => {
    listFilmes();
  }, []);

  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  const listFilmes = async () => {
    setLoading(true);

    const response = await api.getListFilmes();
    setLoading(false);
    setFilmes(response);
  };

  return (
    <>
      <HeaderComponent />
      <Main>
        <Container>
          {loading && (
            <Loading>
              <h1>Carregando Filmes...</h1>
            </Loading>
          )}

          {filmes &&
            filmes.map((item, index) => (
              <CardItemComponent
                title={item.title}
                vote={item.vote_average}
                date={item.release_date}
                image={item.poster_path}
                value={20}
                id={item.id}
                setDataCart={setDataCart}
                dataCart={dataCart}
                setDataFav={setDataFav}
              />
            ))}
        </Container>
        {favIsChecked && <MyFavoritesComponents dataFav={dataFav} />}
        {carIsChecked && <MyCarComponent dataCart={dataCart} />}
      </Main>
    </>
  );
};
export default Home;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const Loading = styled.div`
  position: absolute;
  margin-top: 400px;
  margin-left: 16%;
  h1 {
    font-size: 40px;
    color: #000;
  }
`;
