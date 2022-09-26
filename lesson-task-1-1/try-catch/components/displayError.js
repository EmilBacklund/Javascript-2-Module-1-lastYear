export { displayError };

function displayError(message = "Unknown Error") {
  //   if (!message) {
  //     message = "Unknown Error";
  //   }
  return `<div class="error">${message}</div>`;
}
