import TaskList from "./TaskList";

import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: "TaskList",
  tags: ['AutoDocs'],
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>]
};

export const Default = {
  args: {
    loading: false,
    tasks: [
        {
            ...TaskStories.Default.args.task,
            id: '1',
            title: 'Create Task List Story',
        },
        {
            ...TaskStories.Default.args.task,
            id: '2',
            title: 'Get Storybook Udemy Course',
        },
        {
            ...TaskStories.Default.args.task,
            id: '3',
            title: 'Fix my life',
        },
        {
            ...TaskStories.Default.args.task,
            id: '4',
            title: 'Get some ice cream',
        },
        {
            ...TaskStories.Default.args.task,
            id: '5',
            title: 'Clear litterboxes',
        },
        {
            ...TaskStories.Default.args.task,
            id: '6',
            title: 'Go to bed',
        }
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
    args: {
        ...Loading.args,
        loading: false
    }
}

export const WithPinned = {
    args: {
        ...Default.args,
        tasks: [
            ...Default.args.tasks.slice(0,5),
            {
                ...TaskStories.Default.args.task,
                id: '6',
                title: 'Go to bed',
                state: 'TASK_PINNED'
            }
    
        ]
    }
}

// const TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'