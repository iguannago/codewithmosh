import { Router } from 'express';
import CreateReminderDto from '../dtos/reminderDto';
import Reminder from '../models/reminder';
const router = Router();
const reminderList: Reminder[] = [];

router.get('/', (req, res) => {
  res.json(reminderList);
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminderList.push(reminder);
  res.status(201).json(reminder);
});

export default router;
