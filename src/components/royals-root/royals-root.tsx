import { Component, State, Listen } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'royals-root',
  styleUrl: 'royals-root.scss',
  shadow: true
})
export class RoyalsRoot {
  @State() showNav: boolean = false;

  @Listen('toggleMenu')
  toggleNav() {
    this.showNav = !this.showNav;
  }

  render() {
    const mainContainerClasses = this.showNav
      ? 'main-container show-nav'
      : 'main-container';
    return (
      <div>
        <header>
          <hamburger-menu />
          <kc-logo />
          <mlb-logo />
        </header>

        <section class={mainContainerClasses}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Roster</li>
            </ul>
          </nav>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="royals-home" exact={true} />
                <stencil-route url="/roster" component="royals-roster" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </section>
      </div>
    );
  }
}
