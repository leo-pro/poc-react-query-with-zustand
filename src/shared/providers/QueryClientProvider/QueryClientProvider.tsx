import { ReactNode } from 'react'

import { QueryClientProvider as TanstackQueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import appQueryClient from '@/shared/configs/react-query'


export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = appQueryClient()

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      {/* DOCS: Check devtools docs for more configs - https://tanstack.com/query/latest/docs/framework/react/devtools */}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </TanstackQueryClientProvider>
  )
}
