import {useEffect, useState} from "react";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
}

export default function (path: String, init?: RequestInit) {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        (async function () {
            const response: Response = await fetch(`/api/v1${path}`, init);
            if (response.ok) {
                const data = await response.json();
                setFetchedData(data);
            }
        })();
    }, [init, path]);

    return fetchedData;
}