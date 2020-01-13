import { expect } from 'chai'
import 'mocha'
import { Container } from 'typedi'
import { ExampleService } from '../../services/ExampleService'

describe('ExamplesService Test', () => {
    it('Find All return array', () => {
        expect(Container.get(ExampleService).findAll()).to.be.an('array')
    })
})
