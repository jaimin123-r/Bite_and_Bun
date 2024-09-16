import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Ex from './context/Ex'

// https://themewagon.github.io/feane/index.html?

// Import your publishable key
const PUBLISHABLE_KEY = 'pk_test_Z2xvcmlvdXMtZHJhZ29uLTQuY2xlcmsuYWNjb3VudHMuZGV2JA'

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
    {/* <Ex /> */}
    </ClerkProvider>
  </StrictMode>,
)
