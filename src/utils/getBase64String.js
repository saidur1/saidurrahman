"use client";

async function imageToBase64(url) {
    try {
        // Fetch the image from the URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Failed to fetch image: ${response.status} ${response.statusText}`
            );
        }

        // Convert the image data to base64
        const buffer = await response.arrayBuffer();
        const base64String = btoa(
            new Uint8Array(buffer).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );

        return base64String;
    } catch (error) {
        console.error(`Error fetching or converting image: ${error.message}`);
        return null;
    }
}

export async function getBase64(imageUrl) {
    imageToBase64(imageUrl)
        .then((base64String) => {
            if (base64String) {
                return base64String;
            }
        })
        .catch((error) => console.error(`Error: ${error.message}`));
}
