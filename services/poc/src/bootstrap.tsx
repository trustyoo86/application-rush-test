import Poc from './components/Poc';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root-remote');
const root = createRoot(container as HTMLElement);

root.render(<Poc />);
