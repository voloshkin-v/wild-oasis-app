import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createCabin } from '../../services/cabins';
import Button from '../../ui/Button';

type FormValues = {
	name: string;
	maxCapacity: number;
	regularPrice: number;
	discount: number;
	description: string;
	image: string;
};

const CreateCabinForm = () => {
	const { register, handleSubmit, reset } = useForm<FormValues>();

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
		console.log(data);

		mutate({
			...data,
			image: null,
			discount: 0,
			maxCapacity: 1,
			regularPrice: 200,
		});
	};

	return (
		<form
			className="bg-gray-500 p-2 text-black"
			onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="name">Cabin name</label>
				<input type="text" id="name" {...register('name')} />
			</div>

			<div>
				<label htmlFor="maxCapacity">Maximum capacity</label>
				<input
					type="number"
					id="maxCapacity"
					{...register('maxCapacity')}
				/>
			</div>

			<div>
				<label htmlFor="regularPrice">Regular price</label>
				<input
					type="number"
					id="regularPrice"
					{...register('regularPrice')}
				/>
			</div>

			<div>
				<label htmlFor="discount">Discount</label>
				<input type="number" id="discount" {...register('discount')} />
			</div>

			<div>
				<label htmlFor="description">Description for website</label>
				<input
					type="text"
					id="description"
					{...register('description')}
				/>
			</div>

			<div>
				<label htmlFor="photo">Cabin photo</label>
				<input type="file" id="photo" {...register('image')} />
			</div>

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
