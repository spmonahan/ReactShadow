import React from 'react';
import { createDOMRenderer, RendererProvider } from '@griffel/react';
import { createProxy } from '../';

export default createProxy({}, 'emotion', ({ root, children }) => {
    
    const renderer = createDOMRenderer({ target: root });

    return <RendererProvider renderer={renderer}>{children}</RendererProvider>;
});
