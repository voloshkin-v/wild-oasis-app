// import { useState } from 'react';
// import { Cabin } from '../../types/cabin.types';
// import { useDeleteCabin } from './hooks/useDeleteCabin';

// import Table from '../../ui/table/Table';

// import Button from '../../ui/Button';
// import CreateCabinForm from './CreateCabinForm';

// type CabinRowProps = {
// 	cabin: Cabin;
// };

// const CabinRow = ({ cabin }: CabinRowProps) => {
// 	const [show, setShow] = useState(false);
// 	const { deleteCabin, isDeleting } = useDeleteCabin();
// 	const { image, discount, name, maxCapacity, regularPrice, id } = cabin;

// 	return (
// 		<Table.Row>
// 			<div
// 				role="row"
// 				className={`grid items-center gap-6 border-t ${
// 					customClass || ''
// 				}`}
// 				style={
// 					!customClass
// 						? { gridTemplateColumns: `repeat(${cols.length}, 1fr)` }
// 						: {}
// 				}>
// 				<div role="cell">
// 					{image && <img src={image} alt={name || 'Cabin image'} />}
// 				</div>

// 				<div role="cell">{name}</div>
// 				<div role="cell">Fits up up {maxCapacity} guests</div>
// 				<div role="cell">${regularPrice}</div>
// 				<div role="cell">${discount}</div>

// 				<div className="flex gap-2">
// 					<Button onClick={() => setShow((show) => !show)}>
// 						Edit
// 					</Button>

// 					<Button
// 						disabled={isDeleting}
// 						onClick={() => deleteCabin(id)}>
// 						Delete
// 					</Button>
// 				</div>
// 			</div>

// 			{show && <CreateCabinForm cabinToEdit={cabin} />}
// 		</Table.Row>
// 	);
// };

// export default CabinRow;

import { useState } from 'react';
import { Cabin } from '../../types/cabin.types';
import { useDeleteCabin } from './hooks/useDeleteCabin';

import Table from '../../ui/table/Table';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';

type CabinRowProps = {
	cabin: Cabin;
};

const CabinRow = ({ cabin }: CabinRowProps) => {
	const [show, setShow] = useState(false);
	const { deleteCabin, isDeleting } = useDeleteCabin();
	const { image, discount, name, maxCapacity, regularPrice, id } = cabin;

	return (
		<Table.Row>
			<div role="cell">
				{image && <img src={image} alt={name || 'Cabin image'} />}
			</div>

			<div role="cell">{name}</div>
			<div role="cell">Fits up up {maxCapacity} guests</div>
			<div role="cell">${regularPrice}</div>
			<div role="cell">${discount}</div>

			<div className="flex gap-2">
				<Button onClick={() => setShow((show) => !show)}>Edit</Button>

				<Button disabled={isDeleting} onClick={() => deleteCabin(id)}>
					Delete
				</Button>
			</div>

			{show && <CreateCabinForm cabinToEdit={cabin} />}
		</Table.Row>
	);
};

export default CabinRow;
