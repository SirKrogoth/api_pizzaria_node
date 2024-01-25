import prismaClient from "../../prisma";

interface ListItensByOrderRequest{
    order_id: string;
}

class ListItensByOrdemService{
    async execute({order_id}: ListItensByOrderRequest){
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        });

        return orders;
    }
}

export { ListItensByOrdemService }