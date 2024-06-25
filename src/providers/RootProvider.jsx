import { Provider } from "react-redux";
import store from "@/redux/store";

const RootProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
