



export function Box(props){
  return (
    <mesh {...props}>
      <boxGeometry args={[18,18,7]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}
