export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', () => {
        console.log('the global middleware');
    }, { global: true });

    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp();
        console.log('auth middleware extended from plugins/firebaseAuth.client.js', $auth?.currentUser);
        if(!$auth?.currentUser?.uid){
            return navigateTo("/");
        }
    });
});