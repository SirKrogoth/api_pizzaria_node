import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticaded } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticaded, new DetailUserController().handle);

export { router };