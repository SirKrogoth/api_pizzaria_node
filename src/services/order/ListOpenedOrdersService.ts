import prismaClient from "../../prisma";

class ListOpenedOrdersService{
    async execute(){
        const order = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy:{
                created_at: 'desc'
            }
        });

        return order;
    }
}

export {ListOpenedOrdersService}