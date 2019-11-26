import { Request, Response } from 'express';
import { ExampleController } from './controllers/ExampleController';
import { createExpressServer } from '@florob95/routing-controllers-services';
import { ExampleService } from './services/ExampleService';

const app = createExpressServer({
  cors: {
    origin: '*',
  },
  controllers: [ExampleController],
  services: [ExampleService]
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app listening on port 3000');
});
