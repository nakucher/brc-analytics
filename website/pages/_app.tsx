import "@databiosphere/findable-ui";
import { Error } from "@databiosphere/findable-ui/lib/components/Error/error";
import { ErrorBoundary } from "@databiosphere/findable-ui/lib/components/ErrorBoundary";
import { Head } from "@databiosphere/findable-ui/lib/components/Head/head";
import { AppLayout as DXAppLayout } from "@databiosphere/findable-ui/lib/components/Layout/components/AppLayout/appLayout.styles";
import { Floating } from "@databiosphere/findable-ui/lib/components/Layout/components/Floating/floating";
import { Footer } from "@databiosphere/findable-ui/lib/components/Layout/components/Footer/footer";
import { Header as DXHeader } from "@databiosphere/findable-ui/lib/components/Layout/components/Header/header";
import { Main as DXMain } from "@databiosphere/findable-ui/lib/components/Layout/components/Main/main";
import { LayoutStateProvider } from "@databiosphere/findable-ui/lib/providers/layoutState";
import { createAppTheme } from "@databiosphere/findable-ui/lib/theme/theme";
import { DataExplorerError } from "@databiosphere/findable-ui/lib/types/error";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { config } from "../app/config/config";
import { ConfigProvider } from "../app/providers/config";
import { mergeAppTheme } from "../app/theme/theme";

export interface PageProps {
  pageTitle?: string;
}

export type NextPageWithComponent = NextPage & {
  AppLayout?: typeof DXAppLayout;
  Main?: typeof DXMain;
};

export type AppPropsWithComponent = AppProps & {
  Component: NextPageWithComponent;
  pageProps: PageProps;
};

function MyApp({ Component, pageProps }: AppPropsWithComponent): JSX.Element {
  // Set up the site configuration, layout and theme.
  const appConfig = config();
  const { layout, redirectRootToPath, themeOptions } = appConfig;
  const { floating, footer, header } = layout || {};
  const defaultTheme = createAppTheme(themeOptions);
  const appTheme = mergeAppTheme(defaultTheme);
  const { pageTitle } = pageProps;
  const AppLayout = Component.AppLayout || DXAppLayout;
  const Main = Component.Main || DXMain;
  return (
    <EmotionThemeProvider theme={appTheme}>
      <ThemeProvider theme={appTheme}>
        <ConfigProvider config={appConfig}>
          <Head pageTitle={pageTitle} />
          <CssBaseline />
          <LayoutStateProvider>
            <AppLayout>
              <DXHeader {...header} />
              <Main>
                <ErrorBoundary
                  fallbackRender={({
                    error,
                    reset,
                  }: {
                    error: DataExplorerError;
                    reset: () => void;
                  }): JSX.Element => (
                    <Error
                      errorMessage={error.message}
                      requestUrlMessage={error.requestUrlMessage}
                      rootPath={redirectRootToPath}
                      onReset={reset}
                    />
                  )}
                >
                  <Component {...pageProps} />
                  <Floating {...floating} />
                </ErrorBoundary>
              </Main>
              <Footer {...footer} />
            </AppLayout>
          </LayoutStateProvider>
        </ConfigProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}

export default MyApp;
