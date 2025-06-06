export function LoginWelcome({ userinfo }) {
  return <>{userinfo.username && <h3>Welcome {userinfo.username}</h3>}</>;
}
// an example of a dumb component
// SMART / FAT / STATEFUL components hold react state
// DUMB / THIN / STATELESS components just render out props
// there is a bit of crossover with UI state
// a component that uses react state just locally, for UI feedback to the user
// examples: form field focus, two-way binding 
// these should be kept in the component itself
// needlessly complex to pass them up to a parent
// dumb components are easier to unit test
