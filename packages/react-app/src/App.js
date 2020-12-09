import React from "react";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, Link, StyledTitle, StyledNote, BigEmoji } from "./components";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { useWeb3React } from "@web3-react/core";

import { addresses, abis } from "@project/contracts";



function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function App() {
  // const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const { account, active } = useWeb3React();

  

  return (
    <div>
      <Header>
        <StyledTitle> 🎅 Secret ETH Santa </StyledTitle>
        {!account ? ( 
          <StyledNote> 🎄  Please connect wallet 🎄 </StyledNote>
        ):(
          <StyledNote> Wallet Connected: {account} </StyledNote>
        )}
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
      </Header>
      <Body>
        <BigEmoji> 🎄 </BigEmoji>
      </Body>
    </div>
  );
}

export default App;
