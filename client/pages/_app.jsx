import { AuthProvider } from "../context/auth/authContext";
import { SubscribeProvider } from "../context/subscribe/subscribeContext";
import { UserProvider } from "../context/user/userContext";
import { Chakra } from "../src/Chakra";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: {...pageProps },
}) {
  return (
    <>
      <UserProvider>
        <AuthProvider>
          <SubscribeProvider>
            <Chakra cookies={pageProps.cookies}>
              <SessionProvider>
                <Component {...pageProps} />
              </SessionProvider>
            </Chakra>
          </SubscribeProvider>
        </AuthProvider>
      </UserProvider>
    </>
  );
}

export { getServerSideProps } from "../src/Chakra";
