const TYPES = {
    controller: {
        IUsersController: Symbol.for('IUsersController'),
    },
    useCases: {
        ICreateUserUseCase: Symbol.for('ICreateUserUseCase'),
    },
    repositories: {
        IUsersRepository: Symbol.for('IUsersRepository'),
    },
    mappers: {
        IUserMapper: Symbol.for('IUserMapper'),
        IUserCreateMapper: Symbol.for('IUserCreateMapper'),
    },
};

export default TYPES;