import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 100%;
        gap: 0px;
    }
`;

export const Button = styled.button`
    font-size: 18px;
    color: hsl(180, 100%, 25%);
    border: none;
    background-color: hsl(0, 0%, 100%);
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
        color: hsl(0, 0%, 50%);
    }
`;