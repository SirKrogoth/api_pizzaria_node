import { Request, Response } from "express";
import {ListItensByOrdemService} from '../../services/order/ListItensByOrderService';

class ListItensByOrdemController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;

        const listItensByOrder = new ListItensByOrdemService();

        const items = await listItensByOrder.execute({
            order_id
        });

        return res.json(items);

    }
}

export {ListItensByOrdemController}