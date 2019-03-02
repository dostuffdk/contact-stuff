export default class extends HTMLElement {

    // TODO: Watch for attribute changes.

    constructor() {
        super();

        const template = document.createElement('template');
        const emailContent = '<a href="mailto:{{slot}}"><slot></slot></a>';
        const phoneContent = '<a href="tel:{{slot}}"><slot></slot></a>';
        const urlContent = '<a href="//{{slot}}"><slot></slot></a>';

        // TODO: If no type is set, make a guess.

        switch (this.getAttribute('type').toUpperCase()) {
            case 'EMAIL':
                template.innerHTML = emailContent.replace('{{slot}}', this.innerText);
                break;
            case 'PHONE':
                template.innerHTML = phoneContent.replace('{{slot}}', this.innerText);
                break;
            case 'URL':
                template.innerHTML = urlContent.replace('{{slot}}', this.innerText);
                break;
            default:
                template.innerHTML = '<slot></slot>';
        }

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
};
