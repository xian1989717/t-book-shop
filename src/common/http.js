import axios from 'axios'
const URL = 'http://localhost:3000/'

function get (url) {
  return axios.get(URL + url)
}
export default {
  get
}