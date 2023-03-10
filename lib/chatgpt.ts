import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.CHAT_GPT,
})

const openai = new OpenAIApi(config)
export default openai;