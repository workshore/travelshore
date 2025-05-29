export const USER_PATHS = {
    landing: "",
    authRoute: "/auth/(.*)",
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    verification: "/auth/verify",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    appRoute: "/app/(.*)",
    tripDesigner: "/app/trip",
    likes: "/app/likes",
    myTrips: "/app/my-trips",
    accountSettings: "/app/settings",
    chatDemo: '/app/chatbot-demo'
}

export const BACKEND_BASE_URL = window.location.hostname.includes("webflow.io") ? 'https://travelshore-backend-proxy.vercel.app/api' : 'http://localhost:3000/api';

export const BACKEND_PROTECTED_BASE_URL = window.location.hostname.includes("webflow.io") ? 'https://travelshore-backend-proxy.vercel.app/api/protected' : 'http://localhost:3000/api/protected';

export const REQ_HEADERS = {
    'Content-Type': 'application/json'
}

export const createReqHeaders = (token = null) => {
    if (token) {
        return {
            ...REQ_HEADERS,
            'Authorization': `Bearer ${token}`,
        };
    }
    return REQ_HEADERS;
}

export const setRefreshToken = (refreshToken) => {
    const cookieName = 'refresh_token';
    const cookieValue = refreshToken;
    const maxAge = 60 * 60 * 24 * 7;
    const isSecure = window.location.protocol === 'https:';

    // document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=${maxAge}; SameSite=Strict; ${
    //   isSecure ? 'Secure;' : ''
    // } HttpOnly`;

    document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=${maxAge}; SameSite=Strict; ${isSecure ? 'Secure;' : ''
        }`;
}

export const getRefreshToken = () => {
    const cookies = document.cookie.split('; ');
    const refreshTokenCookie = cookies.find((cookie) => cookie.startsWith('refresh_token='));
    
    return refreshTokenCookie ? refreshTokenCookie.split('=')[1] : null;
}
  
