class KrisinfoCard extends HTMLElement {
  set hass(hass) {
    
    var card = null;
    if (!this.content) {
      card = document.createElement('ha-card');
      this.content = document.createElement('div');
      this.content.className = 'card';
      card.appendChild(this.content);
      this.appendChild(card);
    }

    const entity = hass.states[this.config.entity];
    const messages = entity.attributes.messages;
    if(card != null) {
      card.header = entity.attributes.friendly_name;
    }
    
    this.content.innerHTML = `
      <style>
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

          ${messages.length == 0 ? "<p>Inga meddelanden just nu</p>" : 
          messages.map(message => `
              <div class="message">
                <span>${message.SenderName}</span>
                  </br><span>Skickat: ${message.Published}</span>
                  <h3>${message.Event == "Alert" ? `<ha-icon id="state-icon" icon="mdi:alert"></ha-icon>` : ''}${message.Headline}</h3>
                <p class="">${message.Message}</p>
                <a target="_blank" href="${message.Web}">Läs mer</a>
              </div>`).join('')}
      </div>`;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define entity');
    }
    this.config = config;
  }

  // @TODO: This requires more intelligent logic
  getCardSize() {
    return 3;
  }
}

customElements.define('krisinfo-card', KrisinfoCard);