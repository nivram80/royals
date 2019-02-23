import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'royals-button',
  styleUrl: 'royals-button.scss'
})
export class RoyalsButton {
  @Prop() title: string;
  @Prop() type: string;

  render() {
    return <button class={this.type}>{this.title}</button>;
  }
}
