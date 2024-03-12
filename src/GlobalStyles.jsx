import { createGlobalStyle } from "styled-components";
import backgroundTexture from "/src/assets/paper-texture.jpg";

export default createGlobalStyle`
    :root {
        --off-white: #eff5ef;
        --gray: #76706a;
        --sage-gray: #8b9c99;
        --sage: #92a27e;
        --blue: #2f425e;
        --teal: #06bf9f;
        --lime: #b8cd2a;
        --olive: #9aa05d;
        --yellow: #f7be0e;
        --red: #c34938;
        --mauve: #684a43;
        --midnight-blue: #232326;        
        
        cursor: default;   
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, main, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
	    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        background-image: url(${backgroundTexture});
    }
    /* Hide scrollbar for Chrome, Safari, and Opera */
    body::-webkit-scrollbar, html::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    body, html {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    // layout area classes
    .content-grid {
        --padding-inline: 1.5rem;
        --content-max-width: 120ch;
        
        display: grid;
        grid-template-columns:
            [full-width-start]
            minmax(var(--padding-inline), 1fr)
            [content-start]
            min(100% - (var(--padding-inline) * 2), var(--content-max-width))
            [content-end]
            minmax(var(--padding-inline), 1fr)
            [full-width-end];
    }
    .content-grid > :not(.full-width),
    .full-width > :not(.full-width) {
        grid-column: content;
    }
    .content-grid > .full-width {
        grid-column: full-width;
    }
    // background colour classes
    .bg-sage {
        background-color: var(--sage);
    }
    .bg-blue {
        background-color: var(--blue);
    }
    .bg-teal {
        background-color: var(--teal);
    }
    .bg-lime {
        background-color: var(--lime);
    }
    .bg-olive {
        background-color: var(--olive);
    }
    .bg-yellow {
        background-color: var(--yellow);
    }
    .bg-red {
        background-color: var(--red);
    }
    .bg-mauve {
        background-color: var(--mauve);
    }
`;
