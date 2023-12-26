import { message } from "antd";

type messageType = "success" | "info" | "warning" | "error" | "loading";

const showMessage = (
  content: string,
  type: messageType = "success",
  duration = 2
) => {
  message[type](content, duration);
};

export default showMessage;
