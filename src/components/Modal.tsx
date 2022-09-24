import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  return (
    <BackgroundDiv>
      <ModalBody>
        <h1>Obrigado pela compra</h1>
        <p>Compra realizada com sucesso</p>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Ir para loja
        </Button>
      </ModalBody>
    </BackgroundDiv>
  );
};

const BackgroundDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30%;
`;

const ModalBody = styled.div`
  max-width: 400px;
  width: 100%;
  max-height: 250px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  h1 {
    font-weight: 400;
    font-size: 30px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
  }
`;

const Button = styled.button`
  max-height: 40px;
  max-width: 300px;
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
`;

export default Modal;
