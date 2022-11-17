import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 100%;
        gap: 10px;
    }
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 93%);
    border: none;
    padding: 8px;
    cursor: pointer;
    transition: 1s;
    margin-left: 15px;
    
    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.06);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.06);
    }
`;