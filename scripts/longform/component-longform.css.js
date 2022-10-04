export default function css(){
    return `
        .code {
            border-color: #c4c4c4;
            background: #fff;
            border-radius: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            max-width: 1200px;
            margin: auto;
            margin-top: 20px;
        }

        .code {
            border: 1px hsl( 0,0%,82.7% ) solid;
            background: white;
            box-shadow: 0 0 5px hsl(0deg 0% 0% / 10%);
        }

        @media screen and (min-width: 1201px) {
            .code{
                padding: 50px;
            }
        }

        @media screen and (max-width: 1200px) {
            .code{
                padding: 50px;
            }
        }

        @media screen and (max-width: 1024px) {
            .code{
                padding: 50px;
            }
        }

        @media screen and (max-width: 768px) {
            .code{
                padding: 20px;
            }
        }

        @media (max-width: 480px) {
            .code{
                padding: 20px;
            }
        }
    `;
}