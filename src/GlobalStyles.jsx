import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        //rotating bg colors
        --bg-teal: #3d9e8e;       
        --bg-yellow: #d8a817;
        --bg-red: #d15342;
        --bg-cadet-gray: #8da1b9;
        
        /* --bg-moss-green: #8ba353; */
        /* --bg-jet: #333333; */
        /* --bg-dune: #9e9e9e; */
        /* --bg-old-gold: #b2a635; */
        /* --bg-sage-gray: #88a09b; */

        --bg-timberwolf: #a9a9a9;
        --bg-silver: #9d9d9d;
        --bg-battleship: #919191;
        --bg-dim-gray: #868686;
        --bg-graphite: #6e6e6e;

        /* --off-white: #eff5ef; */
        --text-gray: #1f1f1f;    
        
        cursor: default;
        
        font-family: "Barlow", sans-serif;
        font-weight: 400;
        font-size: 24px;
        font-style: normal;
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
    header {
        width: 100vw;
        height: 3rem;
        position: absolute;
        top: 0;
        left: 0;
        background: none;
        display: flex;
        justify-content: flex-end;
        z-index: 10;

        @media (max-width: 1000px) {
            justify-content: center;
        }
    }
    h1 {
        font-size: 4rem;
        font-weight: 800;
        color: white;

        @media (max-width: 750px) {
            font-size: 2.5rem;
        }

        @media (max-height: 700px) {
            font-size: 2.2rem;
        }

        @media (max-width: 300px) {
            font-size: 1.8rem;
        }
    }
    p {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-gray);

        @media (max-width: 750px) {
            font-size: 1rem;
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        font-family: inherit;
        font-size: inherit;
    }

    button {
        background: inherit;
        color: inherit;
        cursor: pointer;
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
        background-color: var(--bg-sage);
    }
`;
