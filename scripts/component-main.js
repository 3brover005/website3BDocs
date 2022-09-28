class ComponentMain extends HTMLElement {
    constructor() {
        super();
    }

    get label() {
        return this.getAttribute('label');
    }

    connectedCallback() {
        this.renderElement();
        console.log('Main Loaded');        
    }

    disconnectedCallback() {

    }    

    renderElement(){
        this.innerHTML = `
            <div class="main">
                <div class="content">
                    <div class="content-inner">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
    
    reportValidity(){
        return true;
    }

    checkValidity(){
        return this.reportValidity();
    }
}

window.customElements.define('c-main', ComponentMain);