import "./btn.css";
import btns from "./btn-all.html";

export default {
  title: "Component/Button",
};

export const All = () => btns;
export const Regular = () => `<button class="btn">click me!</button>`;
export const Round = () => `<button class="btn btn-round">click me!</button>`;
export const Fancy = () => `<button class="btn btn-fancy">click me!</button>`;
