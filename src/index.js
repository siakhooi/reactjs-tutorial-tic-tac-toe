import React from 'react'
import './index.css'
import Game from './Game'

import { createRoot } from 'react-dom/client';
const root = createRoot(container);
root.render(<Game />, document.getElementById('root'));
