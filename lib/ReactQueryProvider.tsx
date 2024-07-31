//ReactQueryProvider.js
//we are creating a separate file because it is a client component
"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

//we invoke the QueryClient at the top
const queryClient = new QueryClient();


const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {

  return (
        <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>
  );
};

export default ReactQueryProvider;