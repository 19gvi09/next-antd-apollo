import "@/styles/globals.css";
import type {AppProps} from "next/app";
import "antd/dist/reset.css";
import {ConfigProvider, Layout} from "antd/lib"
import {ApolloGraphqlProvider} from "@/shared/graphql"

export default function App({Component, pageProps}: AppProps) {
  return (
    <ApolloGraphqlProvider>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </ApolloGraphqlProvider>
  );
}
