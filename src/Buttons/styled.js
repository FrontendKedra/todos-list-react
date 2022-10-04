import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 100%;
        grid-gap: 0px;
    }
`;

export const Button = styled.button`
    font-size: large;
    color: hsl(180, 100%, 25%);
    border: none;
    background-color: white;
    transition: 0.5s;
    cursor: pointer;

    @media (max-width: 767px) {
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        color: grey;
    }
`;