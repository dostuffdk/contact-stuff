export default class extends HTMLElement {

    // TODO: Watch for attribute changes.

    constructor() {
        super();

        const template = document.createElement('template');
        const emailContent = '<a href="mailto:{{slot}}"><slot></slot></a>';

        // TODO: If no type is set, make a guess.

        switch (this.getAttribute('type').toUpperCase()) {
            case 'EMAIL':
                template.innerHTML = emailContent.replace('{{slot}}', this.innerText);
                break;
            default:
                template.innerHTML = '<slot></slot>';
        }

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
};
