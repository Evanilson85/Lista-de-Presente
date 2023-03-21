import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL_API

export const api = axios.create({
  baseURL: url,
  responseType: 'json',
  headers: {},
})
