import { useState } from 'react';
import { Cabin } from '../../types/cabin.types';
import { useTable } from '../../ui/Table/Table';
import { useDeleteCabin } from './hooks/useDeleteCabin';

import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';

type CabinRowProps = {
	cabin: Cabin;
};

const CabinRow = ({ cabin }: CabinRowProps) => {
	const [show, setShow] = useState(false);
	const { deleteCabin, isDeleting } = useDeleteCabin();
	const { customClass, cols } = useTable();

	const { image, discount, name, maxCapacity, regularPrice, id } = cabin;

	return (
		<>
			<div
				role="row"
				className={`grid items-center gap-6 border-t ${
					customClass || ''
				}`}
				style={
					!customClass
						? { gridTemplateColumns: `repeat(${cols.length}, 1fr)` }
						: {}
				}>
				<div role="cell">
					{image && <img src={image} alt={name || 'Cabin image'} />}
				</div>

				<div role="cell">{name}</div>
				<div role="cell">Fits up up {maxCapacity} guests</div>
				<div role="cell">${regularPrice}</div>
				<div role="cell">${discount}</div>

				<div className="flex gap-2">
					<Button onClick={() => setShow((show) => !show)}>
						Edit
					</Button>

					<Button
						disabled={isDeleting}
						onClick={() => deleteCabin(id)}>
						Delete
					</Button>
				</div>
			</div>

			{show && <CreateCabinForm cabinToEdit={cabin} />}
		</>
	);
};

export default CabinRow;
