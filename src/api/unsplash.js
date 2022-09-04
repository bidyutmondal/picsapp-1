import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID f5OmeQTNq29yxkWKIip70BjXEkDOcLnayNYfgHYnA-M",
	},
});
