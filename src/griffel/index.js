import React from 'react';
import { createDOMRenderer, RendererProvider } from '@griffel/react';
import { createProxy } from '../';

export default createProxy({}, 'griffel', ({ root, children }) => {
    const renderer = createDOMRenderer(document, {
        styleTagTarget: root,
        constructableStylesheets: false,
    });

    return <RendererProvider renderer={renderer}>{children}</RendererProvider>;
});
