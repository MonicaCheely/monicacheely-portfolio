// react-scroll.d.ts
declare module 'react-scroll' {
  import * as React from 'react';

  export interface ScrollLinkProps extends React.HTMLProps<HTMLElement> {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    ignoreCancelEvents?: boolean;
    onClick?: () => void;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    containerId?: string;
    activeClass?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  export class Link extends React.Component<ScrollLinkProps> {}
  export class Element extends React.Component<{ name: string }> {}
  export function animateScroll(): any;
  export function scroller(): any;
}