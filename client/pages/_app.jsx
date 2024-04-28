import { AuthProvider } from "../context/auth/authContext";
import { SubscribeProvider } from "../context/subscribe/subscribeContext";
import { UserProvider } from "../context/user/userContext";
import { Chakra } from "../src/Chakra";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <AuthProvider>
          <SubscribeProvider>
            <Chakra cookies={pageProps.cookies}>
              <Component {...pageProps} />
            </Chakra>
          </SubscribeProvider>
        </AuthProvider>
      </UserProvider>
    </>
  );
}

export { getServerSideProps } from "../src/Chakra";
