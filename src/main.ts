import express from 'express';
import { Medusa } from 'medusa-extender';
import { resolve } from 'path';
import { ProductModule } from './modules/product/product.module';

const config = require('../medusa-config');

async function bootstrap() {
    const expressInstance = express();
    
    await new Medusa(resolve(__dirname, '..'), expressInstance).load([ProductModule]);
    
    const port = config?.serverConfig?.port ?? 9000;
    expressInstance.listen(port, () => {
        console.info('Server successfully started on port ' + port);
    });
}

bootstrap();
