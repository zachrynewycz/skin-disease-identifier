import DiseaseList from "./components/DiseaseList";
import Hero from "./components/Hero";
import ResultsSection from "./components/Results/ResultsSection";

export default function Home() {
    return (
        <main>
            <Hero />
            <ResultsSection />
            <DiseaseList />
        </main>
    );
}
