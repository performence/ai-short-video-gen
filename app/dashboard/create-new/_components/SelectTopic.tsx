'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { useState } from 'react'

export default function SelectTopic({ onUserSelect }: any) {
  const options = [
    'Custom Prompt',
    'Random AI Story',
    'Scary Story',
    'Historical Facts',
    'Bed Time Stroy',
    'Motivational',
    'Fun Facts'
  ]

  const [selectValue, setSelectValue] = useState('')

  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-secondary-foreground">
        what is the topic of your video
      </p>
      <Select onValueChange={setSelectValue}>
        <SelectTrigger className="w-full mt-5 p-6 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map(item => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectValue === 'Custom Prompt' && (
        <Textarea
          className="mt-3"
          placeholder="write prompt on which you want to generate"
        />
      )}
    </div>
  )
}
