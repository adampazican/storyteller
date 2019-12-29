import {useHistory} from "react-router";
import {FormEvent, useState} from "react";
import {HttpMethod} from "./useFetchData";

export default function(path: string, { onSuccessCallback, token }: { onSuccessCallback?: any, token?: string }) {
    const history = useHistory();
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

        const response: Response = await fetch(`/api/v1${path}`, {
            method: HttpMethod.POST,
            headers,
            body: JSON.stringify(formFields)
        });
        const data = await response.json();

        if(response.ok) {
            history.push("/");
            if(onSuccessCallback) {
                onSuccessCallback(data);
            }
        }
        else {
            setErrorMessage(data.message);
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