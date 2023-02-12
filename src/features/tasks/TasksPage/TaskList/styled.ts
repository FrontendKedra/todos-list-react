import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Done, Remove } from "../../../../types/interfaces";

export const List = styled.ul`
  padding: 20px;
  word-break: break-word;
`;

export const Item = styled.li`
  border-bottom: 2px solid hsl(0, 0%, 90%);
  padding: 10px;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  gap: 10px;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }: Done) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  background-color: hsl(120, 100%, 25%);
  color: hsl(0, 0%, 100%);
  border: none;
  display: grid;
  justify-content: center;
  align-content: center;
  height: 30px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: hsl(120, 100%, 32%);
  }

  &:active {
    background-color: hsl(120, 100%, 39%);
  }

  ${({ remove }: Remove) =>
    remove &&
    css`
      background-color: hsl(0, 100%, 50%);

      &:hover {
        background-color: hsl(0, 100%, 70%);
      }
      &:active {
        background-color: hsl(0, 100%, 80%);
      }
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(180, 100%, 25%);

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 45%);
  }
`;
