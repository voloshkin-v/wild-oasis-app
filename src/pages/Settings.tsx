import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

const Settings = () => {
	return (
		<>
			<Row>
				<Heading>Update hotel settings</Heading>
			</Row>

			<UpdateSettingsForm />
		</>
	);
};

export default Settings;
