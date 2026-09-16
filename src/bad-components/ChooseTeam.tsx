
    import React, { useState } from "react";
    import { Button, Row, Col } from "react-bootstrap";

    const PEOPLE = [
        "Alan Turing",
        "Grace Hopper",
        "Ada Lovelace",
        "Charles Babbage",
        "Barbara Liskov",
        "Margaret Hamilton",
    ];
// Hint: You will want to modify the signature and binding of one 
// of the inner helper functions.
    export function ChooseTeam(): React.JSX.Element {
        const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
        const [team, setTeam] = useState<string[]>([]);
       
        function chooseMember(newMember: string) {
            setTeam([...team, newMember]);

            setAllOptions(allOptions);
           
        }

        function clearTeam() {
            
             setTeam([]);
            
            
        }

        return (
            <div>
                <h3>Choose Team</h3>
                <Row>
                    <Col>
                        {allOptions.map((option: string) => (
                            <div key={option} style={{ marginBottom: "4px" }}>
                              
                                
                                <Button onClick = {() => {chooseMember(option)}} size ="sm">
                                        {option}
                                </Button>
                                
                              {/*  The sisue was that chooseMember returns void
                              So onclick was essentially calling void
                              The solution was to give onClick a function that it can call with option when clicked
                              <input   type = "text"  onChange ={(event) => setTeam([event.target.value])} />
                                <Button onClick = {() => chooseMember(team)}>

                                </Button>

                                 <Button onClick={chooseMember(option)} size="sm">
                                    {option}
                                </Button>
                                */}
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <strong>Team:</strong>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                        <Button onClick={clearTeam}>Clear Team</Button>
                    </Col>
                </Row>
            </div>
        );
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
