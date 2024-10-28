import { IAuthenticationUseCase } from 'interface/usecases';
import { Container } from 'inversify';
import { TYPES } from '.';
import FirebaseAuthRepository from 'infrastructure/repositories/FirebaseAuthRepository';
import { IFirebaseAuthRepository } from 'interface/repositories';
import { AuthenticationUseCase } from 'domain/usecases';

export const AppDependencies = new Container();

export function injectDependencies() {
    injectUseCases();
    injectRepositories();
    injectServices();
    injectMappers();
}

/* Use Cases */
function injectUseCases() {
    AppDependencies.bind<IAuthenticationUseCase>(TYPES.useCases.IAuthenticationUseCase).to(AuthenticationUseCase);
}

/* Repositories */
function injectRepositories() {
    AppDependencies.bind<IFirebaseAuthRepository>(TYPES.repositories.IFirebaseAuthRepository).to(FirebaseAuthRepository);
}

/* Services */
function injectServices() {}

/* Mappers */
function injectMappers() {}
