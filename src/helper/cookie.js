import Cookies from "js-cookie";

export const setCookie = () => {
  Cookies.set("timeout", "true", { expires: 1 });
};

export const isCookie = () => {
  return Cookies.get("timeout") === "true";
};
