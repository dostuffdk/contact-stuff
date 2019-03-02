const template = document.createElement('template');
template.innerHTML = `<span><slot></slot></span>`;

export default class extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
};
