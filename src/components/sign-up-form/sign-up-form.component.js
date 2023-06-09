import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-fotm.style.scss'

import Button from "../button/button.component";



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

   

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;


    // const val = useContext(UserContext)

    // console.log("hit");

    // console.log(formFields);

    const resetFromFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit =async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);


            await createUserDocumentFromAuth(user, {displayName})
            resetFromFields();

        }catch(error) {
            if(error.code === "auth/email-already-in-use"){
                alert('cannot create email user already in use')
            }else {
                console.log("user creation encountered an error:" ,error);
            }
            

        }

    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]: value})

    }


    return(
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label='Display name'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                 />

                
                <FormInput 
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email"
                    value={email}
                />

                
                <FormInput 
                    label='Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password"
                    value={password}
                />

                
                <FormInput 
                    label='Confirm Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button  type="submit">Sign Up</Button>
                {/* <Button buttonType={'google'} type="submit">Sign Up</Button>
                <Button buttonType={'inverted'}  type="submit">Sign Up</Button> */}
            </form>
        </div>

    )
}


export default SignUpForm;