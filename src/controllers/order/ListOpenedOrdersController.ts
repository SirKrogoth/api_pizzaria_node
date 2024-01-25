import {Request, Response} from 'express';
import {ListOpenedOrdersService} from '../../services/order/ListOpenedOrdersService';

class ListOpenedOrdersController{
    async handle(req: Request, res: Response){
        const listOpenedOrder = new ListOpenedOrdersService();

        const listOrders = await listOpenedOrder.execute();

        return res.json(listOrders);
    }
}

export {ListOpenedOrdersController}