import css from './component-header.css.js';
import html from './component-header.html.js';

export default class ComponentHeader extends HTMLElement {
    template;

    constructor() {
        super();
    }
    
    get activeTab() {
        return this.getAttribute('active');
    }
    
    connectedCallback() {
        //Obligatory render call
        this.render();

        console.log('Header Loaded', this.activeTab);
    }

    disconnectedCallback() {
        //Remove Event Listeners
    }   

    /**
     * Observed Attributes
     */ 
    static get observedAttributes() {
        return [ 'active'];
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
        console.log('Rendering Template');
        let templateElement = this.getTemplateElement();

        /* do not attach to shadow root */
        // if(this.template){
        //     this.template.innerHTML = '';
        // }else{
        //     this.template = this.attachShadow({mode: 'closed'});
        // }
        // this.template.appendChild(templateElement.content.cloneNode(true));
        /* do not attach to shadow root */
        this.innerHTML = templateElement.innerHTML;
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

window.customElements.define('c-header', ComponentHeader);