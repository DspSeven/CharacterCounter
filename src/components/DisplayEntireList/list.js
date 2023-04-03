const DisplayEntireList = props => {
  const {chDetails} = props
  const {id, character, length} = chDetails
  return (
    <li>
      <p>
        {character} : {length}
      </p>
    </li>
  )
}
export default DisplayEntireList
