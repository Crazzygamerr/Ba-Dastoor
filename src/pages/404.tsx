import Error from "next/error";

const NotFoundPage = () => (
	<Error
		statusCode={404}
		title="This page could not be found"
		withDarkMode={false}
	/>
);

export default NotFoundPage;
	


	