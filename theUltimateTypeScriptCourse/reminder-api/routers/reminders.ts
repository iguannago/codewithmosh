import { Router } from 'express';
const router = Router();
import CreateReminderDto from '../dtos/createReminderDto';
import UpdateReminderDto from '../dtos/updateReminderDto';
import Reminder from '../models/reminder';
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

router.put('/', (req, res) => {
  console.log('put reminder...');
  if (!req.query.id) {
    return res.status(422).send('{"error": "id is not valid"}');
  }
  const updateReminderDto = req.body as UpdateReminderDto;
  const reminderId = req.query.id;

  var reminderToUpdate = reminderList.find(
    (r) => r.id.toString() == reminderId?.toString()
  );

  if (reminderToUpdate) {
    reminderToUpdate.title = updateReminderDto.title;
    reminderToUpdate.isComplete = updateReminderDto.isComplete;
    var remindeListToUpdate = reminderList.filter(
      (r) => r.id.toString !== reminderId?.toString
    );
    remindeListToUpdate.push(reminderToUpdate);
    res.status(200).json(reminderToUpdate);
  } else {
    res.status(404).json(updateReminderDto);
  }
});

export default router;
