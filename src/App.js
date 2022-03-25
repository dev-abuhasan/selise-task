import './App.scss';
import LoadingSuspense from "./components/Reuseable/Loading/LoadingSuspense";
import { ToastNotify } from "./components/Reuseable/ToastNotify/ToastNotify";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Authors from "./components/pages/authors/authors";
import FavoriteAuthors from "./components/pages/favorite-authors/favorite-authors";
import SideNav from "./components/Layouts/SideNav";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <LoadingSuspense>
        <Container>
          <Row>
            <Col lg={12} xl={2} id="sidebar_wrapper">
              <SideNav />
            </Col>
            <Col lg={12} xl={10} id="page_content_wrapper">
              <Routes>
                <Route path="/" element={<Authors />} />
                <Route path="/favorite-authors" element={<FavoriteAuthors />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <ToastNotify />
      </LoadingSuspense>
    </BrowserRouter >
  );
}

export default App;
