import { atom } from 'nanostores'

export const counter = atom(0)

export const increment = () => {
  counter.set(counter.get() + 1)
}

export const decrement = () => {
  counter.set(counter.get() - 1)
}

export const reset = () => {
  counter.set(0)
}
