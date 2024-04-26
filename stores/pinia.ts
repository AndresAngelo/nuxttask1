import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        currentRoute: 'Login',
    }),
    actions: {
        setCurrentRoute(route: string) {
            this.currentRoute = route
        },
    },
})