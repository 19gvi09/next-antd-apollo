import {FC, PropsWithChildren} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "./client";

export const ApolloGraphqlProvider: FC<PropsWithChildren> = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
