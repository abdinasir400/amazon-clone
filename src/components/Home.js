import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/715x0Lw14XL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234567"
            title="the lean startup"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
          />
          <Product
            id="1234567"
            title="the lean startup"
            price={129.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81lCADK3xxL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567"
            title="the lean startup"
            price={1.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41nqKWl0AtL._SX323_BO1,204,203,200_.jpg"
          />
          <Product
            id="1234567"
            title="the lean startup"
            price={129.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71IimuR2GhL._AC_SX679_.jpg"
          />
          <Product
            id="1234567"
            title="the lean startup"
            price={142.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81j8GtY14rL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567"
            title="the lean startup"
            price={1248.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/711FevV+2sL._AC_SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
