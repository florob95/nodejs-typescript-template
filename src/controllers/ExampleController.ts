import {
    Body,
    Delete,
    Get,
    HttpCode,
    JsonController,
    OnUndefined,
    Param,
    Post,
    Put
} from '@florob95/routing-controllers-services'
import { BaseController } from './BaseController'
import { ExampleService } from '../services/ExampleService'
import { Example } from '../models/Example'

@JsonController('/examples')
export class ExampleController extends BaseController {
    constructor(private exampleService: ExampleService) {
        super()
    }

    @Get()
    @HttpCode(200)
    getAll(): Example[] {
        return this.exampleService.findAll()
    }

    @Get('/:id')
    @OnUndefined(404)
    getOne(@Param('id') id: number): string {
        return `This action returns example # ${id}`
    }

    @Post()
    post(@Body() example: Example): string {
        return 'Saving example...'
    }

    @Put('/:id')
    put(@Param('id') id: number, @Body() example: Example): string {
        return 'Updating a example...'
    }

    @Delete('/:id')
    remove(@Param('id') id: number): string {
        return 'Removing example...'
    }
}
