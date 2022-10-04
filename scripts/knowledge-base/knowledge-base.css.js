export default function css(){
    return `
        .c-spinner{
            height: calc(100vh - var(--3b-header-height));
            display: contents;
        }

        iframe.c-3b-knowhow-frame {
            border: none;
            height: calc(100vh - var(--3b-header-height));
            width: 100vw;
        }
    `;
}