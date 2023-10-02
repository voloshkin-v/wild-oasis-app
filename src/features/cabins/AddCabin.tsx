import { MODALS } from '../../ui/modal/modal.constant';
import Button from '../../ui/Button';
import Modal from '../../ui/modal/Modal';
import CreateCabinForm from './CreateCabinForm';

const AddCabin = () => {
	return (
		<Modal>
			<Modal.Open opens={MODALS.ADD_CABIN}>
				<Button>Add new cabin</Button>
			</Modal.Open>

			<Modal.Window name={MODALS.ADD_CABIN}>
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	);
};

export default AddCabin;
