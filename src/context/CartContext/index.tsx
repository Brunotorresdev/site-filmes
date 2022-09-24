import { createContext, useState } from "react";

export const CartContext = createContext({});

type Data = {
  name: string;
  image: string;
  value: number;
  amount?: string;
  id?: number;
};

export const CartProvider = ({ children }: any) => {
  const [data, setData] = useState<Data[]>([
    {
      name: "",
      image: "",
      value: 0,
      amount: "1",
      id: 0,
    },
  ]);

  const [fav, setFav] = useState<Data[]>([
    {
      name: "",
      image: "",
      value: 0,
      id: 0,
    },
  ]);

  const [favIsChecked, setFavIsChecked] = useState<boolean>(false);

  const [carIsChecked, setCarIsChecked] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        fav,
        setFav,
        favIsChecked,
        setFavIsChecked,
        carIsChecked,
        setCarIsChecked,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
