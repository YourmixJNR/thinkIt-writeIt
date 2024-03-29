import { AuthProvider } from "../context/auth/authContext";
import { Chakra } from "../src/Chakra";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Chakra cookies={pageProps.cookies}>
          <Component {...pageProps} />
        </Chakra>
      </AuthProvider>
    </>
  );
}
