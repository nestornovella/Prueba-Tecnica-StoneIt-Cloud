import cron from 'node-cron';
import express,{ NextFunction, Request, Response } from "express"
import cors from "cors"
import morgan from 'morgan'
import router from './routes/index.routes'
import { captureRes } from "./helpers/capturRes"
import { checkTask } from './helpers/reminderMail';
export interface Error{
    message: string,
    status: number
}

const PORT = process.env.PORT || 3001

const app = express()

//err, req, res, next
app.use(express.json())
app.use(cors({
    allowedHeaders: ['Authorization', 'Content-Type'],
}))
app.use(morgan('dev'))
app.use(captureRes)
app.use('/', router)

export function startTaskReminderService() {
    cron.schedule('0 12 * * *', async () => {
      console.log('Running task reminder check...');
      await checkTask();
    });
  }

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;  
    const message = err.message || err || 'Internal Server Error';  
    res.json({ status, message });  
});





app.listen(PORT,() => console.log('conectado en puerto ' + PORT))

