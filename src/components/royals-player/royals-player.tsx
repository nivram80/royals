import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'royals-player',
  styleUrl: 'royals-player.scss',
  shadow: true
})
export class RoyalsPlayer {
  @Prop() player;

  render() {
    return (
      <div class="player">
        <div class="back-of-jersey">
          <div class="number">{this.player.jersey_number}</div>
          <div class="full-name">{this.player.name_display_last_first}</div>
        </div>
        <div class="info">
          <div class="bats-throws">
            {this.player.bats}/{this.player.throws}
          </div>
        </div>
      </div>
    );
  }
}
