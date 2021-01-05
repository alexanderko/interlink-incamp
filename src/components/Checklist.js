import React, { useReducer } from 'react'
import clsx from 'clsx';
import styles from './Checklist.module.css';

class LocalProgressStore {

    constructor(basePath) {
        this.basePath = basePath;
    }

    getStatus(name) {
        return this.getItemsMap()[name] == 1;
    }

    saveStatus({name, done}) {
        const items = this.getItemsMap();
        items[name] = done ? 1 : 0;
        window.localStorage.setItem(this.getDocPath(), JSON.stringify(items));
    }

    getItemsMap() {
        return JSON.parse(
            window.localStorage.getItem(this.getDocPath()) || '{}'
        );
    }

    getDocPath() {
        return window.location.pathname.replace(this.basePath, '').replace(/\/$/, '');
    }
}

const fakeStore = {
    getStatus: () => false,
    saveStatus: () => undefined
}

const progressStore = typeof window === "undefined" ? fakeStore : new LocalProgressStore('/docs/');

export default function Checklist({children}) {
    const [items, dispatch] = useReducer(itemsReducer, textToItems(children))
    const itemsDone = items.reduce((sum, item) => sum + (item.done ? 1 : 0), 0);
    return (
        <div>
            <progress value={itemsDone} max={items.length}> {itemsDone} of {items.length} </progress>
            <ul>
                {items.map((item, index) => <Item key={index} item={item} onToggle={dispatch} />)}
            </ul>
        </div>
    )
}

function itemsReducer(items, item) {
    const newItems = [...items];
    const updateItem = {
        ...item,
        done: !item.done
    }
    newItems[items.indexOf(item)] = updateItem;

    progressStore.saveStatus(updateItem);

    return newItems;
}


function Item ({item, onToggle}) {
    const {name, done} = item;
    return (
        <li className={clsx({[styles.done]: done})}>
            <label>
                <input type="checkbox" checked={done} onChange={() => onToggle(item)} /> {name}
            </label>
        </li>
    );
}

function textToItems(text) {
    return text.split('* ').slice(1).map(name => {
        return  {
            name: name,
            done: progressStore.getStatus(name)
        }
    });
}
