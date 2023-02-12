import Error from "next/error";

const NotFoundPage = () => (
	<Error
		statusCode={500}
		title="500 - Internal Server Error"
		withDarkMode={false}
	/>
);

export default NotFoundPage;
	


	