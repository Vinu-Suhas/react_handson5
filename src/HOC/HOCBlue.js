

export function HOCBlue(props){
    return(<>
    <div style={{background:"blue",borderRadius:"18px"}} >
        <h1>This is HOC modified with background color</h1>
        <h2 >{<props.value/>}</h2>
    </div>
    </>)
}