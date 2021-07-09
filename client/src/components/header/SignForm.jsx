import React, {useState} from 'react';
import { Signform, FormForm, Inputs, Buttons, TwoButtons, LogButton, SigButton, Linking, GoogleButton, CloseButton } from './Styles';
import { FcGoogle } from "react-icons/fc";

export default function SignForm() {
    const [user, setUser] = useState({name: "", password: ""});

    function handleChange(e) {
        e.preventDefault();
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert("Aquí autenticás");
        setUser({name: "", password: ""});
    }

    return (
        <Signform>
            <FormForm onSubmit={(e) => handleSubmit(e)}>
                <CloseButton type="button">X</CloseButton>
                <Inputs name="name" type="text" value={user.name} placeholder="Username..." onChange={(e) => handleChange(e)} />
                <Inputs name="password" type="password" value={user.password} placeholder="Password..." onChange={(e) => handleChange(e)} />
                <Buttons>
                    <GoogleButton><FcGoogle size="35"/>Login with Google</GoogleButton>
                    <TwoButtons>
                        <LogButton type="submit">Log in</LogButton>
                        <SigButton type="button"><Linking to='/signup' >Sign up</Linking></SigButton>
                    </TwoButtons>
                </Buttons>
            </FormForm>
        </Signform>
    )
}