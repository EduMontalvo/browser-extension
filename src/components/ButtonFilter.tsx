type ButtonFilterProps = {
    name: string
    action: () => void  
}

const ButtonFilter = ({name,action} : ButtonFilterProps) => {
    return (
        <button className="text-white text-xl px-6 py-3 rounded-full bg-dark-700 border border-solid border-dark-600" onClick={action}>
            {name}
        </button>
    )
}

export default ButtonFilter