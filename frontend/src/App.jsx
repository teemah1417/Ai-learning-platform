import Router from './Router'
import AuthProvider from './auth/AuthContext'

function App() {
    
    return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    ) 
}

export default App
