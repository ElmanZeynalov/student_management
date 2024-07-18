import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomLink } from '@/components/CustomLink';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function ApplicationHeader() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Student Managment
					</Typography>

					<Stack
						direction="row"
						spacing={2}
						sx={({ palette }) => ({
							color: palette.common.white,
						})}
					>
						<CustomLink href={'/student'} color="inherit">
							Students
						</CustomLink>

						<CustomLink color="inherit" href={'/lessons'}>
							Lessons
						</CustomLink>

						<CustomLink color="inherit" href={'/scores'}>
							Scores
						</CustomLink>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
