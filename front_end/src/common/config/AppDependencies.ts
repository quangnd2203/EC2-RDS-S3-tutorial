import { Container } from 'inversify';

export const AppDependencies = new Container();

export function injectDependencies() {
    injectUseCases();
    injectRepositories();
    injectServices();
    injectMappers();
}

/* Use Cases */
function injectUseCases() {}

/* Repositories */
function injectRepositories() {}

/* Services */
function injectServices() {}

/* Mappers */
function injectMappers() {}
