import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

export const tasks: ITask[] = [
  {
    id: uuidv4(),
    content: 'Estudar React',
    completed: false,
  },
  {
    id: uuidv4(),
    content: 'Estudar Next.js',
    completed: false,
  },
  {
    id: uuidv4(),
    content: 'Estudar Node.js',
    completed: false,
  },
  {
    id: uuidv4(),
    content: 'Estudar TypeScript',
    completed: false,
  },
  {
    id: uuidv4(),
    content:
      'Estudar React Native e Expo e Styled Components e etc e etc e etc etc e etc e etc etc e etc e etc etc e etc e etc',
    completed: true,
  },
];
