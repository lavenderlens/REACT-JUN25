export function LoginWelcome({ userinfo }) {
  return <>{userinfo.username && <h2>Welcome {userinfo.username}</h2>}</>;
}
