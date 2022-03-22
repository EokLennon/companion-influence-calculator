import React, { useState } from 'react';

import GiftCalculator from 'screens/GiftCalculator';
import GiftsPerRank from 'screens/GiftsPerRank';

const App = () => {
  const [active, setActive] = useState('calculator');

  return (
    <div className="app">
      {active === 'calculator' && <GiftCalculator />}
      {active === 'ranks' && <GiftsPerRank />}
    </div>
  );
}

export default App;
