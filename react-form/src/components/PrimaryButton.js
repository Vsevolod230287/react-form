import React from 'react';
import { makeStyles } from '@material-ui/core/Styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(3, 0, 2),
	},
}));


export const PrimaryButton = ({ children, ...props }) => {
 const styles = useStyles()
	return (
		<Button
			type='submit'
			{...props}
			fullWidth
			variant='contained'
			color='primary'
      className={styles.root}
		>
			{children}
		</Button>
	);
};
