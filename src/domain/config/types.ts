const TYPES = {
    controller: {
        IUsersController: Symbol.for('IUsersController'),
    },
    useCases: {
        IUserUseCases: Symbol.for('IUserUseCases'),
    },
    repositories: {
        IUsersRepository: Symbol.for('IUsersRepository'),
    },
    services:{
        IStorageFileServices: Symbol.for('IStorageFileServices'),
    },
    mappers: {
        IUserMapper: Symbol.for('IUserMapper'),
        IUserCreateMapper: Symbol.for('IUserCreateMapper'),
    },
};

export default TYPES;