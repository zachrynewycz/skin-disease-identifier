import { createContext, useContext, useState, ReactNode } from "react";

interface ClassPrediction {
    [key: string]: number;
}

const PredictionContext = createContext<
    | {
          modelResult: ClassPrediction[];
          setModelResult: (result: ClassPrediction[]) => void;
      }
    | undefined
>(undefined);

export function usePredictionContext() {
    const context = useContext(PredictionContext);

    if (!context) {
        throw new Error("usePredictionContext must be used within a usePredictionProvider");
    }
    return context;
}

export function PredictionProvider({ children }: { children: ReactNode }) {
    const [modelResult, setModelResult] = useState<ClassPrediction[]>([
        { Cellulitis: 0 },
        { Impetigo: 0 },
        { "Athlete Foot": 0 },
        { "Nail Fungus": 0 },
        { Ringworm: 0 },
        { "Cutaneous-Larva-Migrans": 0 },
        { Chickenpox: 0 },
        { Shingles: 0 },
    ]);

    return <PredictionContext.Provider value={{ modelResult, setModelResult }}>{children}</PredictionContext.Provider>;
}
