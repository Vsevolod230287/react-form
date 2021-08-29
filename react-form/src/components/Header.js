import React from 'react';
import  Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(3, 0, 2),
		fontWeight: "800",
		textAlign: 'center',
		fontSize: '40px',
		color: '#fff',
		textShadow: '1px 1px darkmagenta',
	},
}));

export const Header = () => {
	const styles = useStyles();

	return (
		<Typography className={styles.root} component='h1' variant='h5'>
			The ultimate form Challange
		</Typography>
	);
};
