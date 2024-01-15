import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    return res.json({ 
        ok: true,
        nome: "Sujeito Pizza"
    })
});

export { router };