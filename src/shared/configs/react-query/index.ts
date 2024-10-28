import { QueryClient, QueryClientConfig } from "@tanstack/react-query"

const ONE_MINUTE = 60 * 1000
const FIVE_MINUTES = ONE_MINUTE * 5

const CLIENT_DEFAULT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: FIVE_MINUTES
    },
  },
}

const appQueryClient = (config?: QueryClientConfig) => {
  return new QueryClient({...CLIENT_DEFAULT_CONFIG, ...config})
}

export default appQueryClient