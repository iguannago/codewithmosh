import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.send('Remider list'));

export default router;
