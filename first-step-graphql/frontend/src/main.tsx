import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Books from "./Books.tsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gpl,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      {/* <App /> */}
      <Books />
    </ApolloProvider>
  </StrictMode>
);
