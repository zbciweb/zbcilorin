import { combineReducers } from "redux";
import posts from "./posts";
import subscription  from "./subscribe";
import contactForm  from "./cta";
export default combineReducers({
  posts,subscription,contactForm
});
