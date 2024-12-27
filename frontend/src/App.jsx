import Router from './Router'
import AuthProvider from './auth/AuthContext'

import "./components/fontAwesomeLibrary"

function App() {
    
    return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    ) 
}

export default App
