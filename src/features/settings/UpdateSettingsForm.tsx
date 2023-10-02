import { useSettings } from './hooks/useSettings';
import { useUpdateSettings } from './hooks/useUpdateSettings';
import { useForm, SubmitHandler } from 'react-hook-form';

import Form from '../../ui/form/Form';
import Loader from '../../ui/Loader';
import Button from '../../ui/Button';
import RowButtons from '../../ui/RowButtons';

type FormValues = {
	minBookingLength: number;
	maxBookingLength: number;
	maxGuestsPerBooking: number;
	breakfastPrice: number;
};

const UpdateSettingsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

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
		return <h2>Error.</h2>;
	}

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		updateSettings(data);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Row
				label="Minimum nights/booking"
				error={errors.minBookingLength?.message}>
				<Form.Input
					defaultValue={minBookingLength}
					type="number"
					{...register('minBookingLength', {
						valueAsNumber: true,
						required: 'This field is required',
						min: {
							value: 1,
							message: 'This field cannot be less than 1',
						},
					})}
				/>
			</Form.Row>

			<Form.Row
				label="Maximum nights/booking"
				error={errors.maxBookingLength?.message}>
				<Form.Input
					defaultValue={maxBookingLength}
					type="number"
					{...register('maxBookingLength', {
						valueAsNumber: true,
						required: 'This field is required',
						min: {
							value: 1,
							message: 'This field cannot be less than 1',
						},
					})}
				/>
			</Form.Row>

			<Form.Row
				label="Maximum guests/booking"
				error={errors.maxGuestsPerBooking?.message}>
				<Form.Input
					defaultValue={maxGuestsPerBooking}
					type="number"
					{...register('maxGuestsPerBooking', {
						valueAsNumber: true,
						required: 'This field is required',
						min: {
							value: 1,
							message: 'This field cannot be less than 1',
						},
					})}
				/>
			</Form.Row>

			<Form.Row
				label="Breakfast price"
				error={errors.breakfastPrice?.message}>
				<Form.Input
					defaultValue={breakfastPrice}
					type="number"
					{...register('breakfastPrice', {
						valueAsNumber: true,
						required: 'This field is required',
						min: {
							value: 0,
							message: "This field can't be negative",
						},
					})}
				/>
			</Form.Row>

			<RowButtons>
				<Button disabled={isUpdating}>Update</Button>
			</RowButtons>
		</Form>
	);
};

export default UpdateSettingsForm;
