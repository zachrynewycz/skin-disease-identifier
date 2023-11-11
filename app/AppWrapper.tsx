"use client";
import { PredictionProvider } from "./context/PredictionContext";

function AppWrapper({ children }: { children: React.ReactNode }) {
    return <PredictionProvider>{children}</PredictionProvider>;
}

export default AppWrapper;
