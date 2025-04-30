import React from "react";
import "./Blog.css";
import { blogData } from "../../utils/data";
import Card2 from "./Card2";

const Blog = () => {
  return (
    <>
      <section className="card-deck">
        <div className="head4">
          {" "}
          <h3>Tech Articles</h3>
        </div>
        <div className="card-conti">
          {blogData.map((val) => {
            return <Card2 val={val} key={val.id} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Blog;
