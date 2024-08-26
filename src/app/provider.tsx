"use client"
import React from 'react'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const Provider = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Provider