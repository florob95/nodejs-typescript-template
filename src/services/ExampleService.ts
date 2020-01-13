import { Example } from '../models/Example'

export class ExampleService {
    private examples = [new Example('example 1'), new Example('example 2')]

    findAll(): Example[] {
        return this.examples
    }
}
