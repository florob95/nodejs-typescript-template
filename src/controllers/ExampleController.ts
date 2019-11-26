import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  OnUndefined,
  Param,
  Post,
  Put,
} from '@florob95/routing-controllers-services';
import { BaseController } from './BaseController';
import { ExampleService } from '../services/ExampleService';

@JsonController('/examples')
export class ExampleController extends BaseController{

  constructor(private exampleService: ExampleService) {
    super();
  }

  @Get()
  @HttpCode(200)
  getAll() {
    return this.exampleService.findAll();
  }

  @Get('/:id')
  @OnUndefined(404)
  getOne(@Param('id') id: number) {
    return `This action returns example # ${id}`;
  }

  @Post()
  post(@Body() example: any) {
    return 'Saving example...';
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() example: any) {
    return 'Updating a example...';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing example...';
  }

}
