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
    const history = useHistory();

    useEffect(() => {
        let isCancelled = false;
        (async function () {
            if(fetchedData === defaultState){
                console.log(path)
                const response = await fetch(`/api/v1${path}`, init);
                if (response.ok && !isCancelled) {
                    const data = await response.json();
                    setFetchedData(data);
                }
                else if(!response.ok) {
                    history.push("/");
                }
            }
        })();

        return () => {
        }
    }, [init, path, defaultState, fetchedData, history]);

    return [fetchedData, setFetchedData];
}