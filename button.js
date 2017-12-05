class MWButton extends HTMLElement {
  constructor() {
    super()
    this.customShadow = this.attachShadow({mode: 'open'})
  }

  get label() {
    return this.getAttribute('label')
  }
  set label(value) {
    this.setAttribute('label', value)
  }

  get id() {
    return this.getAttribute('id')
  }
  set id(value) {
    this.setAttribute('id', value)
  }
  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'id') this.id = newValue
    if (name === 'label') this.label = newValue
    this.render();
  }

  render() {
    let innerhtml = `
      <button class="btn btn-action">${this.label}</button>
    `;
    this.customShadow.innerHTML = innerhtmlcust
  }
}

customElements.define('mw-button', MWButton)
