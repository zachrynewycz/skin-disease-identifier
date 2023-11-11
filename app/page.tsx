import DiseaseList from "./components/DiseaseList";
import Hero from "./components/Hero";
import Results from "./components/Results";
import StatisticsChart from "./components/StatisticsChart";

export default function Home() {
    return (
        <main>
            <Hero />
            <Results />
            <DiseaseList />
        </main>
    );
}
