import { useState } from "react"
import CalculatorItem from "./CalculatorItem"
import BaseButton from "./BaseButton"

const Calculator = ({ items }) => {
    const [total, setTotal] = useState(0)
    const [updatedItems, setUpdatedItems] = useState(items)
    const [newItem, setNewItem] = useState({
        name: '',
        price: null
    })

    const createNewItem = () => {
        if (newItem.name.length > 1 && newItem.price / 1) {
            setUpdatedItems([...updatedItems, newItem])
            setNewItem({name: '', price: null})

        }
    }

    const discardItem = (index) => {
        const filteredItems = updatedItems.filter((item, i) => i !== index)
        setUpdatedItems(filteredItems)

    }

    const updateTotal = () => {
        setTotal(0)
        const totalItems = document.querySelectorAll('.item-total')
        let counted = 0
        totalItems.forEach((item) => {
            let value = item.textContent / 1
            if (!item.textContent) {
                value = 0
            } 
            counted += value
        })
        setTotal(counted)
    }

    const itemsList = updatedItems.map((item, i) => {
        return (
            <CalculatorItem key={i} deleteItem={discardItem} index={i} update={updateTotal} name={item.name} price={item.price} />
        )
    })

    return (
        <section>
            <div className="container max-w-4xl mx-auto my-28">
                <div className="bg-white border-1/2 border-gray-light shadow-md p-5 rounded-lg flex flex-col gap-y-5">
                    <div className="hidden grid-flow-row gap-y-3 items-center p-3 px-8 text-white text-center bg-primary opacity-75 shadow-md rounded-md lg:grid lg:grid-cols-6 lg:justify-center">
                        <span className="lg:col-span-2 lg:text-left">Name</span>
                        <span className="lg:col-span-1">Price</span>
                        <span className="lg:col-span-2">Quantity</span>
                        <span className="">Summary</span>
                    </div>
                    <div className="p-3 px-5 text-white text-center bg-primary opacity-75 shadow-md rounded-md lg:hidden">
                        <span>eee</span>
                    </div>
                    { itemsList }
                    <div className="grid gap-y-3 items-center p-5 bg-primary opacity-75 shadow-md rounded-md lg:grid-cols-6">
                        <div className="grid grid-cols-1 gap-y-3 justify-center items-center sm:grid-cols-3 lg:col-span-5 lg:grid lg:grid-cols-5">
                            <div className="flex items-center lg:col-span-2">
                                <input 
                                placeholder="Enter item name" 
                                onChange={(event) => setNewItem({...newItem, name: event.target.value})} 
                                value={newItem.name} type="text" 
                                className="p-1.5 w-full bg-white border-2 rounded-md outline-none opacity-75 text-primary font-bold transition-all duration-200 ease-linear focus:bg-primary focus:text-white" />
                            </div>
                            <div className="flex items-center justify-center lg:col-span-1 lg:mx-auto">
                                <input 
                                onChange={(event) => setNewItem({...newItem, price: event.target.value})} 
                                value={newItem.price / 1} type="number" 
                                className="w-16 py-1.5 bg-white border-2 rounded-md outline-none opacity-75 text-center text-primary font-bold transition-all duration-200 ease-linear focus:bg-primary focus:text-white" />
                            </div>
                            <BaseButton moreClass="max-w-sm mx-auto px-6 lg:col-span-2" action={createNewItem} text="Add Item" />
                        </div>
                        <span className="text-white text-center lg:text-left font-bold">Total price: { total } $</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator