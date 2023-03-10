import React, { useEffect, useState } from 'react';
import CocktailList from './components/CockTailList';

function CocktailFeature() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setCocktailList(data.drinks))
      .catch((err) => console.error(err));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="cocktail-feature">
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}
      >
        COCKTAIL FEATURE
      </h2>
      <CocktailList list={cocktailList} />
    </div>
  );
}

export default CocktailFeature;
