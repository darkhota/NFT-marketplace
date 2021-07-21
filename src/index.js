import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import tokenContractAbi from "./abi";
const theme = extendTheme({
  config: {
    initialColorMode: "dark"
  }
});

const appId = "Xqf7tAVNAPWWJnHngpHxM2E86dGum976krTasEZq";
const serverUrl = "https://dsn5dwkdmj48.usemoralis.com:2053/server";
const TOKEN_CONTRACT_ADDRESS = "0x8BC3BF53e6059f489897f0A859CF6D102fe7daa4";
// window.web3 = Moralis.Web3.enable();
// window.tokenContract = new web3.eth.Contract(
//   tokenContractAbi,
//   TOKEN_CONTRACT_ADDRESS
// );

// const mintNft = async metadataUrl => {
//   const receipt = await tokenContract.methods.createItem;
// };

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
