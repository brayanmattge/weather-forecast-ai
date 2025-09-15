import axios from "axios";

const BASE_URL = "http://localhost:3000/search/suggestion"

export async function getSuggestionMessage(message: string): Promise<string> {
  const result = await axios.post(`${BASE_URL}`, 
    {
      message: message
    }
  )
  return result.data;
}
