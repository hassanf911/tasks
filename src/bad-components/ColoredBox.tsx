import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorLog {
    setColorIndex: (newIndex: number) => void;
    colorIndex: number;
}

{
    /*

I didn't realize an interface wasn't a component.
I had to make an interface(embedded or however)
and then pass in the state variables as paramters into each child/sibling function

This allowed me to use the colorIndex as a argument for the backgroundcOlor
Imalso didnt ralize I had to change that to be the colorIndex
*/
}

function ChangeColor({
    setColorIndex,
    colorIndex,
}: ColorLog): React.JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}
//as u can see here u dont ahev to pass in all the fields in the child functions

function ColorPreview({ colorIndex }: ColorLog): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                />

                <ColorPreview
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                />
            </div>
        </div>
    );
}
