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
        <div class="full-name">{this.player.name_display_last_first}</div>
        <div class="info">
          <div class="throws">{this.player.throws}</div>
          <div class="bats">{this.player.bats}</div>
        </div>
      </div>
    );
  }
}
