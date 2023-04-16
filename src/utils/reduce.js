export async function reducePrize({ time }) {
  const user = JSON.parse(sessionStorage.getItem("u"));
  const response = await fetch(
    `http://localhost:8000/u/reduce?id=${user._id}&time=${time}`
  );
  if (response.status === 400) {
    const responseData = await response.json();
    const dialog = document.createElement("div");
    dialog.className = "dialog";
    const message = document.createElement("p");
    message.innerText = responseData.message;
    dialog.appendChild(message);
    document.body.appendChild(dialog);
    document.body.classList.add("gem");
  }
}

const styles = `
  .gem {
    pointer-events: none;
  }
  
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333;
    padding: 16px;
    border: 2px solid greenyellow;
    font-weight: bold;
    color: green;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
