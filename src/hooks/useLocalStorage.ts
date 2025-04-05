import { useState, useEffect } from 'react'
import Notes from '../types/NotesType'

// When typing an array of objects, one can also use the Array<Notes> notation!
const useLocalStorage = (key: string, defaultValue: Notes[]) => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      )
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage
