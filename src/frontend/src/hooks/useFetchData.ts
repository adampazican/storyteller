import {useEffect, useState} from "react";

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",

}

export default function (url: String, method?: HttpMethod) {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        (async function () {
            const data: Response = await fetch('/api/v1/', {
                method: method || HttpMethod.GET
            });
            const newPosts = await data.json();
            setFetchedData(newPosts);
        })();
    }, []);

    return fetchedData;
}