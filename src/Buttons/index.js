import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <Container>
            <Button
                onClick={toggleHideDone}
                className="containerButtons__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>

            <Button
                onClick={setAllDone}
                className="containerButtons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Container>
    )
};

export default Buttons;