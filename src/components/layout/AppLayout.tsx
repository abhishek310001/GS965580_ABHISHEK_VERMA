import React, { PropsWithChildren } from 'react'

const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='flex-1 ml-64'>
      {children}
    </div>
  )
}

export default AppLayout
