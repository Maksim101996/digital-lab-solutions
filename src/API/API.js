import axios from "axios"


export const getPosts = () => {
	return axios.get("https://cloud.codesupply.co/endpoint/react/data.json")
}