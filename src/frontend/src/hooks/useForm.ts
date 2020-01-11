import {FormEvent, useState} from "react";
import {HttpMethod} from "./useFetchData";

export default function(path: string, { onSuccessCallback, token, method, defaultState }: { onSuccessCallback?: any, token?: string, method?: HttpMethod, defaultState?: any }) {
    const [formFields, setFormFields] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const headers = {
            "Content-Type": "Application/json",
        };

        if (token) {
            // @ts-ignore
            headers["x-access-token"] = token;
        }

        if(defaultState)
        {
            defaultState = { ...defaultState, ...formFields };
        }

        const response: Response = await fetch(`/api/v1${path}`, {
            method: method || HttpMethod.POST,
            headers,
            body: JSON.stringify(defaultState || formFields)
        });

        if(response.ok) {
            const data = await response.json();
            if(onSuccessCallback) {
                onSuccessCallback(data);
            }
        }
        else {
            setErrorMessage("");
        }
    };

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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