'use client';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { FormEvent, useState } from 'react';
import { addStudent } from '@/redux/studentsSlice';

import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import { IStudent } from '@/modules/Student/types/student';

interface StudentFormDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function StudentFormDialog({ isOpen, onClose: handleClose }: StudentFormDialogProps) {
	const dispatch = useDispatch();

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			PaperProps={{
				component: 'form',
				onSubmit: (event: FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					const formJson = Object.fromEntries((formData as any).entries()) as IStudent;
					console.log(formJson, 'Form Data');
					dispatch(addStudent({ ...formJson, id: new Date().getTime() }));
					handleClose();
				},
			}}
		>
			<DialogTitle>Student</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					required
					margin="dense"
					id="name"
					name="name"
					label="Name"
					type="name"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="surname"
					name="surname"
					label="Suranme"
					type="surname"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="studentNo"
					name="studentNo"
					label="studentNo"
					type="studentNo"
					fullWidth
					variant="standard"
				/>
				<TextField
					autoFocus
					required
					margin="dense"
					id="class"
					name="class"
					label="Class"
					fullWidth
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button type="submit">Create Student</Button>
			</DialogActions>
		</Dialog>
	);
}
