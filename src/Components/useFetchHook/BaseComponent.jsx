import useFetch from "./use-fetch.jsx";

export default function () {
    const url = "https://swapi.dev/api/planets/";
    const {data, isLoading, error} = useFetch(url);

    if (isLoading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Error occured</p>
    }

    return (
        <ol>
            {data.results.map(el => <li key = {el.name}>{el.name}</li>)}
        </ol>
    )
}