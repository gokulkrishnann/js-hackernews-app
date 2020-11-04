import React from "react";
import { useAppContext } from "../context/context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useAppContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
