'use client';
import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";

interface ProviderProps {
  children : React.ReactNode
}

export default function Provider ({children} : ProviderProps) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}