"use client";
import { useState } from "react";
import { getPrediction } from "../lib/get-prediction";
import { usePredictionContext } from "../context/PredictionContext";

export default function FileUpload() {
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setModelResult } = usePredictionContext();

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || !event.target.files[0]) return;

        setUploadedImage(event.target.files[0]);
        setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = async () => {
        if (!uploadedImage) return;
        setIsLoading(true);

        const img = document.createElement("img");
        img.src = uploadedImageUrl;

        try {
            const response = await getPrediction(img);
            response && setModelResult(response);
        } catch (error) {
            console.error("An error has occured", error);
        }

        setIsLoading(false);
        setUploadedImage(null);
        setUploadedImageUrl("");
    };

    return (
        <div className="flex items-center justify-center mt-10 font-centraBook text-lg">
            <input
                onChange={handleUpload}
                type="file"
                className=" text-gray-500 file:py-1.5 file:pt-2 file:px-6 file:bg-blue-600 file:border-0 file:rounded-md file:text-white w-40"
            />

            <button
                onClick={handleSubmit}
                disabled={!uploadedImage}
                className="bg-neutral-800 text-white py-1.5 pt-2 px-6 rounded-md disabled:opacity-50"
            >
                {isLoading ? (
                    <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full " />
                ) : (
                    "Process"
                )}
            </button>

            {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded" className="w-28 rounded-md ml-10" />}
        </div>
    );
}
