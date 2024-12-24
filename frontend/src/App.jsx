import Router from './Router'
import AuthProvider from './auth/AuthContext'

function App() {
    console.log(import.meta.env.VITE_APP_API_URL)
    
    return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    ) 
}

export default App
