import sharp from "sharp"

export async function ImageCompress(width, qlty, InputPath, outPath) {
    try {

        console.log(width, qlty, InputPath, outPath);

        let image = sharp(InputPath);
        if(width) image.resize(width);

        await image.webp({quality: qlty}).toFile(outPath)
        return outPath;
    } catch (error) {
        console.log("The function failed to compress and resize the image with error: ", error)
        return "fail"
    }
}