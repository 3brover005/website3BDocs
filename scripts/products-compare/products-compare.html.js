export default function html(){
    return `
    <div class="c-product-compare-wrapper">
        <div class="">
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        ${this.products.map(product => {
                            return `
                                <th><a href="${product.link}" target="_blank">${product.name}</a></th>
                            `
                        }).join("")}
                    </tr>
                </thead>
                <tbody>
                ${this.features.map(feature => {
                    return `
                        <tr class="visible-xs" aria-hidden="true">
                            <td>&nbsp;</td>
                            <td colspan="${this.products.length}" title="${feature.title}" class="slds-text-title_caps">${feature.name}</td>
                        </tr>
                        <tr>
                            <td title="${feature.title}" class="slds-text-title_caps">${feature.name}</td>
                            ${this.products.map(product => {
                                return `
                                    <td>${product[feature.property]}</td>
                                `
                            }).join("")}
                        </tr>
                    `
                }).join("")}
                </tbody>
            </table>
        </div>
        <div>
            <hr/>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th><a href="${this.docsProduct.link}" target="_blank">${this.docsProduct.name}</a></th>
                    </tr>
                </thead>
                <tbody>
                ${this.features.map(feature => {
                    return `
                        <tr class="visible-xs" aria-hidden="true">
                            <td>&nbsp;</td>
                            <td colspan="2" title="${feature.title}" class="slds-text-title_caps">${feature.name}</td>
                        </tr>
                        <tr>
                            <td title="${feature.title}" class="slds-text-title_caps">${feature.name}</td>
                            <td>${this.docsProduct[feature.property]}</td>
                        </tr>
                    `
                }).join("")}
                </tbody>
            </table>
        </div>
    </div>
    `;
}