export default function css(){
    return `
        .site-blockquote_note.doc {
            border-left-color: var(--3b-green);
        }

        blockquote.doc {
            background-color: #fafaf9;
            font-weight: 300;
            padding: 1rem;
            margin: 0 0 1.5rem;
            border: 1px solid #e5e5e5;
            border-left-width: 0.125rem;
        }

        blockquote {
            margin-top: 0;
            margin-right: 0;
            margin-left: 0;
        }

        .site-blockquote_note.doc .lead {
            color: #00396b;
        }

        blockquote.doc h4.lead {
            font-size: 1rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
        }

        blockquote.doc .lead {
            margin-bottom: 0;
            font-weight: 600;
        }

        blockquote.doc .doc {
            color: #444;
            font-size: 1rem;
        }

        blockquote.doc p:first-child, blockquote.doc p:only-child {
            margin-top: 0;
        }

        blockquote.doc p {
            margin: 0.5rem 0;
        }
    `;
}