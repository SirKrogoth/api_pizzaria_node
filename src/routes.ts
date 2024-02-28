import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticaded } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOpenedOrdersController } from './controllers/order/ListOpenedOrdersController';
import { ListItensByOrdemController } from './controllers/order/ListItensByOrdemController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';

import multer from 'multer';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Rotas de usuários
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticaded, new DetailUserController().handle);

//Rotas de categoria
router.post('/category', isAuthenticaded, new CreateCategoryController().handle);
router.get('/categoryList', isAuthenticaded, new ListCategoryController().handle);

//Rotas de produtos
router.post('/product', isAuthenticaded, upload.single('file'), new CreateProductController().handle);
router.get('/category/products', isAuthenticaded, new ListByCategoryController().handle);

//Rotas de orders
router.post('/order', isAuthenticaded, new CreateOrderController().handle);
router.delete('/order', isAuthenticaded, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticaded, new AddItemController().handle);
router.delete('/order/remove', isAuthenticaded, new RemoveItemController().handle);
router.put('/order/finishOrder', isAuthenticaded, new FinishOrderController().handle);
router.put('/order/send', isAuthenticaded, new SendOrderController().handle);
router.get('/order/listOrders', isAuthenticaded, new ListOpenedOrdersController().handle);
router.get('/order/listItensByOrder', isAuthenticaded, new ListItensByOrdemController().handle);
router.get('/order/detail', isAuthenticaded, new DetailOrderController().handle);




export { router };