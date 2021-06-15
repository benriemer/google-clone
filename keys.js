import { config } from 'dotenv'

config()
// API Key - https://developers.google.com/custom-search/v1/using_rest
export const API_KEY=process.env.API_KEY

// Context Key - https://cse.google.com/cse/create/new
export const CONTENT_KEY=process.env.CONTENT_KEY
