import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input/styled";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        className="form__input"
        required
        name="list"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
