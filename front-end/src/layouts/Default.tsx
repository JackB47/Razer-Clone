import * as React from "react";
import { Footer, Header } from "../components/layout";
import "./styles.css";

export default function ({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
