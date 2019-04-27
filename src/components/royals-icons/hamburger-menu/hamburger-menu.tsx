import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hamburger-menu',
  styleUrl: 'hamburger-menu.scss'
})
export class HamburgerMenu {
  @Event() toggleMenu: EventEmitter;

  toggleClick = () => {
    this.toggleMenu.emit();
  };

  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 20 20"
        onClick={this.toggleClick}
      >
        <title>menu</title>
        <path
          fill="#fff"
          d="M16.4 9h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 13h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM3.6 7h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1z"
        />
      </svg>
    );
  }
}
