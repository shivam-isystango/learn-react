import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header showModal={props.showModal} />
      <main className="mt-4">
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
