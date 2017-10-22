import axios from 'axios'
const dev = 'development';
const env = process.env.NODE_ENV || dev;

const client = axios.create({
	baseURL: env === dev ? 'http://192.168.0.103:8000':'http://192.168.0.103:8000'
});
export default client;
