import { Modals } from '../../ui/modal/modal.enum';

import Button from '../../ui/Button';
import Modal from '../../ui/modal/Modal';
import CreateCabinForm from './CreateCabinForm';

const AddCabin = () => {
	return (
		<Modal>
			<Modal.Open
				opens={Modals.CabinForm}
				render={(openModal) => (
					<Button onClick={openModal}>Add new cabin</Button>
				)}
			/>

			<Modal.Window name={Modals.CabinForm}>
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	);
};

export default AddCabin;
