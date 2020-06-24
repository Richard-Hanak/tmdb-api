import React from "react";

function ButtonNext({ setPage, show2ndHalf, setShow2ndHalf }) {

  const handleClickNext = () => {
    if (show2ndHalf === true) {
      return setShow2ndHalf(false), setPage((prevpage) => prevpage + 1);
    } else {
      setShow2ndHalf(true);
    }
  };

  return <button onClick={handleClickNext}>KLIK</button>;
}

export default ButtonNext;
