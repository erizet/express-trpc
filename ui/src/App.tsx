import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { trpc } from './utils/trpc';
import type { AppRouter } from '../../api/src/server';
import { createTRPCClient } from '@trpc/client';

function App() {
  // pages/index.tsx
console.log("inne i APP");
// const client = createTRPCClient<AppRouter>({
//   url: 'http://localhost:4000/trpc',
// });

// const bilbo = client.query('getUser', 'id_bilbo').then(val => console.log("hämtat: " + JSON.stringify(val)));
//console.log(bilbo);

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:4000/trpc'
    }));

    
    
    return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <p>
              Test av trpc
            </p>
              <Test/>
          </header>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}


function Test() {
  const hello = trpc.useQuery(["getUser", 'erik']);

  return <div>test: {JSON.stringify(hello.data)}</div>;
}
export default App;
