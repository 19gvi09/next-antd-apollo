import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA,
  documents: ["src/shared/graphql/requests/**/*.ts?(x)"],
  generates: {
    "./src/shared/graphql/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
};

export default config;
