export function getUserDetails() {
  return new Promise((resolve, reject) => {
    const user = sessionStorage.getItem("u");
    if (user) {
      fetch(`http://localhost:8000/u/details?id=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          sessionStorage.setItem("u", JSON.stringify(data));
          resolve(data);
        })
        .catch((error) => reject(error));
    } else {
      resolve(null);
    }
  });
}
