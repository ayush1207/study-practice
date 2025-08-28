import { useState } from "react";

const Accordian = () => {
  const [show, setShow] = useState(0);
  return (
    <div className="accordianContainer">
      <div className="accordian">
        <div onClick={() => setShow(show === 1 ? 0 : 1)}
          className="accordianHeader">
          <p>Toggle accordian</p>
          <span></span>
        </div>
        {show === 1 && (
          <div className="accordianContent">
            <p>accordian Component</p>
            <p>data to be shown bu the componetn</p>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Accordian;
