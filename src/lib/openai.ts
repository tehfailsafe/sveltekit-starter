import { OpenAI } from 'openai';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';
const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });
export default openai;
