import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface DoubleLog {
    //the type is a function that consumes a number and returns void
    setDhValue: (newValue: number) => void;
    dhValue: number;
}
//An interface holds a set of fields with varying types
//I made an interface to hold our states and also initiated them in the parent component
//This allows us to share states across child components
//Essentially, we pass our declared states from the main component
// as fields for an interface.
// Since the state is now a field, it can be used/accesses as paramaters
// by a 'closure function '
//The closure function lets us access variables from an outer scope
//So it takes them in as paramaters (props) and returns the interface.
//Lastly, we can pass in the state as arguments in function calls in our parent
// <Component setState = {setState} state = {state}></Component

// move the state into a parent component -> make its state variables paramaters for an interface >
// pass its state variable as paramaters for a child component function  using closures  > pass the state as attributes
//for those function calls in the mparent comp

{
    /*function Doubler(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10)
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}
    */
}

function Doubler({ setDhValue, dhValue }: DoubleLog): React.JSX.Element {
    // const [dhValue, setDhValue] = useState<number>(10);
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

//there was a top level sueState in the state file which is bad
//use states must bei in components
function Halver({ setDhValue, dhValue }: DoubleLog): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
