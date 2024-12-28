import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from '../../components/account/SignInCard.jsx';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import {
	Dialog, DialogTitle, DialogContent,
	DialogActions, Button, IconButton,
	styled, 
} from '@mui/material';


const SignIn = () => {
	return (
		<>
			<CssBaseline enableColorScheme />
			<Stack
				direction="column"
				component="main"
				sx={[
					{
						justifyContent: 'center',
						height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
						marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
						minHeight: '100%',
					},
					(theme) => ({
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							zIndex: -1,
							inset: 0,
							backgroundImage:
								'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
							backgroundRepeat: 'no-repeat',
							...theme.applyStyles('dark', {
								backgroundImage:
									'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
							}),
						},
					}),
				]}
			>
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					sx={{
						justifyContent: 'center',
						gap: { xs: 6, sm: 12 },
						p: 2,
						mx: 'auto',
					}}
				>
					<Stack
						direction={{ xs: 'column-reverse', md: 'row' }}
						sx={{
							justifyContent: 'center',
							gap: { xs: 6, sm: 12 },
							p: { xs: 2, sm: 4 },
							m: 'auto',
						}}
					>
						<SignInCard />
					</Stack>
				</Stack>
			</Stack>
		</>
	);
}

export default SignIn


/* export const SignInModal = ({ open }) => {
  const navigate = useNavigate();
  console.log("signin modal")

  const handleClose = () => {
	navigate(-1);
  };

  return (
	<Dialog open={open} onClose={handleClose}>
	  <DialogTitle>Login</DialogTitle>
	  <DialogContent>
		{/* Your login form goes here }
	  </DialogContent>
	  <DialogActions>
		<Button onClick={handleClose} color="primary">
		  Close
		</Button>
	  </DialogActions>
	</Dialog>
  );
};

SignInModal.propTypes = {
  open: PropTypes.bool,
} */





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export const SignInModal = ({ open }) => {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate("/");
	};

	return (
		<BootstrapDialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={open}
		>
			<DialogTitle component="h1" variant="h4" 
				sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }} 
				id="customized-dialog-title">
				Sign In
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={handleClose}
				sx={(theme) => ({
					position: 'absolute',
					right: 8,
					top: 8,
					color: theme.palette.grey[500],
				})}
			>
				<CloseIcon />
			</IconButton>

			<DialogContent dividers>
				<SignInCard />
			</DialogContent>

			<DialogActions>
				<Button autoFocus onClick={handleClose}>
					Close
				</Button>
			</DialogActions>

		</BootstrapDialog>
	);
}


SignInModal.propTypes = {
	open: PropTypes.bool,

}