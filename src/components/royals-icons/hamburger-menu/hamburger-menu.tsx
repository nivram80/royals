import { Component } from '@stencil/core';

@Component({
  tag: 'hamburger-menu',
  styleUrl: 'hamburger-menu.scss'
})
export class HamburgerMenu {
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>th-menu-outline</title>
        <path
          fill="#fff"
          d="M19 18c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14M19 16h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"
        />
        <path
          fill="#fff"
          d="M19 11c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14M19 9h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"
        />
        <path
          fill="#fff"
          d="M19 4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1s0.45-1 1-1h14M19 2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"
        />
      </svg>
    );
  }
}
