export default function html(){
    return `
        <blockquote class="doc site-blockquote site-blockquote_note">
            <h4 class="lead">${this.title}</h4>
            <div class="doc">
                <slot>
                </slot>
            </div>
        </blockquote>
    `;
}