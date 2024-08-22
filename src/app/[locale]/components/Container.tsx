import React from 'react'

type ContainerProps={
    children:React.ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className='bg-secondary h-[calc(100vh-100px)] overflow-hidden overflow-y-scroll px-10 py-6'>{children}</div>
  )
}

export default Container