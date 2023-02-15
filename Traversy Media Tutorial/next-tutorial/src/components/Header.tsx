import React from "react";
// Styles
import headerStyles from "../styles/Header.module.css";

const Header: React.FC = () => {
  const x = 5;

  return (
    <div>
      <h1>
        <span className={headerStyles.title}>Web Dev </span>
        News
      </h1>
      <p>Keep up to date with the latest web dev news.</p>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
