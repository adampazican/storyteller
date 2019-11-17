import {useHistory} from "react-router";
import {FormEvent, useState} from "react";
import {User} from "../types";
import {HttpMethod} from "./useFetchData";

export default function(path: string, onSuccessCallback?: any) {
    const history = useHistory();
    const [formFields, setFormFields] = useState({} as User);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response: Response = await fetch(`/api/v1${path}`, {
            method: HttpMethod.POST,
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formFields)
        });
        const data = await response.json();

        if(response.ok) {
            history.push("/");
            onSuccessCallback(data);
        }
        else {
            setErrorMessage(data.message);
        }
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        setErrorMessage("");
        const target:any = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormFields((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };
    return {handleSubmit, handleChange, errorMessage};
}