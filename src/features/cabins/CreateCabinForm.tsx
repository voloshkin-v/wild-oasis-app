import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateCabin } from './hooks/useCreateCabin';
import { Cabin } from '../../types/cabin.types';

import Button from '../../ui/Button';
import FormRow from '../../ui/form/FormRow';

type FormValues = {
	name: string;
	maxCapacity: number;
	regularPrice: number;
	discount: number;
	description: string;
	image: FileList;
};

type CreateCabinFormProps = {
	cabinToEdit?: Cabin;
};

const CreateCabinForm = ({ cabinToEdit }: CreateCabinFormProps) => {
	const { createCabin, isCreating } = useCreateCabin();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		createCabin(data, { onSuccess: () => reset() });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Cabin name" error={errors.name?.message}>
				<input
					type="text"
					id="name"
					disabled={isCreating}
					{...register('name', {
						required: 'This field is required',
					})}
				/>
			</FormRow>

			<FormRow
				label="Maximum capacity"
				error={errors.maxCapacity?.message}>
				<input
					type="number"
					id="maxCapacity"
					disabled={isCreating}
					{...register('maxCapacity', {
						required: 'This field is required',
						valueAsNumber: true,
						min: {
							value: 1,
							message: 'Capacity should be at least 1',
						},
					})}
				/>
			</FormRow>

			<FormRow label="Regular price" error={errors.regularPrice?.message}>
				<input
					type="number"
					id="regularPrice"
					disabled={isCreating}
					{...register('regularPrice', {
						required: 'This field is required',
						valueAsNumber: true,
						min: {
							value: 1,
							message: "The price can't be negative",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Discount" error={errors.discount?.message}>
				<input
					type="number"
					id="discount"
					disabled={isCreating}
					defaultValue={0}
					{...register('discount', {
						required: 'This field is required',
						valueAsNumber: true,
						min: {
							value: 0,
							message: "The discount can't be negative",
						},
						validate: (value, formValues) => {
							return (
								value <= formValues.regularPrice ||
								'Discount should be less than regular price'
							);
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Description for website"
				error={errors.description?.message}>
				<input
					type="text"
					id="description"
					disabled={isCreating}
					{...register('description', {
						required: 'This field is required',
					})}
				/>
			</FormRow>

			<FormRow label="Cabin photo" error={errors.image?.message}>
				<input
					type="file"
					id="image"
					disabled={isCreating}
					{...register('image', {
						required: 'This field is required',
					})}
				/>
			</FormRow>

			<Button type="reset" style="secondary">
				Cancel
			</Button>

			<Button disabled={isCreating}>Create new cabin</Button>
		</form>
	);
};

export default CreateCabinForm;
