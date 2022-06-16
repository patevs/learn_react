import React from 'react';
import { createRoot } from 'react-dom/client';

import Jumbo from './Jumbo';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  const containerJumbo = document.getElementById('jumbo');
  const rootJumbo = createRoot(containerJumbo); // createRoot(container!) if you use TypeScript
  rootJumbo.render(<Jumbo tab="jumbo" />);
  // ReactDOM.render(<Jumbo />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
