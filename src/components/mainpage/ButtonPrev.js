import React from "react";

function ButtonPrev({ page, setPage, show2ndHalf, setShow2ndHalf }) {

  const handleClickPrev = () => {
    if (show2ndHalf === false) {
      return (setPage((prevpage) => prevpage - 1), setShow2ndHalf(true))
    } else {
      setShow2ndHalf(false);
    }
  };

  return <button onClick={page === 1 ? () => setShow2ndHalf(false): handleClickPrev}>KLIK</button>;
}

export default ButtonPrev;
