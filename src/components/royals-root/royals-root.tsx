import { Component } from '@stencil/core';


@Component({
  tag: 'royals-root',
  styleUrl: 'royals-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <hamburger-menu></hamburger-menu>
          <kc-logo></kc-logo>
          <mlb-logo></mlb-logo>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
