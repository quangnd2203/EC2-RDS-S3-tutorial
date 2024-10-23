export default interface ISocialUseCases {
    googleAuth(): Promise<string>
}