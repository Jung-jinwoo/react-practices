import React from 'react';
import CardList from './CardList';
import cards from './assets/json/data.json';
import styles from './assets/css/KanbanBoard.css';

export default function(){
    return (
        <div className={styles.KanbanBoard}>
            <CardList key='ToDo' title={'ToDo'} cards={cards.filter((card) => card.status === 'ToDo')} />
            <CardList key='Doing' title={'Doing'} cards={cards.filter((card) => card.status === 'Doing')} />
            <CardList key='Done' title={'Done'} cards={cards.filter((card) => card.status === 'Done')} />
        </div>
    )
}