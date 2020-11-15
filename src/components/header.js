import React from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import {Link} from "gatsby"


const NavLink = styled(Link)`
    color: #222;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;
    text-decoration: none;

    &.current-page {
        border-bottom: solid 2px #222;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;


export default function header() {
    return (
        <header
        css={css`
            background: #eee;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 550px - 0.5rem)/2);

        `}
        >
            <NavLink to="/" >FEM Gats Intro</NavLink>
            <nav
            css={css`
                margin-top: 0;
            `}
            >
                <NavLink to="/" activeClassName="current-page" >Home</NavLink>
                <NavLink to="/about/" activeClassName="current-page" >About</NavLink>
            </nav>
        </header>
    )
}
