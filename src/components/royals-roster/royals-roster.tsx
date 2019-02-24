import { Component, State } from '@stencil/core';
import { royalsFortyMan } from '../../royals-forty-man';

// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// const BASE_URL = `http://lookup-service-prod.mlb.com/json/`;
// const FORTY_MAN_URL = `named.roster_40.bam`;

@Component({
  tag: 'royals-roster',
  styleUrl: 'royals-roster.scss',
  shadow: true
})
export class RoyalsRoster {
  @State() players: Array<any>;
  @State() catchers = [];
  @State() pitchers = [];
  @State() infielders = [];
  @State() outfielders = [];

  componentWillLoad() {
    return this.sortPlayersByPosition(
      royalsFortyMan.roster_40.queryResults.row
    );
    // return fetch(`${PROXY_URL}${BASE_URL}${FORTY_MAN_URL}?team_id=118`)
    //   .then((response: Response) => response.json())
    //   .then(response => {
    //     this.players = response.roster_40.queryResults.row;
    //   });
  }

  componentDidUnload() {
    this.catchers = [];
    this.pitchers = [];
    this.infielders = [];
    this.outfielders = [];
  }

  sortPlayersByPosition(players) {
    players.forEach(player => {
      switch (player.position_txt) {
        case 'C':
          this.catchers.push(player);
          break;
        case 'P':
          this.pitchers.push(player);
          break;
        case '1B':
        case '2B':
        case '3B':
        case 'SS':
          this.infielders.push(player);
          break;
        case 'RF':
        case 'CF':
        case 'LF':
          this.outfielders.push(player);
          break;
        default:
          console.log('No position defined.');
      }
    });
  }

  render() {
    return (
      <div class="players">
        <div class="catchers">
          <h2>Catchers</h2>
          {this.catchers.map(player => {
            return <royals-player player={player} />;
          })}
        </div>

        <div class="infielders">
          <h2>Infielders</h2>
          {this.infielders.map(player => {
            return <royals-player player={player} />;
          })}
        </div>

        <div class="outfielders">
          <h2>Outfielders</h2>
          {this.outfielders.map(player => {
            return <royals-player player={player} />;
          })}
        </div>

        <div class="pitchers">
          <h2>Pitchers</h2>
          {this.pitchers.map(player => {
            return <royals-player player={player} />;
          })}
        </div>
      </div>
    );
  }
}
