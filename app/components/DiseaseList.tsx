import diseases from "../assets/diseases.json";

function DiseaseList() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl text-center font-bold text-neutral-900 font-centraBold">Skin Diseases</h1>
                <p className="text-center text-neutral-500">Learn about the eight most common seen in humans</p>

                <div className="overflow-x-auto mt-10 [&::-webkit-scrollbar]:h-0">
                    <div className="inline-flex gap-5 overflow-x-auto">
                        {diseases.map((disease, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col w-72 bg-white border border-gray-200 shadow-sm rounded-xl"
                            >
                                <div className="overflow-hidden rounded-t-xl">
                                    <img
                                        className="blur-lg hover:blur-0 h-40 w-full object-cover"
                                        src={disease.image_url}
                                        alt="disease image"
                                    />
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white font-centraBold">
                                        {disease.name}
                                    </h3>
                                    <p className="mt-3 text-gray-500 text-sm font-centraBook">{disease.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiseaseList;
