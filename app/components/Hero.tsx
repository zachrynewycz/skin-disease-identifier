import FileUpload from "./FileUpload";

function Hero() {
    return (
        <section className="mx-auto max-w-7xl text-center py-24">
            <h1 className="text-3xl lg:text-6xl max-w-2xl mx-auto font-centraBold text-neutral-900">
                Skin Disease Prediction with Machine Learning
            </h1>
            <p className="mt-5 text-neutral-500 font-centraBook">
                To get started, please upload an image for the model to analyze and predict your skin disease.
            </p>
            <FileUpload />
        </section>
    );
}

export default Hero;
