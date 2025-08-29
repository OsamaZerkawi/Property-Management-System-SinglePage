import { ToastContainer, toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const useNotification = () => {
  const notifyError = (msg) => toast.error(msg);

  const notifySuccess = (msg) => toast.success(msg);

  const notifyWarning = (msg) => toast.warn(msg);

  // const notifyWarning = (msg) =>
  //   toast.warn(msg, { style: { fontFamily: "Cairo" } });

  const ToastComponent = () => (
    <ToastContainer
      className="select-none"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={false}
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
  );

  return { notifyError, notifySuccess, notifyWarning, ToastComponent };
};
