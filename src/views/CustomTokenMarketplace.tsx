import { Orders, Stat } from "@liqnft/candy-shop";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRef } from "react";
import styled from "styled-components";
import {
  candyShop
} from "../utils/candy-shop";

const CustomTokenMarketplace: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(candyShop);

  return (
    <DesContainer>
      <Stat
        candyShop={candyShopRef.current}
        title={"Marketplace"}
        description={
          "Candy Shop supports custom SPL tokens as currency. Just specify your token symbol and decimals."
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShopRef.current}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default CustomTokenMarketplace;

const DesContainer = styled.div`
  width: 100%;
`;
