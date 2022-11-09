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