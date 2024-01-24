import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticaded } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticaded, new DetailUserController().handle);
//Rotas de categoria
router.post('/category', isAuthenticaded, new CreateCategoryController().handle);
router.get('/categoryList', isAuthenticaded, new ListCategoryController().handle);

export { router };