export default ({ cast, onChoice }) => {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: '1rem'
      }}>
        {
          cast.map(member => (
            <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}> 
            </a>
          ))
        }
      </div>
    )
  }