import styled from "styled-components";
import HeaderComponent from "../components/HeaderComponent";
import ImgLixeira from "../assets/lixo.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Modal from "../components/Modal";
import { Formik, useFormik } from "formik";
import { isValidPhoneNumber } from "react-phone-number-input";
import * as yup from "yup";

interface Values {
  cpf: string;
  cep: string;
  address: string;
  name: string;
  email: string;
  phone_number: string;
}

const Checkout = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { data }: any = useContext(CartContext);
  const [initialValues, setInitialValues] = useState<Values>({
    cpf: "",
    name: "",
    email: "",
    phone_number: "",
    address: "",
    cep: "",
  });

  const FormSchema = yup.object().shape({
    cpf: yup
      .string()
      .min(11, "O CPF deve ter 11 dígitos")
      .max(11, "O CPF deve ter 11 dígitos"),
    name: yup
      .string()
      .required("O nome é obrigatório")
      .min(3, "O nome deve ter no mínimo 3 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres"),
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("O email deve ser válido"),
    phone_number: yup
      .string()
      .required("O telefone é obrigatório")
      .test(
        "validate-phone",
        "Número de telefone inválido! ",
        function (value?: string) {
          if (!value) return false;
          return (
            value?.replace(/[^\d]/g, "").length > 9 &&
            isValidPhoneNumber("+55" + (value ?? ""))
          );
        }
      ),
  });

  const formikObject = useFormik({
    onSubmit: () => {},
    initialValues,
  });

  const handleSubmit = (values: Values) => {};

  return (
    <>
      <HeaderComponent />
      <Formik
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
        //@ts-ignore
        initialValues={initialValues}
        isInitialValid={false}
      >
        <Main>
          <FormContainer>
            <h1>Finalizar Compra</h1>
            <Input placeholder="Nome Completo" type="text" name="name" />
            <DivInput>
              <div>
                <Input placeholder="CPF" name="cpf" />
              </div>
              <div>
                <Input placeholder="Celular" type="tel" name="phone_number" />
              </div>
            </DivInput>
            <Input placeholder="E-mail" type="email" name="email" />
            <DivInput>
              <div>
                <Input placeholder="CEP" name="cep" />
              </div>
              <InputAdress>
                <Input placeholder="Endereço" name="address" />
              </InputAdress>
            </DivInput>
            <DivInput>
              <div>
                <Input placeholder="Cidade" />
              </div>
              <div>
                <Input placeholder="Estado" />
              </div>
            </DivInput>
          </FormContainer>
          <FormInfos>
            <ItemCarContainer>
              {data[0].title !== "" &&
                data.map((item: any) => (
                  <ItemCar>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.image}`}
                      alt=""
                    />
                    <p>{item.title}</p>
                    <p>1</p>
                    <p>{item.value}</p>
                    <ImgLixo src={ImgLixeira} />
                  </ItemCar>
                ))}

              <ItemCarBottom>
                <div>
                  <p>Total:</p>
                  <h2>
                    {data[0].title !== ""
                      ? `R$ ${data.length * 20},00`
                      : `R$ 00,00`}
                  </h2>
                </div>
                <input
                  value={"Finalizar compra"}
                  onClick={() => setIsModalVisible(true)}
                />

                {isModalVisible && <Modal />}
              </ItemCarBottom>
            </ItemCarContainer>
          </FormInfos>
        </Main>
      </Formik>
    </>
  );
};
export default Checkout;

const Main = styled.form`
  padding-top: 50px;
  display: flex;
  margin: auto;
  max-width: 900px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  h1 {
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  outline: none;
  border: 1px solid #d3dae0;
  padding: 15px;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
    color: #c6d1db;
  }
`;

const DivInput = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  div {
    flex: 1;
  }
`;

const FormInfos = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputAdress = styled.div`
  flex: 2 !important;
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
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #9eadba;
  p {
    font-size: 14px;
  }

  img {
    cursor: pointer;
    width: 70px;
    height: 70px;
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
  input {
    width: 100%;
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
