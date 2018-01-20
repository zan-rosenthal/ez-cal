import { curry } from "ramda";
import { themr } from "react-css-themr";

export default curry((theme, component) => themr("", theme)(component));
