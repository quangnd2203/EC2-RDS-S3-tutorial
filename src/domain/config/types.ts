const TYPES = {
    controller: {
        IUsersController: Symbol.for('IUsersController'),
        ISocialController: Symbol.for('ISocialController'),
    },
    useCases: {
        IUserUseCases: Symbol.for('IUserUseCases'),
        ISocialUseCases: Symbol.for('ISocialUseCases'),
    },
    repositories: {
        IUsersRepository: Symbol.for('IUsersRepository'),
        IFirebaseRepository: Symbol.for('IFirebaseRepository'),
    },
    services:{
        IStorageFileServices: Symbol.for('IStorageFileServices'),
    },
    mappers: {
        IUserMapper: Symbol.for('IUserMapper'),
        IUserCreateMapper: Symbol.for('IUserCreateMapper'),
        IUserUpdateMapper: Symbol.for('IUserUpdateMapper'),
    },
};

export default TYPES;