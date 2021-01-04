import React, { useReducer } from 'react'
import clsx from 'clsx';
import styles from './Checklist.module.css';

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
    newItems[items.indexOf(item)] = {
        ...item,
        done: !item.done
    };

    return newItems;
}


function Item ({item, onToggle}) {
    const {text, done} = item;
    return (
        <li className={clsx({[styles.done]: done})}>
            <label>
                <input type="checkbox" checked={done} onChange={() => onToggle(item)} /> {text}
            </label>
        </li>
    );
}

function textToItems(text) {
    return text.split('* ').slice(1).map(itemText => ({text: itemText, done: false}));
}