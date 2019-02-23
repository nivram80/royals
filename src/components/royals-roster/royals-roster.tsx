import { Component, State } from '@stencil/core';
import { royals } from '../../royals';

// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// const BASE_URL = 'http://api.sportradar.us/mlb/trial/v6.5/en/';
// const API_KEY = 'yw5ncmwh94mndt6u4wryxfzf';
// const ROYALS_TEAM_ID = '833a51a9-0d84-410f-bd77-da08c3e5e26e';

@Component({
  tag: 'royals-roster',
  styleUrl: 'royals-roster.scss',
  shadow: true
})
export class RoyalsRoster {
  @State() players: Array<any>;

  componentWillLoad() {
    this.players = royals.players;
    // fetch(
    //   `${PROXY_URL}${BASE_URL}teams/${ROYALS_TEAM_ID}/profile.json?api_key=${API_KEY}`
    // )
    //   .then((response: Response) => response.json())
    //   .then(response => {
    //     this.players = response.players;
    //   });
  }

  render() {
    return this.players.map(player => {
      return <div>{player.full_name}</div>;
    });
  }
}
