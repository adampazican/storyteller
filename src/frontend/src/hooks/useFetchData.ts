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
            const data: Response = await fetch(`/api/v1${path}`, init);
            if (data.ok) {
                const newPosts = await data.json();
                setFetchedData(newPosts);
            }
        })();
    }, []);

    return fetchedData;
}