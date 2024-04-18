import { useQuery } from "react-query"

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(`DB Error ${err.message}`);
    }
};


const useFetchUrl = (url, urlType) => {
    return useQuery(urlType, async () => fetchData(url), {
        useErrorBoundary: (err) => err.response?.status >= 500,
    });
}

export default useFetchUrl