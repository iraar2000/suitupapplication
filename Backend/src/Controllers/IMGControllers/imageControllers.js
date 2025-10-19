import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import { ImageCompress } from "../../config/imageCompress.js";

    //////////////////////////////////////////////////////////////////////////////
    //
    // this section compresses all images in the input path directory to the according to the 
    // width provided  in CompressWidth
    // Width = 0-100    uncompressable
    // width = 100-800  compressable
    // width = 800<     uncompressable
    // 
    // if you want to compress all images located in a particular folder you have to call the function
    //
    // CompressAll(InputPath, outputPath, Nbrofimages, width, quality);
    //
    //////////////////////////////////////////////////////////////////////////////

export async function getCompressedImage(req, res) {
    // accessing the image file name passed via url
    const {image} = req.params;
    const width = req.query.width || 500;

    // accessing the image directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // creating the fileinput path for the image requested images
    const InputPath = path.join(__dirname, "..", "..","assets","images",image);

    // checking if the image exists
    if(!fs.existsSync(InputPath)) return res.status(404).send({message: "failed, Image not fount!",path:InputPath});

    // creating the fileout path for compressed images
    const name = path.basename(image, path.extname(image));
    const filename = width? `${name}_${width}.webp` : `${name}.webp`;
    const outputPath = path.join(__dirname, "..","..","assets","ImageCache",filename);

    // if in cache folder an image already exists the send the file
    if(fs.existsSync(outputPath)) return res.status(200).send({cachedImage: `/ImageCache/${filename}`});

    // if the image is doesn't exist in cache folder path then compress it
    await ImageCompress(parseInt(width), 80, InputPath, outputPath);

    // after the compression and saving of the file is over then return the file path
    return res.status(200).send({cachedImage: `/ImageCache/${filename}`});
}