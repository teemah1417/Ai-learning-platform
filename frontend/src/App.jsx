import Router from './Router'
import AuthProvider from './auth/AuthContext'

function App() {
    console.log("app is initializing")
    
    /* return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    ) */ 

    return (
      <Router />
    )
}

export default App
