import { useEffect, useState } from 'react';

const useFood = () => {
    const [foods, setFoods] = useState([]);
    const [breakfasts, setBreakfasts] = useState([]);
    const [lunchs, setLunchs] = useState([]);
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    useEffect(() => {
        setBreakfasts(foods.filter(food => food.type === 'breakfast'))
        setLunchs(foods.filter(food => food.type === 'lunch'))
        setDinners(foods.filter(food => food.type === 'dinner'))
    }, [foods])

    return { foods, breakfasts, lunchs, dinners };
};

export default useFood;