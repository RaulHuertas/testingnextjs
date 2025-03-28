



export function Box(props={color:"#0000ff"}){
  return (
    <mesh {...props}>
      <boxGeometry args={[18,18,7]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}
