import { createMessage } from "./components/message.mjs";

const messageContainer = document.querySelector(".message-container");

messageContainer.innerHTML = createMessage("error", "OH NO!");
