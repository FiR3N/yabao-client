import { useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { UserActions } from "./hooks/useActions";
import AppRouter from "./router/AppRouter";

function App() {
  const { checkIsAuth } = UserActions();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkIsAuth();
    }
  }, []);
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
