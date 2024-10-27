const TYPES = {
    controller: {
        IUsersController: Symbol.for('IUsersController')
    },
    useCases: {
        IUserUseCases: Symbol.for('IUserUseCases')
    },
    repositories: {
        IUsersRepository: Symbol.for('IUsersRepository'),
        IFirebaseRepository: Symbol.for('IFirebaseRepository')
    },
    services: {
        IStorageFileServices: Symbol.for('IStorageFileServices')
    },
    mappers: {
        IUserMapper: Symbol.for('IUserMapper'),
        IUserCreateMapper: Symbol.for('IUserCreateMapper'),
        IUserUpdateMapper: Symbol.for('IUserUpdateMapper')
    }
};

export default TYPES;
