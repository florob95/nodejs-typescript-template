import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import { ExampleService } from '../services/ExampleService';

@JsonController('/examples')
export class ExampleController {

  constructor(private exampleService: ExampleService) {}

  @Get()
  getAll() {
    return this.exampleService.findAll();
  }

  @Get('/:id')
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
