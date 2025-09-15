import { useActionState, useState } from 'react'
import type { Location } from '../models/location'
import './Suggestions.css'
import { getSuggestionMessage } from '../services/suggestionService';

const listSuggestions = [
    'A good local to visit in ',
    'Local restaurant to visit in ',
    'A relevant story about '
]

export interface SuggestionsProps {
    city: string,
    currentCity: string
}

function Suggestions({ city, currentCity }: SuggestionsProps) {
    const [message, setMessage] = useState<string>('');

    const suggestionMessage = async (index: number) => {
        try {
            const request = listSuggestions[index] + city;
            const result = await getSuggestionMessage(request);
            setMessage(result);
        } catch (error) {
            console.error("Error trying to get suggestion from AI:", error);
        }
    };

    return (
        <div className='suggestions'>
            { listSuggestions.map((msg, index) => (
                <button className='suggestion-button' key={index}
                    onClick={() => suggestionMessage(index)}>{msg + (currentCity === city ? city : currentCity)}</button>
            ))}

            { message &&
                <div className='message-dialog'>
                    <span className='fade-in'>{message}</span>
                </div>
            }
        </div>
    )
}

export default Suggestions