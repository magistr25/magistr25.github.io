import React from 'react';
import { createRoot } from 'react-dom/client';
import SwitchApp from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const root = createRoot(div);
    root.render(<SwitchApp />);
    root.unmount();

    document.body.removeChild(div);
});

