import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
}

export default function (path: String, defaultState:any, init?: RequestInit) {
    const [fetchedData, setFetchedData] = useState(defaultState);
    const [guard, setGuard] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let isCancelled = false;
        (async function () {
            if(!path.includes("undefined") && !guard){
                const response = await fetch(`/api/v1${path}`, init);
                if (response.ok && !isCancelled) {
                    const data = await response.json();
                    setFetchedData(data);
                }
                else if(!response.ok) {
                    history.push("/");
                }
                setGuard(true);
            }
        })();

        return () => {
        }
    }, [init, path, fetchedData, history, guard]);

    return [fetchedData, setFetchedData];
}