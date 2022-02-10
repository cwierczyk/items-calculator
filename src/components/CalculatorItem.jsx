import { useEffect, useState } from "react"
import BaseButton from './BaseButton'

import minusIcon from '../assets/minus-icon.svg'
import plusIcon from '../assets/plus-icon.svg'
import trashIcon from '../assets/trash-icon.svg'

const CalculatorItem = ({ name, price, update, deleteItem, index }) => {
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(price * quantity)
    }, [quantity])

    useEffect(() => {
        update()
    }, [total])

    return (
        <div className="item grid grid-flow-row gap-y-3 lg:grid-cols-6 justify-center items-center text-center relative border-1/2 border-gray-light py-2.5 px-5 transition-all duration-300 ease-linear rounded-sm shadow-md hover:shadow-none">
            <span className="lg:col-span-2 mx-3 text-center lg:text-left text-black font-medium opacity-40">{ name.toUpperCase() }</span>
            <span className="lg:col-span-1 mx-3 font-bold text-primary">{ price } $</span>
            <div className="lg:col-span-2 flex justify-center items-center">
                <BaseButton type="counter" action={() => setQuantity(quantity > 0 ? quantity - 1 : quantity)} icon={minusIcon} />
                <input className="w-12 text-center py-2 mx-2.5 border-2 transition-all duration-200 ease-linear border-primary outline-none rounded-md text-primary font-bold focus:shadow-md" type="number" onChange={(event) => setQuantity(event.target.value / 1)} value={quantity} />
                <BaseButton type="counter" action={() => setQuantity(quantity < 999 ? quantity + 1 : quantity)} icon={plusIcon} />
            </div>
            <span className="text-primary font-bold opacity-75">Total: <span className="item-total">{total}</span> $</span>
            <BaseButton target={index} moreClass="hover-show absolute -right-3" type="counter" action={deleteItem} icon={trashIcon} />
        </div>
    )
}

export default CalculatorItem