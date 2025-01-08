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

export const BACKEND_BASE_URL = 'https://travelshore-backend-proxy.vercel.app/api';