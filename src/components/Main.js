import Card from "./Card";

import { UseMainHooks } from "../hooks/useMainHooks";
import { Row, Col } from "react-bootstrap";
const Main = () => {
  const [search, setSearch, bookData, setData, searchBook] = UseMainHooks();
  return (
    <>
      <Row className="header ">
        <Col xs="1" sm="2" md="4" lg="3" className="row1 ml-0">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </Col>
        <Col xs="1" sm="2" md="4" lg="3" className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </Col>
      </Row>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
export default Main;
