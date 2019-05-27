import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';

@JsonController('/examples')
export class ExampleController {

  @Get()
  getAll() {
    console.log('ntm');
    return 'This action returns all examples';
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
