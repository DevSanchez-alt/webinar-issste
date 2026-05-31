import React from 'react';
import { SlideEngine } from './components/SlideEngine';

import { Slide01, Slide02, Slide03, Slide04, Slide05 } from './slides/SlidesPart1';
import { Slide06, Slide07, Slide08, Slide09, Slide10 } from './slides/SlidesPart2';
import { Slide11, Slide12, Slide13, Slide14, Slide14B, Slide15, Slide16 } from './slides/SlidesPart3';

function App() {
  const slides = [
    Slide01, Slide02, Slide03, Slide04, Slide05,
    Slide06, Slide07, Slide08, Slide09, Slide10,
    Slide11, Slide12, Slide13, Slide14, Slide14B, Slide16, Slide15
  ];

  return (
    <SlideEngine slides={slides} />
  );
}

export default App;
