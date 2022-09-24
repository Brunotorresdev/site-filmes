import Router from "./routes/Router";
import GlobalStyle from "../src/styles/globalStyles";
import { CartProvider } from "./context/CartContext";
const App = (): JSX.Element => {
  return (
    <CartProvider>
      <GlobalStyle />
      <Router />
    </CartProvider>
  );
};

export default App;
