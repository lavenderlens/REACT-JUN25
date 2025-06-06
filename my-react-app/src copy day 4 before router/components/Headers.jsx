export function Header1(props) {
  return (
    <>
      <h1>{props.message}</h1>
      {console.log(props)}
    </>
  );
}
export function Header2(props) {
  return (
    <>
      <h2>{props.message}</h2>
      {console.log(props)}
    </>
  );
}
/**
 * props allow us to pass data ONE WAY ONLY:
 * top - down
 * props cannot be mutated in a component that receives them
 * this is because every time react re-renders
 * the original props will get re-sent
 */
