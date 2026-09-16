import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface BoxLog{
    setPosition: (newPosition: number) => void;
    position: number;
}
function ShoveBoxButton({setPosition, position}: BoxLog) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox({position}: BoxLog

): React.JSX.Element {

    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(

): React.JSX.Element {
    
        const [position, setPosition] = useState<number>(10);
      // const box = MoveableBox();
        return (
        <div>
            <p>Shove Box</p>
             <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox
                    position = {position}
                    setPosition = {setPosition}
                    >
                </MoveableBox>
            </div> 
        </div>
    );
}
{/* I couldnt fighure out how to do this using an embedded interface
    At the end I realzie to fix the box const requiring paramaeters
    u can just call a Moveable Box component in the final return
    maybe try redoing this with interfaces but use the mvoveable box component?*/}
