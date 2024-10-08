import { Request } from 'express'

export default interface IStorageFileServices {
    save(request: Request): Promise<string>
    delete(filePath: string): Promise<boolean>
}