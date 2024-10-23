import { NetworkResponse } from "src/domain/entities/network_response.entities.js";

export default interface ISocialController {
    googleAuth(): Promise<NetworkResponse<string>>
}