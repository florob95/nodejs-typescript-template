import { Service } from 'typedi';
import { Example } from '../models/Example';

@Service()
export class ExampleService {
  private examples = [
    new Example('example 1'),
    new Example('example 2'),
  ];

  findAll(): Example[] {
    return this.examples;
  }
}
