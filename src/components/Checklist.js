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
    const [items, dispatch] = useReducer(itemsReducer, children, childrenToItems);
    const itemsDone = items.reduce((sum, item) => sum + (item.done ? 1 : 0), 0);
    return (
        <div>
            <progress value={itemsDone} max={items.length}> {itemsDone} of {items.length} </progress>
            <ol>
                {items.map((item, index) => <Item key={index} item={item} onToggle={dispatch} />)}
            </ol>
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
    const {name, content, done} = item;
    return (
        <li className={clsx({[styles.done]: done})}>
            <label>
                <input type="checkbox" checked={done} onChange={() => onToggle(item)} /> {content || name}
            </label>
        </li>
    );
}

function childrenToItems (children) {
    const items = typeof children == 'string' ? textToItems(children) : nodesToItems(children);
    items.forEach(item => item.done = progressStore.getStatus(item.name))
    return items;
}  

function textToItems(text) {
    return text.split('* ').slice(1).map(name => ({name}));
}

function nodesToItems(nodes) {
    return nodes.map(li => {
        let content = li.props.children.slice(2)
        let name = content.map(nodeToText).join(' ')
        return { content, name }
    })
}

function nodeToText(node) {
    if (isString(node)) return node;
    return node.children;
}

function isString(val) {
    return typeof val == 'string';
}