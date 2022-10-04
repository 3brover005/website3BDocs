import css from './products-compare.css.js';
import html from './products-compare.html.js';

export default class ComponentProductsCompare extends HTMLElement {
    template;

    features = [
        {name:'Native', title: 'Title', property:'native'},
        {name:'Multiple Signers', title: 'Supports multiple signing parties', property:'multiSign'},
        {name:'Contract Redlining', title: 'Supports contract redlining and negotiations', property:'redlining'},
        {name:'Batch Support', title: 'Batch/Asynchronous document generation support', property:'batch'},
        {name:'Sub Templates', title: 'Allow creating reusable templates', property:'templates'},
        {name:'Input Formats', title: 'What inputs are supported?', property:'inputs'},
        {name:'Price', title: 'Licenses and ongoing cost', property:'price'},
    ];

    products = [
        {name: 'DocuSign', link:'https://www.docusign.com/', native:'No', multiSign:'Yes', redlining:'Yes', batch:'Yes', price:'$$$$$', templates:'No', inputs:'PDF, DOCX, RTF, TXT, and PNG'},
        {name: 'Conga', link:'https://conga.com/', native:'No', multiSign:'Yes', redlining:'Yes', batch:'Yes', price:'$$$$', templates:'No', inputs:'DOC, DOCX, RTF, PDF, Others'},
        {name: 'Docomotion', link:'https://www.docomotion.com/', native:'No', multiSign:'No', redlining:'No', batch:'Yes', price:'$$$', templates:'No', inputs:'PDF, HTML, DOCX'},
        {name: 'Nintex', link:'https://www.nintex.com/', native:'No', multiSign:'Yes', redlining:'No', batch:'Yes', price:'$$$$', templates:'No', inputs:'PFD, others'},
        {name: 'S-Docs', link:'https://www.sdocs.com/', native:'Yes', multiSign:'Yes', redlining:'Yes', batch:'Yes', price:'$$$', templates:'Yes', inputs:'HTML, PDF'},
        {name: 'Titan', link:'https://formtitan.com/', native:'No', multiSign:'Yes', redlining:'No', batch:'Yes', price:'$$$', templates:'No', inputs:'DOC, DOCX, HTML'}
    ];

    docsProduct = {
        name: '3B Docs', link:'https://www.3bdocs.com/', native:'Yes', multiSign:'Yes', redlining:'Yes', batch:'No', price:'FREE', templates:'Yes', inputs:'HTML'
    }

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
        return [''];
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
        if(this.template){
            this.template.innerHTML = '';
        }else{
            this.template = this.attachShadow({mode: 'closed'});
        }
        this.template.appendChild(templateElement.content.cloneNode(true));
        /* do not attach to shadow root */
        // this.innerHTML = templateElement.innerHTML;
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

window.customElements.define('c-products-compare', ComponentProductsCompare);