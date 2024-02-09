import React from "react";

const Links = () => {
  const sidebarItems = ["Home", "Services", "Contact", "Portfolio", "About"];
  return (
    <div className="Links">
      {sidebarItems.map((item, index) => {
        return (
          <a key={item} href="#">
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
