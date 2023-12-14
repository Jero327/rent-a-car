import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import routes from './routes.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="pohutukawa-2023-cong.au.auth0.com"
      clientId="SlFL2RRkOXvhd9nLQjquRYvzeXQXcJsS"
      redirectUri={window.location.origin}
      audience="https://rentACar/api"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
