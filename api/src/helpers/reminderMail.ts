import { prisma } from './prismaSingelton';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function reminderMail(email: string, tasks: { title: string, deadline: Date }[]) {

  const taskList = tasks.map(task => 
    `- "${task.title}" vence el ${task.deadline.toLocaleDateString()}`
  ).join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'recordatorio de tarea próxima a vencer',
    text: `tu tarea ${taskList} esta proxima a vencer. no olvides completarla`
  }
  await transporter.sendMail(mailOptions);
}

export async function checkTask() {
  const task = new Date();
  task.setDate(task.getDate() - 1);

  const usersWithTasks = await prisma.user.findMany({
    where: {
      tasks: {
        some: {
          deadline: {
            lte: task,
            gt: new Date()
          },
          status: {
            not: 'completado'
          }
        }
      }
    },
    include: {
      tasks: {
        where: {
          deadline: {
            lte: task,
            gt: new Date()
          },
          status: {
            not: 'completado'
          }
        },
        select: {
          title: true,
          deadline: true
        }
      }
    }
  });

  for (const user of usersWithTasks) {
    if (user.tasks.length > 0) {
      await reminderMail(user.email, user.tasks);
      console.log(`Reminder sent to user: ${user.email} for ${user.tasks.length} tasks`);
    }
  }

}