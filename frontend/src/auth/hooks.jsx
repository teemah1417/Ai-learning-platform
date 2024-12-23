import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function useAuth () {
    return useContext(AuthContext)?.auth
  }
  
export function useConfig () {
return useContext(AuthContext)?.config
}

export function useUser () {
    const auth = useContext(AuthContext)?.auth
    //return authInfo(auth).user
    return auth.user
}
  
export function useAuthInfo () {
    const auth = useContext(AuthContext)?.auth
    //return authInfo(auth)
    return auth
} 

/*
function authInfo (auth) {
const isAuthenticated = auth.status === 200 || (auth.status === 401 && auth.meta.is_authenticated)
const requiresReauthentication = isAuthenticated && auth.status === 401
const pendingFlow = auth.data?.flows?.find(flow => flow.is_pending)
return { isAuthenticated, requiresReauthentication, user: isAuthenticated ? auth.data.user : null, pendingFlow }
} */