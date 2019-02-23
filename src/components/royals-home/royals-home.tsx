import { Component } from '@stencil/core';

@Component({
  tag: 'royals-home',
  styleUrl: 'royals-home.scss',
  shadow: true
})
export class RoyalsHome {
  render() {
    return (
      <div>
        <stencil-route-link url="/roster">
          <royals-button title="Roster" type="primary" />
        </stencil-route-link>
      </div>
    );
  }
}
