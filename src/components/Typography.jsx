import React from 'react'
import { Typography } from "@material-tailwind/react";

export const CustTypo = ({children, color, variant}) => {
  return (
    <Typography variant={variant} color={color}>{children}</Typography>
  )
}