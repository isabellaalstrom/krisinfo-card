customElements.whenDefined('card-tools').then(() => {
let cardTools = customElements.get('card-tools');
  
class KrisinfoCard extends cardTools.LitElement {
  
  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define entity');
    }
    this.config = config;
  }
  
  render(){
    return cardTools.LitHtml
    `
      ${this._renderStyle()}
      <ha-card>
        <div class="header">
          <div class="name">
            ${this.header}
          </div>
        </div>
      ${this.messages.length == 0 ? cardTools.LitHtml`<p>Inga meddelanden just nu</p>` : 
          cardTools.LitHtml(this.messages.map(message => `
              <div class="message">
                <span>${message.SenderName}</span>
                  </br><span>Skickat: ${message.Published}</span>
                  <h3>${message.Event == "Alert" ? cardTools.LitHtml`<ha-icon id="state-icon" icon="mdi:alert"></ha-icon>` : ''}${message.Headline}</h3>
                <p class="">${message.Message}</p>
                <a target="_blank" href="${message.Web}">Läs mer</a>
              </div>`))}
      </ha-card>
    `;
  }    

  _renderStyle() {
      return cardTools.LitHtml
      `
        <style>
          ha-card {
            padding: 16px;
          }
          .header {
            padding: 0;
            @apply --paper-font-headline;
            line-height: 40px;
            color: var(--primary-text-color);
            padding: 4px 0 12px;
          }
          .message {
            padding-bottom: 1em;
          }
          h3 {
            margin-top: 10px;
            margin-bottom: 0;
          }
          p {
            margin-top: 7px;
          }
          .card {
            padding: 1em;
            padding-top: 0;
          }
          .state {
            display: block;
            margin: auto;
            text-align: center;
          }
          #state-icon {
            color: red;
            padding-right: 7px;
          }
        </style>
      `;
    }
  
  set hass(hass) {
    this._hass = hass;

    const entity = hass.states[this.config.entity];
    this.header = entity.attributes.friendly_name;
    this.messages = entity.attributes.messages;
  }



  // @TODO: This requires more intelligent logic
  getCardSize() {
    return 3;
  }
}

customElements.define('krisinfo-card', KrisinfoCard);
});

window.setTimeout(() => {
  if(customElements.get('card-tools')) return;
  customElements.define('krisinfo-card', class extends HTMLElement{
    setConfig() { throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");}
  });
}, 2000);