const BaseButton = ({ type, text, icon, action, moreClass, target }) => {
    switch (type) {
        case 'counter':
            return (
                <button onClick={() => action(target)} className={`${moreClass ? moreClass : ''} bg-primary p-2 opacity-75 rounded-md transition-all ease-in duration-150 hover:opacity-100 hover:shadow-md`}>
                    <img className="w-full" alt="icon" src={icon} />
                </button>
            )
        default:
            return (
                <button 
                className={`${moreClass ? moreClass : ''} bg-white border-2 border-white text-primary py-1.5 opacity-75 font-semibold rounded-md transition-all ease-in duration-300 hover:shadow-md hover:bg-primary hover:text-white`} 
                onClick={action}>
                    { text.toUpperCase() }
                </button>
            )
    }
}

export default BaseButton