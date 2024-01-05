import axios from "axios";

export const axiosBase = axios.create({
    baseURL: "https://blog.himawari.engineerseed.com/cms",
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
            return axiosBase.post('/graphql', body)
        }
    }
}

export default Repository