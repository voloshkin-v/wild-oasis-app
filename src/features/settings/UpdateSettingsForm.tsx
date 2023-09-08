import { useSettings } from './hooks/useSettings';
import { useUpdateSettings } from './hooks/useUpdateSettings';
import { useForm, SubmitHandler } from 'react-hook-form';

import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Loader from '../../ui/Loader';
import Button from '../../ui/Button';
import RowButtons from '../../ui/RowButtons';
import Input from '../../ui/Form/Input';

type FormValues = {
	minBookingLength: number;
	maxBookingLength: number;
	maxGuestsPerBooking: number;
	breakfastPrice: number;
};

const UpdateSettingsForm = () => {
	const { register, handleSubmit } = useForm<FormValues>();

	const {
		data: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
		isLoading,
		isError,
	} = useSettings();
	const { isUpdating, updateSettings } = useUpdateSettings();

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <h2>Error...</h2>;
	}

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		updateSettings(data);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Minimum nights/booking">
				<Input
					defaultValue={minBookingLength}
					type="number"
					{...register('minBookingLength', {
						valueAsNumber: true,
					})}
				/>
			</FormRow>

			<FormRow label="Maximum nights/booking">
				<Input
					defaultValue={maxBookingLength}
					type="number"
					{...register('maxBookingLength', {
						valueAsNumber: true,
					})}
				/>
			</FormRow>

			<FormRow label="Maximum guests/booking">
				<Input
					defaultValue={maxGuestsPerBooking}
					type="number"
					{...register('maxGuestsPerBooking', {
						valueAsNumber: true,
					})}
				/>
			</FormRow>

			<FormRow label="Breakfast price">
				<Input
					defaultValue={breakfastPrice}
					type="number"
					{...register('breakfastPrice', {
						valueAsNumber: true,
					})}
				/>
			</FormRow>

			<RowButtons>
				<Button disabled={isUpdating}>Update</Button>
			</RowButtons>
		</Form>
	);
};

export default UpdateSettingsForm;
