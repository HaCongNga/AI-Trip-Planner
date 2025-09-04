import { suggestions } from '@/app/_components/Hero'
import React from 'react'

function EmptyBoxState({ onSelectOption }: any) {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-3xl text-center'>Start Planning new <strong>Trip</strong> using AI</h2>
        <p className='text-center text-gray-600'>Getting detailed instructions for your personalized trip is just a message away with our advanced chatbot assistant.</p>

        <div className='flex flex-col gap-5'>
            {suggestions.map((suggestion, index) => (
            <div key={index} 
            onClick={() => onSelectOption(suggestion.title) }
            className="flex items-cente gap-2 border rounded-xl p-3 cursor-pointer hover:border-primary hover:text-primary">
            {suggestion.icon}
            <h2 className="text-xl">{suggestion.title}</h2>
            </div>
            ))} 
        </div>

    </div>
  )
}

export default EmptyBoxState