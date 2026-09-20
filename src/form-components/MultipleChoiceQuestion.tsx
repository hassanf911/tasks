import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLSelectElement
    >;

    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MChoice">
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((aOption: string) => (
                        <option key={aOption} value={aOption}>
                            {aOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <p> {choice == expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
