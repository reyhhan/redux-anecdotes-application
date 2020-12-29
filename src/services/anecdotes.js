import axios from 'axios'

const baseURL = 'http://localhost:3002/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes : 0 }
    const response = await axios.post(baseURL, object)
    return response.data
}

const updateObject = async (id, content ) => {
    const response = await axios.put(`${baseURL}/${id}`, content)
    return response.data

}

export default { getAll, createNew, updateObject }