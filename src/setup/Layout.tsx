import React from "react"
import { Navbar } from "components/common"

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
