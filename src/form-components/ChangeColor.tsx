import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    const myColors = [
        "red",
        "Blue",
        "Green",
        "Purple",
        "Orange",
        "Pink",
        "Yellow",
        "Cyan",
    ];
    function updateColor(event: ChangeEvent): void {
        setColor(event.target.value);
    } //for radios we have multiple form.check elements together w/ the same name tag
    return (
        <div>
            <h3>Change Color</h3>

            <Form.Group controlId="ColoredBox">
                {myColors.map((aColor: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        key={aColor}
                        id={aColor}
                        label={aColor}
                        value={aColor}
                        checked={color == aColor}
                    />
                ))}
                <Form.Label>{color}</Form.Label>
                <Form.Control
                    value={color}
                    onChange={updateColor}
                    style={{ backgroundColor: color }}
                />

                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </div>
                {/*I overthought the problem. It simply needed an area with color thats a box
                Div lets us  create an empty area with styling rules
                I thought to use the input box created using Form.control but the tetss
                wanted a seperate box of style
                */}
            </Form.Group>
        </div>
    );
}
