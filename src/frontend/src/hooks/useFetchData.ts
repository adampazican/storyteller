import {useEffect, useState} from "react";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
}

export default function (path: String, init?: RequestInit) {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        let isCancelled = false;
        (async function () {
            const response: Response = await fetch(`/api/v1${path}`, init);
            if (response.ok && !isCancelled) {
                const data = await response.json();
                setFetchedData(data);
            }
        })();

        return () => {
            isCancelled = true;
        }
    }, [init, path]);

    return fetchedData;
}