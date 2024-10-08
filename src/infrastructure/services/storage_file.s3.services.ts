import { Request } from "express";
import { Fields, Files, formidable } from "formidable";
import path, { resolve } from "path";
import AWS from 'aws-sdk';
import IStorageFileServices from "src/interface/services/storage_file.services.js";
import fs from 'fs';
import { injectable } from "inversify";

@injectable()
export default class StorageFileS3Services implements IStorageFileServices {

    private form = formidable({
        uploadDir: path.join('.uploads/'),
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024, // 200MB
        multiples: false,
    })

    private s3 = new AWS.S3({
        region: process.env.AWS_REGION,
    });

    async save(request: Request): Promise<string> {
        const [filePath, newFilename, mineType] = await this._saveFile(request);
        const bufferFile: Buffer = fs.readFileSync(filePath);
        const uploadParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Body: bufferFile,  
            Key: newFilename,
            ContentType: mineType,
        };
        try{
            const data = await this.s3.upload(uploadParams).promise();
            fs.unlinkSync(filePath);
            return data.Location;
        }catch(e){
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            throw e;
        }
    }

    private _saveFile(request: Request): Promise<string[]>{
        return new Promise((resolve, reject) => {
            this.form.parse(request, (err: any, fields: Fields, files: Files) => {
                if (err) {
                    return reject(err);
                }
                const fileFieldName = Object.keys(files)[0];

                const file = files[fileFieldName][0];

                const filePath: string = file.filepath;

                return resolve([filePath, file.newFilename, file.mimetype]);
            });
        });
    }

    delete(filePath: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}