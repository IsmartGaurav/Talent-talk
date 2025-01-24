import StreamClientProvider from '@/components/providers/StreamClientProvider'
import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <StreamClientProvider>{children}</StreamClientProvider>
  )
}

export default layout