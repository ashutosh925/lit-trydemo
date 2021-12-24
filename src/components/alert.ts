import { LitElement, html, customElement, property } from "lit-element";

@customElement("action-button")
export class ActionButton extends LitElement {
  @property({ type: String }) foo: string;

  render() {
    return html` <span>Im an alert</span> `;
  }
}
