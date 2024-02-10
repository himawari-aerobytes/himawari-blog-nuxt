import axios from "axios";

const runtimeConfig = useRuntimeConfig();
const blogLink = runtimeConfig.public.blogLink;
export const axiosBase = axios.create({
    baseURL: blogLink,
    headers: {
        'Content-Type': 'application/json'
    }
})

const Repository = (query: string, { variables }: Record<string, any> = {}) => {
    const body = {
        query,
        variables
    }
    return {
        getWp() {
            return axiosBase.post('/cms/graphql', body)
        }
    }
}

export default Repository