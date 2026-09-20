import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;

    function updateAnswer(event: ChangeEvent): void {
        setAnswer(event.target.value); //set the answer to be what the user typed into the box (target)
    } //for form.control the oncahnge is always set to = a passing  o
    //of  the state Setter or its function

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <p> {answer == expectedAnswer ? "✔️" : "❌"}</p>
            {/* Conditionally renders X or check*/}
        </div>
    );
}
