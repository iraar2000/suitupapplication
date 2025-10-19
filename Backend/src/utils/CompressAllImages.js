import path from "path";
import { ImageCompress } from "../config/imageCompress.js";

export async function CompressAll(InPathInit, OutPathInit,Nbrfiles, width, qlty){
    const OutPath = path.join(OutPathInit, "..");
    const InPath = path.join(InPathInit, "..");

    for(let i=0; i<Nbrfiles; i++) {
        let ImageInPath = path.join(InPath, `image${i}.jpg`);
        let ImageOutPath = path.join(OutPath, `image${i}_${width}.jpg`);
        ImageCompress(width, qlty, ImageInPath, ImageOutPath);
    }

}
