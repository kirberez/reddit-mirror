import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Post } from "./shared/Post";
import { store } from "./store/store";
// import { thunkSaveToken } from "./store/token/actions";

function AppComponent() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    // store.dispatch(thunkSaveToken());
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

function AppRouter() {
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="auth" element={<Navigate to="/posts" replace />} />
          <Route path="404" element={<h1>404 Not Found.</h1>} />
          <Route path="posts" element={<CardsList />}>
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
