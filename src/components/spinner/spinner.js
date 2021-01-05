import React from "react";
import './spinner.css';

const SpinnerPage = () => {
  return (
    <>
      <div className="spinner-border spin" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      
    </>
  );
}

export default SpinnerPage;