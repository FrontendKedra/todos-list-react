import styled from "styled-components"

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 100%;
        grid-gap: 10px;
    }
`;

export const Input = styled.input`
    padding-left: 5px;
    margin-right: 15px;

    @media (max-width: 767px) {
        margin-right: 0;
        min-height: 4vh;
    }
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: #eee;
    border: none;
    padding: 8px;
    cursor: pointer;
    transition: 1s;
    
    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.06);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.06);
    }
`;