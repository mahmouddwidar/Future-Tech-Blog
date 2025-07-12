export default function Heart(props: { className: string }) {
	return (
		<svg
			viewBox="0 0 16 15"
			xmlns="http://www.w3.org/2000/svg"
            className={props.className}
		>
			<path
				d="M8.00033 2.58672C8.54259 1.95703 9.48074 1.25 10.9092 1.25C13.4073 1.25 15.0837 3.57813 15.0837 5.74609C15.0837 10.2781 9.39968 13.75 8.00033 13.75C6.60097 13.75 0.916992 10.2781 0.916992 5.74609C0.916992 3.57813 2.59338 1.25 5.09144 1.25C6.51991 1.25 7.45806 1.95703 8.00033 2.58672Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
