export default function css(){
    return `
        a{
            background-color:transparent;
        }
        a:active,
        a:hover{
            outline:0;
        }
        a{
            color:#0176d3;
            text-decoration:none;
            -webkit-transition:color 0.1s linear;
            transition:color 0.1s linear;
        }
        a:hover, a:focus{
            text-decoration:underline;
            color:#014486;
        }
        a:active{
            color:#014486;
        }

        a,
        button{
            cursor:pointer;
        }

        .slds-text-title_caps{
            font-size:0.75rem;
            line-height:1.25;
            color:#444444;
            font-weight:400;
            text-transform:uppercase;
            letter-spacing:0.0625rem;
        }

        table {
            width: 100%;
        }

        td, th {
            text-align: center;
            padding: 6px;
            border: solid 1px #ccc;
        }

        td {
            color: #001639;
        }

        th:first-child,
        td:first-child {
            font-weight: bold;
            color: black;
        }

        .visible-xs {
            display: none;
        }

        @media screen and (max-width: 768px) {
            .visible-xs {
                display: table-row;
                background: #efefef;
            }
            .visible-xs td, th {
                
            }
            .c-product-compare-wrapper{
                zoom: 67%;
                margin: auto;
            }
            
            td:first-child,
            th:first-child {
                display: none;
            }
        }
    `;
}