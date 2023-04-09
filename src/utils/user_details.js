export function getUserDetails() {
  const user = sessionStorage.getItem("u");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}
