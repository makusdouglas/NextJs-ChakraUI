import ThemeContainer from "../Context/theme/ThemeContainer"

function MyApp({ Component, pageProps }) {
    return(
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
    );
}

export default MyApp
