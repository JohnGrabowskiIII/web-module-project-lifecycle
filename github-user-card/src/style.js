
/** @jsxImportSource @emotion/react */

import {jsx, css} from '@emotion/react'

const style = {
    flexRow: css`display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    `,
    pageContainer: css`
        width: 90%;
        margin: 0% auto;
        border: 3px solid white;
    `,
    cardContainer: css`
        width: 150px;
        margin: 3%;

        > div:first-of-type {
            background-color: black;

            > div > h2 {
                color: white;
                text-align: center;
                margin: 0%;
                font-size: 1.3em;
            }
        }
    `,
    cardImage: css`
        width: 100%;
        height: auto;
    `,
    // ADDRESS OVERFLOW BUG
    infoContainer: css`
        margin-top: -16px;
        background-color: FloralWhite;
        height: 30vh;
        overflow: auto;
        position: relative;
        top: 17px;

            > button {
                width: 100%;
                height: 20px;
            }

            > * > p {
                word-wrap: break-word;
                padding-bottom: 5px;
                border-bottom-style: dashed;
                border-bottom-width: thin;
                border-color: black;
                font-size: 0.9em;
            }
    `
}

export default style;