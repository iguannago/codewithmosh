import { Router } from 'express';
import CreateReminderDto from '../dtos/reminderDto';
const router = Router();

router.get('/', (req, res) => {
  res.send('List of reminders');
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.json(title);
});

export default router;
