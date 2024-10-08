import { injectable } from "inversify";
import path from "path";
import formidable, { File, Fields, Files } from "formidable";
import { Request } from "express";
import IStorageFileServices from "src/interface/services/storage_file.services.js";

@injectable()
export default class StorageFileLocalServices implements IStorageFileServices {

    private form = formidable({
        uploadDir: path.join('.uploads/'),
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024, // 200MB
        multiples: false,
    })

    async save(request: Request): Promise<string> {
        return new Promise((resolve, reject) => {
            this.form.parse(request, (err: any, fields: Fields, files: Files) => {
                if (err) {
                    return reject(err);
                }

                const fileFieldName = Object.keys(files)[0];

                const file = files[fileFieldName][0];

                const filePath: string = file.filepath;

                return resolve(filePath.replace('/app/.uploads/', '/uploads/'));
            });
        });
    }

    delete(filePath: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}