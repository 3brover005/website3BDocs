import css from './component-new-case.css.js';
import html from './component-new-case.html.js';


export default class ComponentNewCase extends HTMLElement {
    template;

    constructor() {
        super();
    }
    
    
    connectedCallback() {
        //Obligatory render call
        this.render();
    }

    disconnectedCallback() {
        //Remove Event Listeners
    }   

    /**
     * Observed Attributes
     */ 
    static get observedAttributes() {
        return [ ''];
    }
    /**
     * On attribute change listener
     */ 
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            console.log(`${name} changed from ${oldVal} to ${newVal}`);
            //Re-render template if attributes change
            this.render();
        }
    }

    /**
     * Main template renderer
     */ 
    render(){
        let templateElement = this.getTemplateElement();
        this.innerHTML = templateElement.innerHTML;
        this.renderedCallback();
    }

    renderedCallback(){
        hbspt.forms.create({
            region: "eu1",
            portalId: "143372710",
            formId: "737d4964-5414-407b-beeb-0c83a9aba5b2",
            target: '.hubspot-case'
        });
    }

    /**
     * Get element HTML 
     */ 
    getTemplateElement() {
        let templateElement = document.createElement('template');
        templateElement.innerHTML = `
            <style>
                ${css.bind(this).call()}
            </style>
            ${html.bind(this).call()}
        `;
        return templateElement;
    } 

    reportValidity(){
        return true;
    }

    checkValidity(){
        return this.reportValidity();
    }
}

window.customElements.define('c-new-case', ComponentNewCase);