
/** @jsxImportSource @emotion/react */

import {jsx, css} from '@emotion/react'

const glow = `box-shadow: 0px 0px 20px gold;`

const style = {
    flexRow: css`display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    `,
    pageContainer: css`
        width: 90%;
        margin: 0% auto;
    `,
    cardContainer: css`
        width: 150px;
        margin: 3%;

        &:hover {
            ${glow}
        }

        > div:first-of-type {
            background-color: black;
            height: auto;

            > div > h2 {
                color: white;
                text-align: center;
                margin: 0%;
                font-size: 1.3em;
            }
        }
    `,
    glow: css`
        ${glow}
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

                &:hover {
                    background-color: gold;
                    color: white;
                }
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