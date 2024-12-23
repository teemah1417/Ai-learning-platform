import Router from './Router'
import { AuthContextProvider } from './auth/AuthContext'

function App() {
    console.log("app is initializing")
    
    /* return (
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    ) */ 

    return (
      <Router />
    )
}

export default App
