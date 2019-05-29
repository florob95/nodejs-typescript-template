import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Request, Response } from 'express';
import { ExampleController } from './controllers/ExampleController';
import { Container } from 'typedi/Container';

useContainer(Container);

const app = createExpressServer({
  cors: {
    origin: '*',
  },
  controllers: [ExampleController],
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app listening on port 3000');
});
