//Demo for functional based componemts

import React, { useEffect, useState } from "react";

const FunctionalComponent = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(100);

  //for example: ipo page ku vantha odane some API call make pannanum for datas load pandrathuku na, intha useEffect pandrom.
  const getData = () => {
    console.log("Data received ");
  };

  //intha function epo call aganum na, orey oru vati en webpage 1st tym load agumbothu matum.
  useEffect(() => {
    getData();
  }, []);
  //intha useEffect vanthu 1st tym matum cl aaganum. next ethana tym antha buttons ah click panalum intha useEffect cl agathu because of that empty array.

  useEffect(() => {
    console.log("First value Changed");
  }, [first]);
  //ipdi pandra apa,initial ah one tym antha first value changed apdindrathu call aganum. and then, epa epalam antha  Add First nndra btn ah click pandromo apa matum call aganum.

  return (
    <div>
      <h3>This is function based component.</h3>
      <h1>First: {first}</h1>
      <h1>Second: {second}</h1>
      <button onClick={() => setFirst((curr) => curr + 1)}>Add First</button>
      <button onClick={() => setSecond((curr) => curr + 1)}>Add Second</button>
    </div>
  );
};

export default FunctionalComponent;
