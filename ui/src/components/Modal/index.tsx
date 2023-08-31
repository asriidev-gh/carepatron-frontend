import { ReactNode, FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type ModalProps = {
	handleClose: () => void;
	open: boolean;
	children: ReactNode;
	title: string;
};

const Modal: FC<ModalProps> = ({ handleClose, open, children, title }) => {
	return (
		<Dialog open={open} onClose={handleClose} fullWidth>
			<DialogTitle>
				{title}
				<IconButton
					aria-label='close'
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default Modal;
