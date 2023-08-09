export default function html(){
    return `
        <header class="">
            <div class="slds-text-align_center slds-size_full slds-text-body_regular">
                <div class="slds-notify_alert system-message level-info slds-theme_info">
                    <span>You can now use 3B Sign to get PDFs e-signed</span>
                </div>
            </div>
            <div class="slds-p-top_x-small">
                <!-- App Logo -->
                <div class="slds-global-header">
                    <div class="slds-global-header__item">
                        <div class="slds-global-header__logo"></div>
                    </div>
                </div>
                <!-- App Navigation Bar -->
                <div class="slds-context-bar slds-scrollable_x c-3b-app-context-bar">
                    <div class="slds-context-bar__primary">
                        <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                        <span class="slds-context-bar__label-action slds-context-bar__app-name">
                            <span class="slds-truncate" title="3B Docs">Documents</span>
                        </span>
                        </div>
                    </div>

                    <nav class="slds-context-bar__secondary" role="navigation">
                        <ul class="slds-grid">
                            <li class="slds-context-bar__item ${this.activeTab == 'App' ? 'slds-is-active' : ''}">
                                <a href="./index.html" class="slds-context-bar__label-action" title="App">
                                <span class="slds-truncate" title="App">App</span>
                                </a>
                            </li>
                            <li class="slds-context-bar__item ${this.activeTab == 'Knowledge Base' ? 'slds-is-active' : ''}">
                                <a href="./knowledge.html" class="slds-context-bar__label-action" title="Knowledge Base">
                                <span class="slds-truncate" title="Knowledge Base">Knowledge Base</span>
                                </a>
                            </li>
                            <li class="slds-context-bar__item ${this.activeTab == 'Contact Us' ? 'slds-is-active' : ''}">
                                <a href="./contactus.html" class="slds-context-bar__label-action" title="Contact Us">
                                <span class="slds-truncate" title="Contact U">Contact Us</span>
                                </a>
                            </li>
                            <li class="slds-context-bar__item ${this.activeTab == 'Log In to E-Sign' ? 'slds-is-active' : ''}">
                                <a href="https://app.3bdocs.com/" class="slds-context-bar__label-action" title="Log In to E-Sign">
                                <span class="slds-truncate" title="Contact U">Log In to E-Sign</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    `;
}