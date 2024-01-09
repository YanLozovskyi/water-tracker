import { css, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import fontStarEot from '../assets/fonts/customStars/fontello.eot';
import fontStarWoff2 from '../assets/fonts/customStars/fontello.woff2';
import fontStarWoff from '../assets/fonts/customStars/fontello.woff';
import fontStarTtf from '../assets/fonts/customStars/fontello.ttf';
import fontStarSvg from '../assets/fonts/customStars/fontello.svg';

export const GlobalStyles = () => {
  const theme = useTheme();
  return css`
    ${emotionNormalize}

    /* ========================= Reset styles ========================= */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    a {
      color: currentColor;
      text-decoration: none;
    }

    button {
      cursor: pointer;
      border: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    select::-ms-expand {
      display: none;
    }
    /* ========================= /Reset styles ========================= */

    /* ========================= Fonts ========================= */
    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      src: url(${RobotoRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      src: url(${RobotoMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url(${RobotoBold}) format('truetype');
    }

    @font-face {
      font-family: 'font-stars-password';
      src: url(${fontStarEot}?59471026);
      src:
        url(${fontStarEot}?59471026#iefix) format('embedded-opentype'),
        url(${fontStarWoff2}?59471026) format('woff2'),
        url(${fontStarWoff}?59471026) format('woff'),
        url(${fontStarTtf}?59471026) format('truetype'),
        url(${fontStarSvg}?59471026#fontello) format('svg');
      font-weight: normal;
      font-style: normal;
    }

    input[type='password'] {
      font-family: 'font-stars-password';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;

      font-variant: normal;
      text-transform: none;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);

      letter-spacing: 2px;

      &:placeholder-shown {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 1.15;
        letter-spacing: normal;
        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing: auto;
        text-shadow: none;
      }
    }

    /* ========================= /Fonts ========================= */

    /* ========================= Common styles ========================= */
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${theme.color.black};
      background-color: ${theme.color.white};
      transition: all 0.5s linear;
    }
    /* ========================= /Common styles ========================= */

    /* ========================= /Toastify ========================= */

    .Toastify__toast--error {
      background: #9ebbff;
      color: #ffffff;
      box-shadow: 0 4px 8px rgba(240, 46, 62, 0.742);
    }

    .Toastify__toast--error .Toastify__close-button {
      color: red;
    }

    .Toastify__toast--success {
      background: #9ebbff;
      border-color: #008000;
      color: #ffffff;
      box-shadow: 0 4px 8px rgba(37, 217, 43, 0.742);
    }

    .Toastify__toast--warning {
      background: #9ebbff;
      border-color: #c9c507;
      color: #ffffff;
      box-shadow: 0 4px 8px rgba(195, 216, 8, 0.742);
    }

    .Toastify__progress-bar--error {
      height: 2px;
    }

    .Toastify__progress-bar--success {
      height: 2px;
    }

    .Toastify__progress-bar--warning {
      height: 2px;
    }
    /* ========================= /Toastify ========================= */

    /* ========================= /Scroll styles ========================= */

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9ebbff;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    /* Firefox */
    * {
      scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
    }

    /* ========================= /Scroll styles ========================= */
  `;
};
