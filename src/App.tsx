import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import { ChangeType } from "./components/ChangeType";
//import { RevealAnswer } from "./components/RevealAnswer";
//import { StartAttempt } from "./components/StartAttempt";
//import { TwoDice } from "./components/TwoDice";
//import { CycleHoliday } from "./components/CycleHoliday";
//import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
//import { ColoredBox } from "./bad-components/ColoredBox";
//import { ShoveBox } from "./bad-components/ShoveBox";
//import { ChooseTeam } from "./bad-components/ChooseTeam";
//import { CheckAnswer } from "./form-components/CheckAnswer";
//import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
//import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
             <h1>  Mohammed Fofana UD CISC275 with React Hooks and TypeScript </h1>
                <p> Hello World</p>
                <div>
                    <Button
                        onClick={() => {
                            //This onclick function is attached to  and in the first buton tag
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                <div>
                    <Container>
                        <Row>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 300,
                                    height: 400,
                                }}
                            >
                                <Col>
                                    Slipknot Songs I like.
                                    <div>
                                        <ul>
                                            <li> Eyeless</li>
                                            <li> Custer </li>
                                            <li> Critical darling</li>
                                        </ul>
                                    </div>
                                </Col>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "blue",
                                    width: 525,
                                    height: 500,
                                }}
                            >
                                <Col>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0Rfn9U2nzEhLdKEKeMZs-F2Ofq4EBwdR6gkxjEL0lp4fKh9oVwJu3tYW&s=10"
                                        alt="A picture of the metal band slipknot"
                                    />
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </header>
            <hr></hr>
         {/*   <CheckAnswer expectedAnswer="42"></CheckAnswer>*/}
            <hr></hr>
          {/*  <GiveAttempts></GiveAttempts> */}
            <hr></hr>
            {/* <EditMode></EditMode>*/}
            <hr></hr>
           {/* <ChangeColor></ChangeColor>*/}
            <hr></hr>
          {/* <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion> */}
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
         {/*  <ChooseTeam></ChooseTeam>8 */}
            <hr></hr>
         {/* <ColoredBox></ColoredBox> */}
            <hr></hr>
         {/* <ShoveBox></ShoveBox> */}
            <hr></hr>
           {/* <Counter></Counter> */}
            <hr />
          {/*  <RevealAnswer></RevealAnswer> */}
            <hr />
       {/*     <StartAttempt></StartAttempt> */}
            <hr />
          {/* <TwoDice></TwoDice> */}
            <hr />
          {/*  <ChangeType></ChangeType> */}
            <hr />
            {/* <CycleHoliday></CycleHoliday> */}
        </div>
    );
}

type letterGrade = "A" | "B" | "C" | "D";
let grade: letterGrade;
grade = "A";
console.log(grade);
export default App;

export function Add(first: number, second: number): number {
    return first + second;
}
