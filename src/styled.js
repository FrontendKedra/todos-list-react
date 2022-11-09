import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: hsl(0, 0%, 75%);

    &.active {
        color: hsl(0, 0%, 100%);
        font-size: 17px;
    }

    &:hover {
        color: hsl(0, 0%, 85%);
    }

    &:active {
        color: hsl(0, 0%, 92%);
    }
`

export const UnorderedList = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    background-color: hsl(180, 100%, 25%);
    justify-content: center;
    gap: 30px;
    padding: 20px;
    list-style: none;
`