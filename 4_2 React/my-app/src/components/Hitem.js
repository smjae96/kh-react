function Hitem({value, isChecked}) {
    return(
        <li>{value} {isChecked && 'v'}</li>
    )
}

export default Hitem;