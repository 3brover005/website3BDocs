import css from './component-blockquote.css.js';
import html from './component-blockquote.html.js';

class ComponentBlockquote extends HTMLElement {
    template;

    constructor() {
        super();
    }

    get title() {
        return this.getAttribute('title');
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
        return [ 'title'];
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

        if(this.template){
            this.template.innerHTML = '';
        }else{
            this.template = this.attachShadow({mode: 'closed'});
        }
        this.template.appendChild(templateElement.content.cloneNode(true));
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

window.customElements.define('c-blockquote', ComponentBlockquote);