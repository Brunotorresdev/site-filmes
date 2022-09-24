import styled from "styled-components";
import ImgCoracaoRed from "../assets/coracao-red.png";
import ImgCoracaoBlack from "../assets/coracao-black.png";
import ImgEstrela from "../assets/estrela.png";

type Filmes = {
  title: string;
  vote: number;
  date: string;
  image: string;
  value: number;
  id: number;
  setDataCart: any;
  amount?: number;
  setDataFav: any;
  dataCart: any;
};

const CardItemComponent = ({
  title,
  vote,
  date,
  image,
  value,
  id,
  setDataCart,
  amount,
  setDataFav,
  dataCart,
}: Filmes) => {
  const handleAddFav = () => {
    setDataFav((card: any) => [
      {
        amount: 1,
        title,
        vote,
        date,
        image,
        value,
        id,
      },
      ...card,
    ]);
  };

  const handleAddCart = () => {
    const cardExists = dataCart.filter((item: any) => {
      return item.id === id;
    });
    console.log(id);

    if (cardExists.length > 0) {
      setDataCart((prevState: any) => {
        return prevState.map((item: any, index: any) => {
          const isExists = cardExists.filter((film: any) => {
            return film.id === id;
          });
          if (isExists) {
            let handleAmount = Number(cardExists[0].amount) + 1;
            return {
              ...item,
              amount: handleAmount,
              value: value * handleAmount,
            };
          }
        });
      });
    } else {
      setDataCart((card: any) => [
        {
          amount: 1,
          title,
          vote,
          date,
          image,
          value,
          id,
        },
        ...card,
      ]);
    }
  };

  return (
    <CardItem>
      <ImgFilme src={`https://image.tmdb.org/t/p/original${image}`} />
      <DataFilme>{date}</DataFilme>
      <IconFavorite onClick={() => handleAddFav()} src={ImgCoracaoBlack} />
      <InfosFilme>
        <h3>{title}</h3>
        <div>
          <InfoFilmeStar>
            <img src={ImgEstrela} />
            <p>{vote.toString()}</p>
          </InfoFilmeStar>
        </div>
      </InfosFilme>
      <Value>{`R$${value},00`}</Value>
      <ButtonAdc onClick={() => handleAddCart()}>Adicionar</ButtonAdc>
    </CardItem>
  );
};
export default CardItemComponent;

const CardItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c6d1db;
`;

const ImgFilme = styled.img`
  width: 200px;
  height: 250px;
`;

const DataFilme = styled.p`
  position: absolute;
  margin-top: 215px;
  margin-left: 30px;
  color: #4c5966;
  font-weight: bold;
`;

const IconFavorite = styled.img`
  position: absolute;
  margin-left: 75px;
  margin-top: 8px;
`;

const InfosFilme = styled.div`
  margin-top: 12px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 7px;
    min-height: 32px;
    text-align: center;
  }
  p {
    margin: 0;
  }
  div {
    display: flex;
  }
`;

const InfoFilmeStar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 10px;
  p {
    font-weight: bold;
  }
  img {
    margin-right: 4px;
    width: 20px;
    height: 20px;
  }
`;

const Value = styled.p`
  margin-bottom: 8px;
`;

const ButtonAdc = styled.button`
  width: 200px;
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
`;
