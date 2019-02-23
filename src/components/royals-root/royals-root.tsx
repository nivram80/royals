import { Component } from '@stencil/core';

@Component({
  tag: 'royals-root',
  styleUrl: 'royals-root.scss',
  shadow: true
})
export class RoyalsRoot {
  render() {
    return (
      <div>
        <header>
          <hamburger-menu />
          <kc-logo />
          <mlb-logo />
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="royals-home" exact={true} />
              <stencil-route url="/roster" component="royals-roster" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
