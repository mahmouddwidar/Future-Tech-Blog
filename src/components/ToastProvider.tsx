import { Flip, ToastContainer } from "react-toastify";

export function ToastProvider() {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			transition={Flip}
		/>
	);
}

export default ToastProvider;
