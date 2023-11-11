import * as tmImage from "@teachablemachine/image";

export async function getPrediction(imageElement: HTMLImageElement) {
    const BASE_URL = "https://teachablemachine.withgoogle.com/models/3GWWSVzXK/";
    const modelURL = BASE_URL + "model.json";
    const metadataURL = BASE_URL + "metadata.json";

    try {
        const model = await tmImage.load(modelURL, metadataURL);
        const maxPredictions = model.getTotalClasses();

        const prediction = await model.predictTopK(imageElement, maxPredictions, false);

        return prediction.map((item) => ({
            [item.className]: Number((item.probability * 100).toFixed(0)),
        }));
    } catch (error) {
        console.error("An error has occured", error);
    }
}
