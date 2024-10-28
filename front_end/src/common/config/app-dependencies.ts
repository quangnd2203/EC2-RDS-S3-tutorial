import { Container } from 'inversify';
import { TYPES } from '.';
import { AuthenticationUseCase } from 'domain/usecases';
import { FirebaseAuthRepository } from 'infrastructure/repositories';
import { IFirebaseAuthRepository } from 'interface/repositories';
import { IAuthenticationUseCase } from 'interface/usecases';

export const appDependencies = new Container();

export function injectDependencies() {
    console.log('injectDependencies');
    injectUseCases();
    injectRepositories();
    injectServices();
    injectMappers();
}

/* Use Cases */
function injectUseCases() {
    appDependencies.bind<IAuthenticationUseCase>(TYPES.useCases.IAuthenticationUseCase).to(AuthenticationUseCase);
}

/* Repositories */
function injectRepositories() {
    appDependencies.bind<IFirebaseAuthRepository>(TYPES.repositories.IFirebaseAuthRepository).to(FirebaseAuthRepository);
}

/* Services */
function injectServices() {}

/* Mappers */
function injectMappers() {}
