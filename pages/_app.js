import React, { useState } from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import { darkTheme, lightTheme } from "../styles/theme/darkTheme";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [isDark, setIsDark] = useState(true);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
