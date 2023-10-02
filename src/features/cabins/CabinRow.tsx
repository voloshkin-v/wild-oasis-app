import { Cabin } from '../../types/cabin.types';
import { useDeleteCabin } from './hooks/useDeleteCabin';

import Table from '../../ui/table/Table';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Menus from '../../ui/menu/Menus';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/modal/Modal';
import { MODALS } from '../../ui/modal/modal.constant';
import { formatCurrency } from '../../utils/helpers';

type CabinRowProps = {
	cabin: Cabin;
};

const CabinRow = ({ cabin }: CabinRowProps) => {
	const { deleteCabin, isDeleting } = useDeleteCabin();
	const {
		image,
		discount,
		name,
		description,
		maxCapacity,
		regularPrice,
		id,
	} = cabin;

	return (
		<Table.Row>
			<div role="cell" className="relative pb-[56.25%]">
				<img
					src={image}
					alt={name}
					title={description}
					className="absolute left-0 top-0 h-full w-full object-cover"
				/>
			</div>

			<div role="cell">
				<h3 className="font-semibold">{name}</h3>
			</div>

			<div role="cell">Fits up up {maxCapacity} guests</div>

			<div role="cell">
				<span className="font-semibold">
					{formatCurrency(regularPrice)}
				</span>
			</div>

			<div role="cell">
				{discount ? (
					<span className="font-medium text-green-700">
						{formatCurrency(discount)}
					</span>
				) : (
					<span>&mdash;</span>
				)}
			</div>

			<div role="cell">
				<Modal>
					<Modal.Open
						opens={MODALS.CABIN_FORM}
						render={(a) => <button onClick={a}>Edit</button>}
					/>

					<Modal.Window name={MODALS.CABIN_FORM}>
						<div>EDIT!!!</div>
					</Modal.Window>
				</Modal>

				<Menus>
					<Menus.Menu>
						<Menus.Toggle id={id} />

						<Menus.List id={id}>
							<Menus.Button>
								<HiSquare2Stack />
								Duplicate
							</Menus.Button>

							<Menus.Button>
								<HiPencil />
								Edit
							</Menus.Button>

							<Menus.Button>
								<HiTrash />
								Delete
							</Menus.Button>
						</Menus.List>
					</Menus.Menu>
				</Menus>
			</div>

			{/* <div className="flex gap-2">
				<Button onClick={() => setShow((show) => !show)}>Edit</Button>

				<Button disabled={isDeleting} onClick={() => deleteCabin(id)}>
					Delete
				</Button>
			</div> */}
		</Table.Row>
	);
};

export default CabinRow;
