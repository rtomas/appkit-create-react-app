import React from 'react';
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
import { arbitrum, mainnet, polygon, acala, chiliz, berachainTestnetbArtio, AppKitNetwork, sepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

import logo from './logo.svg';
import './App.css';


// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.REACT_APP_PROJECT_ID || ""

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://reown.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [arbitrum, mainnet, polygon, acala, chiliz, berachainTestnetbArtio, sepolia];

const generalConfig = {
  projectId,
  metadata,
  networks
}

// 3. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter(generalConfig)

// 4. Create modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
})

function App() {
  return (
    <div className="App">
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <w3m-button />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
