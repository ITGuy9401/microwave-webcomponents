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
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css">
      <button class="btn btn-action">${this.label}</button>
    `;
    this.customShadow.innerHTML = innerhtml
  }
}

customElements.define('mw-button', MWButton)
