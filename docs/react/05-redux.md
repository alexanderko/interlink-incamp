---
id: redux
title: Redux
---

[Redux на примере игры Ханойские Башни](https://www.youtube.com/playlist?list=PLNih7cQiUOFvp6BQLen7t4M5VJn00pgsh)

https://gitlab.in6k.com/meetup/tower-of-hanoi

## 💻 Использовать react-redux в todo-list-app
- [ ] Подключить библиотеки [redux](https://redux.js.org/) и [react-redux](https://react-redux.js.org/)
- [ ] Компоненты инициируют получения данных используя hook `useDispatch`
- [ ] Компоненты получают данные используя hook `useSelector`
- [ ] После изменения статуса задачи обновляется счетчик открытых в сайдбаре. Для этого ввести событие  `TASK_STATUS_UPDATED` с пейлоадом `{ id: number, listId: number, done: boolean }` и обрабатывать его в редьюсере сайдбара. 

## State

Глобальное состояние может иметь следующий вид: 

```javascript
let state = {
    dashboard: {
        today: 1,
        lists: [
            {id: 42, name: 'inCamp'}
        ],
        openedTasks: { 
            42: 1,
            43: 1
        }
    },
    tasks: {
        42: [ 
            { id: 421, name: 'Learn Redux', done: false }
        ],
        43: [
            {id: 531, name: 'Learn React', done: true},
            {id: 532, name: 'Learn redux thunk', done: false}
        ]
    }
};
```

Статистика открытых задач вынесена в отдельную ветку `openedTasks` для простого обновления. Ключ - id списка. Значение - количество открытых задач в списке. 

Ветка `tasks` сделана в виде объекта для кеширования задач из списка. После последующих открытий списка задачи сразу будут браться из кеша и потом обновляться данными с сервера. 

## Структура папок и reducer

Структура папок повторяет основные ветки состояния. Так, reducer и actions относящиеся к ветке состояния `dashboard` находятся в одноименной папке.  

```
store/
    dashboard/
        actions.js
        reducer.js
    tasks/
        actions.js
        reducer.js
    index.js
```

Для удобства обновления состояния выделяются редьюсеры для работы с одной конкретной веткой и сливаются потом в один комбинированный редьюсер функцией [combineReducers](https://redux.js.org/api/combinereducers). Результатом работы такого редьюсера всегда будет объект. 

```javascript title="store/dashboard/reducer.js"
import { DASHBOARD_LOADED } from './actions'

function openedTasksReducer(state = {}, action) {
    // ...
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})
```

В `store/index.js` файле `combineReducers` используется для создание корневого редьюсера на основе редьюсеров веток первого уровня. 

```javascript title="store/index.js"
import { createStore } from 'redux'

import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer)
export default store
```

## Асинхронные actions

Редьюсеры по своей природе синхронные функции без побочных эффектов. В чистом redux action - это объект с  полем `type` и другими полями с данными. Для выполнения асинхронных действий используется библиотека [redux-thunk](https://github.com/reduxjs/redux-thunk). Она добавляет в store промежуточный слой (middleware) для перехвата действий типа `Function`. Если в store в отправить не объект а функцию, то ее перехватит redux-thunk и вызовет, передав ссылку на функцию dispatch уже следующего middleware (или чистого store, если других middleware нет). 

Вот как может выглядеть действие загрузки дeшборда. 

```javascript title="store/dashboard/actions.js"
export const DASHBOARD_LOADED = 'dashboard/loaded'
export const loadDashboard = dispatch => {
    fetch('/api/dashboard)
        .then(res => res.json())
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
}
```

В примере выше мы используем принятое в redux свойство `payload` для обозначения полезной нагрузки (данных) действия. Свойство это может называться и иначе и быть не единственным свойством с данными. Тут уже как решат разработчики в команде.

### Подключение redux-thunk

Что бы redux начал "понимать" action-ы с типом Function, thunk middleware необходимо внедрить в store.

```javascript {1-2,12} title="store/index.js"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
```

### middleware + Redux DevTool 

При использовании сразу нескольких расширений store (middleware, Redux DevTool) код будет немного сложнее. 

```javascript {1,4,5} title="store/index.js"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
```

:::note Redux DevTool
Описание разных вариантов подключения Redux DevTool по ссылке https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
:::

### Действия с параметрами

Часто наши асинхронные действия нуждаются в дополнительных параметрах. К примеру, для получения задач списка надо указать id списка. Для такого действия нам понадобиться функция обертка, вызвав которую мы получим асинхронное действие с "[встроенным](https://learn.javascript.ru/closure)" параметром. 

```javascript title="store/tasks/actions.js"
const TASKS_LOADED = 'tasks/loaded'
const loadTasks = listId => dispatch => {
    fetch(`/api/lists/${listId}/tasks`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}
```

Смотрите также:
* [Соглашение по наименованию действий](https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/)

### Отправка действия

```javascript
import { loadTasks } from './store/tasks/actions'

export const ListTasksPage = () => {
    const listId = useParams().id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTasks(listId))
    }, [dispatch, listId])
    const tasks = useSelector(state => state.tasks[listId])

    // rendering code here
}
```
