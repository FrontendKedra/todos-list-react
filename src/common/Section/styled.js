import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 10px;
`;

export const Header = styled.header`
    border-bottom: 2px solid hsl(0, 0%, 90%);
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 100%;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;