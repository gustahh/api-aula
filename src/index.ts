import express from 'express';
import AuthenticationController from './controllers/AuthController';
import PetController from './controllers/PetController';
import { admin } from '../firebase';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './../config/swagger-output.json';
import path from 'path';
import fs from 'fs';
import { addSwaggerTag } from './middleware/tagMiddleware';

const app = express();
const port = 3000;

// Middleware para JSON
app.use(express.json());



app.use('/auth', AuthenticationController
  /*#swagger.tags = ["Auth"]*/
  /*#swagger.description = "asdasd" */
);


app.use('/pet', PetController
  /*#swagger.tags = ["Pet"]*/
);



app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}. Documentação disponível em http://localhost:3000/docs`);
});
