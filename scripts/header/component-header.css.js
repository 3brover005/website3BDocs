export default function css(){
    return `
        :host {
            all: initial !important;
        }
        .slds-context-bar.c-3b-docs-context-bar {
            border-bottom: 3px solid var(--3b-brand-primary);
        }
        .c-3b-docs-context-bar .slds-context-bar__item.slds-is-active:before {
            background: var(--3b-brand-primary);
        }
    `;
}