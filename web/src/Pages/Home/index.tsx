import React, { useState, useEffect } from 'react';

async function GetAppData() {
  const res = await fetch("http://localhost/home");
  const results = await res.json();

  return results
}

function Render() {
  const [elements, setElements] = useState("elements");

  useEffect(() => {
    async () => {
      const elementResults = await GetAppData();
      setElements(elementResults);
    }
  })

  return (
    <div className="HomePage">
     <p>{JSON.stringify(elements)}</p>
    </div>
  );
}

export default Render;
