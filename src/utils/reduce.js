export async function reducePrize({ time }) {
  const user = JSON.parse(sessionStorage.getItem("u"));
  const response = await fetch(
    `http://localhost:8000/u/reduce?id=${user._id}&time=${time}`
  );
  const responseData = await response.json();
}
