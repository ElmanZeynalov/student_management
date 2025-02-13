import { RootState } from './store';

export const loadState = (): RootState | undefined => {
	try {
		const serializedState = localStorage.getItem('reduxState');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};
