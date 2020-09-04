import ThemeContainer from "../Context/theme/ThemeContainer";
import { UserContext } from "../store/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </UserContext>
  );
}

export default MyApp;
