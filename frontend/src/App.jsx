import Router from './Router'
import AuthProvider from './auth/AuthContext'
import { Helmet } from 'react-helmet';
import "./components/fontAwesomeLibrary"

function App() {
    
    return (
      <AuthProvider>

        <Helmet>
          <title>AI Learning Platform</title>
          <meta name="description" content="Learn new skills and find jobs that match your talents" />
        </Helmet>

        <Router />
      </AuthProvider>
    ) 
}

export default App
