export default defineNuxtPlugin((nuxtApp) => {
  // access cookie for auth
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    const auth = useStoreApiAuth();
    // apply apollo client token
    token.value = auth.token$;
  });
});
