import { h } from "preact";
import { useState, useRef } from "preact/hooks";
import "ojs/ojinputtext";
import "ojs/ojbutton";
export function SignUp() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    const handlesignUp = async () => {
        console.log("calling signup")
        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name , email, pass })
        });
        const data = await response.json();
        if (data.success)
        {
            console.log('Login successful')        
        } 
        else {
            console.log('Login failed')        
        }
    };
  
    return(
        <>
            <oj-input-text label-hint="Full Name" id = "name" value=""></oj-input-text>
            <oj-input-text lable-hint="Email Address" id="email" value=""></oj-input-text>
            <oj-input-text lable-hint="password" value=""></oj-input-text>
            <oj-button on-oj-action={handlesignUp}>Sign Up</oj-button>
            <p>Already have an account? <a href="signin.html">Sign In</a></p>
        </>
    );
};