import React from "react";
import Layout from "../Component/Layout/Layout";
import { Link } from "react-router-dom";
import "../style/HomeStyle.css";



function Home() {
  return (
    <Layout> 
      <div
        className="home"
        style={{ backgroundImage: "url(/src/assets/images/banner.jpg)" }}
      >
        <div className="headerContainer">
          <Link to="./menu">
            <button>Order here</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
