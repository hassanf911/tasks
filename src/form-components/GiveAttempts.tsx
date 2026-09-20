import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [currAttempts, setCurrAttempts] = useState<string>("3");
    const [wantedAttempts, setWantedAttempts] = useState<string>("0");
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    const checkInput = parseInt(wantedAttempts) || 0;

    function decrAttempts() {
        let intValue: number = parseInt(currAttempts) - 1;

        setCurrAttempts(intValue.toString());
    } //for buttonclick  functions to call with ur arguments go inside the {}
    //while the conditional disbaled rneering goes otuside that but still insdie the button tag

    // function incrAttemptsWanted(event: ChangeEvent): void{
    //     setWantedAttempts(event.target.value);
    //here we put our event uodate function as a variable inside the onchange
    // }
    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Group controlId="GiveAttempts">
                <Form.Label>Attempts: {currAttempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={wantedAttempts}
                    onChange={(event: ChangeEvent) => {
                        setWantedAttempts(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        decrAttempts();
                    }}
                    disabled={currAttempts == "0"}
                >
                    {" "}
                    use
                </button>
                <button
                    onClick={() => {
                        checkInput == 0 ?
                            setCurrAttempts(currAttempts)
                        :   setCurrAttempts(
                                (
                                    checkInput + parseInt(currAttempts)
                                ).toString(),
                            );
                    }}
                >
                    gain
                </button>{" "}
                {/* I wasnt adding the old attempts to the wanted attempts (checkInput)*/}
            </Form.Group>
        </div>
    );
}
