import React from "react";

function Container({ children, ...props }) {
  return (
    <div
      className="scroll-mt-12 w-full flex flex-col items-center max-md:scroll-mt-16"
      {...props}
    >{children}</div>
  );
}

export default Container;
