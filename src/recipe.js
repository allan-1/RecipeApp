import React from 'react';
import Styles from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={Styles.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => <li>{ (ingredient.text)}</li>)}
            </ol>
            <p className={Styles.calories}>Calories : {calories} J</p>
            <img className={Styles.image} src={image} alt="" />
            <p className={Styles.footer}>Made by Allan 🍕</p>
        </div>
    )
}

export default Recipe