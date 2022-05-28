import axios from 'axios'
import { TIMEOUT } from 'dns'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})