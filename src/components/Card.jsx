import { useEffect, useState } from "react";

export const Card = () => {
  const aliaclick = () => {
    setStatus(!status);
  };
  const [status, setStatus] = useState();
  const [advice, setAdvice] = useState();

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAdvice(data);
      });
    console.log("hello");
  };

  useEffect(() => {
    fetchAdvice();
  }, [status]);
  return (
    <>
      <h1>{advice?.slip?.advice}</h1>
      <button onClick={aliaclick}>clicked</button>
    </>
  );
};
