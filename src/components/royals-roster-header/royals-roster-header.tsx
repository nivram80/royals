import { Component } from '@stencil/core';

@Component({
  tag: 'royals-roster-header',
  styleUrl: 'royals-roster-header.scss',
  shadow: true
})
export class RoyalsRosterHeader {
  render() {
    return (
      <header>
        <div class="left-header">
          <div class="jersey-number">#</div>
          <div class="full-name">Name</div>
        </div>
        <div class="right-header">
          <div class="college">College</div>
          <div class="height">Height</div>
          <div class="weight">Weight</div>
          <div class="bats-throws">B/T</div>
          <div class="age">Age</div>
        </div>
      </header>
    );
  }
}
