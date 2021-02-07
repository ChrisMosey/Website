import React, { useState, useEffect, ReactElement } from 'react';
import { ApiUrl } from "../../config";

async function GetAppData() {
  const res = await fetch(ApiUrl());
  const results = await res.json();

  return results
}

function Render() {
  const [elements, setElements] = useState<string[]>([]);

  const renderedElements: ReactElement[] = [];

    elements.forEach((element) => {
        renderedElements.push((<span key={element} style={{fontSize:  "50px"}}>{element}</span>))
    });

  useEffect(() => {
    (async () => {
      const elementResults = await GetAppData();
      setElements(elementResults);
    })()
  }, []);

  return (
    <div className="HomePage">
     {renderedElements}
    </div>
  );
}

export default Render;
