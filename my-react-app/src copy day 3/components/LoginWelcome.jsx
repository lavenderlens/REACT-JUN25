export function LoginWelcome({ userinfo }) {
  return <>{userinfo.username && <h3>Welcome {userinfo.username}</h3>}</>;
}
