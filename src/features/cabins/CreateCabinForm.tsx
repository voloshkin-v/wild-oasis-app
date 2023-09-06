import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createCabin } from '../../services/cabins';
import Button from '../../ui/Button';
import FormRow from '../../ui/Form/FormRow';

type FormValues = {
	name: string;
	maxCapacity: number;
	regularPrice: number;
	discount: number;
	description: string;
	image: string;
};

const CreateCabinForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

	console.log(errors);

	const queryClient = useQueryClient();
	const { mutate, isLoading } = useMutation({
		mutationFn: createCabin,
		onSuccess: () => {
			toast.success('New cabin successfully created');
			queryClient.invalidateQueries({ queryKey: ['cabins'] });
			reset();
		},
		onError: (error) => {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		mutate({
			...data,
			image: null,
		});
	};

	return (
		<form className="" onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Cabin name" id="name" error={errors.name?.message}>
				<input
					type="text"
					id="name"
					disabled={isLoading}
					{...register('name', {
						required: 'This field is required',
					})}
				/>
			</FormRow>

			<FormRow
				label="Maximum capacity"
				id="maxCapacity"
				error={errors.maxCapacity?.message}>
				<input
					type="number"
					id="maxCapacity"
					disabled={isLoading}
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

			<FormRow
				label="Regular price"
				id="regularPrice"
				error={errors.regularPrice?.message}>
				<input
					type="number"
					id="regularPrice"
					disabled={isLoading}
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

			<FormRow
				label="Discount"
				id="discount"
				error={errors.discount?.message}>
				<input
					type="number"
					id="discount"
					disabled={isLoading}
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
				id="description"
				error={errors.description?.message}>
				<input
					type="text"
					id="description"
					disabled={isLoading}
					{...register('description', {
						required: 'This field is required',
					})}
				/>
			</FormRow>

			<FormRow
				label="Cabin photo"
				id="image"
				error={errors.image?.message}>
				<input type="file" id="image" {...register('image')} />
			</FormRow>

			<Button style="secondary" type="reset">
				Cancel
			</Button>

			<Button type="submit" isLoading={isLoading}>
				Submit
			</Button>
		</form>
	);
};

export default CreateCabinForm;
