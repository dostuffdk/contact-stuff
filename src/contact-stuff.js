const template = document.createElement('template');
template.innerHTML = `<div>contact-stuff</div>`;

export default class extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
};
