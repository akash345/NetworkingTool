import React from "react";
import App from "./App";
import {ReactDOM} from "react";

class MyForm extends React.Component  {
    render()  {
        return (
            <form>
                <p >First name:</p>
                <input
                    type="text"
                />
                <p>Last name:</p>
                <input
                    type="text"
                />
                <p>Company:</p>
                <input
                    type="text"
                />
                <p>Job Title</p>
                <input
                    type="text"
                />
                <p>Mode of Contact</p>
                <input
                    type="text"
                />
                <p>Status</p>
                <input
                    type="text"
                />
                <input
                    type='submit'
                />
            </form>

        );
    }
}

export default MyForm;