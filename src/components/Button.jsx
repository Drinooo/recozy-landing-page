import { Button } from '@material-tailwind/react'
import React from 'react'

export const OrangeButton = ({variant, children}) => {
  return (
    <Button variant={variant} className="bg-orange text-button font-header shadow-none hover:bg-hoverOrangeBtn hover:shadow-none focus:opacity-[0.15">{children}</Button>
  )
}

export const TextButton = ({variant, children}) => {
  return (
    <Button variant={variant} className="flex items-center gap-2 font-header text-textButton p-0 hover:text-orange hover:bg-transparent">{children}</Button>
  )
}