
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
        width: 200px;
        margin: 3%;

        > div:first-of-type {
            background-color: black;

            > div > h2 {
                color: white;
                text-align: center;
                margin: 0%;
            }
        }
    `,
    cardImage: css`
        width: 100%;
        height: auto;
    `,
    infoContainer: css`
        margin-top: -16px;
        background-color: FloralWhite;

            > * > p {
                word-wrap: break-word;
                padding-bottom: 5px;
                border-bottom-style: dashed;
                border-bottom-width: thin;
                border-color: black;
            }
    `
}

export default style;