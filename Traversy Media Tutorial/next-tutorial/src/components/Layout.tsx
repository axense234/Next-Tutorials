import React, { ReactNode } from "react";
// Styles
import styles from "../styles/Layout.module.css";
// Components
import Navbar from "./Navbar";
import Header from "./Header";
import Meta from "./Meta";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
