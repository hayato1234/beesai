import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <Provider store={store}>
      <Header />
      <div>{children}</div>
      <Footer />
    </Provider>
  );
};

export default Layout;
