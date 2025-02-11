declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    import React from 'react';
    const ReactComponent: string;
    export default ReactComponent;
}
