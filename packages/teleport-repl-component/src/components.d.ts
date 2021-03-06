/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TeleportUidlRepl {
    'dark': boolean;
    'uidl': string;
  }
}

declare global {


  interface HTMLTeleportUidlReplElement extends Components.TeleportUidlRepl, HTMLStencilElement {}
  var HTMLTeleportUidlReplElement: {
    prototype: HTMLTeleportUidlReplElement;
    new (): HTMLTeleportUidlReplElement;
  };
  interface HTMLElementTagNameMap {
    'teleport-uidl-repl': HTMLTeleportUidlReplElement;
  }
}

declare namespace LocalJSX {
  interface TeleportUidlRepl {
    'dark'?: boolean;
    'uidl'?: string;
  }

  interface IntrinsicElements {
    'teleport-uidl-repl': TeleportUidlRepl;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'teleport-uidl-repl': LocalJSX.TeleportUidlRepl & JSXBase.HTMLAttributes<HTMLTeleportUidlReplElement>;
    }
  }
}


