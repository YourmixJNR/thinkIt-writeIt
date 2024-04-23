import { AuthProvider } from "../context/auth/authContext";
import { UserProvider } from "../context/user/userContext";
import { Chakra } from "../src/Chakra";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <AuthProvider>
          <Chakra cookies={pageProps.cookies}>
            <Component {...pageProps} />
          </Chakra>
        </AuthProvider>
      </UserProvider>
    </>
  );
}

export { getServerSideProps } from "../src/Chakra";
