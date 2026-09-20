import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("Your Name");
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    //we make 3 states, isEditable is used to track the edit mode while isStudent manages the student status

    function changeMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsEditable(event.target.checked);
        //console.log(event.target.checked);
    }
    function updateInfo(event: ChangeEvent) {
        setUserInfo(event.target.value);
    } //
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="is-edit-mode"
                label=" Enable"
                checked={isEditable}
                onChange={changeMode} //switch between edit and non edit mode
            />

            {(
                !isEditable //if the form is not  editable render the default Student info
            ) ?
                <Form.Label>
                    {userInfo} is {isStudent ? " a student" : " not a student"}{" "}
                </Form.Label>
            :   <Form.Control
                    value={
                        //if the form is edtiable render a textbox (Form.control) that updates our
                        //user info to be whatever they type
                        userInfo
                    }
                    onChange={updateInfo}
                />
            }
            {isEditable ?
                <Form.Check //If the form is edtiable render a switchchecklist that lets us change student status
                    type="switch" //if its not editable render nothing but text
                    //IMPORTANT BIG IDEA: BOTH the TEXTBOX and STUDENT CHECK
                    // had to conditionally render ONLY IF isEdtiable got changed in changeModeq
                    id="is-Notedit-mode"
                    label=" Student"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            :   "You are still a student"}
            {/* MAKE SURE TO USE DIFFFERENT IDS I FAILED THE 4th TETS BC OF THAT*/}
        </div>
    );
}
