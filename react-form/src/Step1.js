import { Typography,   } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import { Form } from './components/Form';
import {Input} from './components/Input'
import {MainContainer} from './components/MainContainer'
import {PrimaryButton} from './components/PrimaryButton'




export const Step1 = () => {

	const { register, handleSubmit, errors } = useForm({
		mode: "onBlur",
	});

	return (
		<MainContainer>
			<Typography component='h2' variant='h5'>
				Step1
			</Typography>
			<Form>
				<Input
					{...register("firstName")}
					id="firstName"
					type='text'
					label='First Name'
					name='firstName'
				/>
				
        	<Input
					{...register("lastName")}
					id="lastName"
					type='text'
					label='Last Name'
					name='lastName'
				/>
        <PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
};
