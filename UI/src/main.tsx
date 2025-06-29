import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
        position="top-right"
        expand={true}
        richColors={true}
        closeButton={true}
        theme="light"
        className="font-medium"
        toastOptions={{
          style: {
            fontSize: '1rem',
            padding: '1rem'
          }
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>,
)
