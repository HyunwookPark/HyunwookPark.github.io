var tasks = [
  {
    id: 'Task 1',
    name: '画面設計',
    start: '2020-04-13',
    end: '2020-04-20',
    progress: 80,
  },
  {
    id: 'Task 2',
    name: 'テーブル設計',
    start: '2020-04-16',
    end: '2020-04-21',
    progress: 1,
    dependencies: 'Task 1'
  },
  {
    id: 'Task 3',
    name: '技術検証',
    start: '2020-04-20',
    end: '2020-04-23',
    progress: 0,
    dependencies: 'Task 1'
  },
]
var gantt = new Gantt("#gantt", tasks);
