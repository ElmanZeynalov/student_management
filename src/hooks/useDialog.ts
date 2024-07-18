import { isEqual } from 'lodash';
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

export interface IUseDialogReturn<TPayload = unknown | undefined> {
	open: (payload?: TPayload) => void;
	close: () => void;
	isOpen: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	payload?: TPayload;
}

interface IUseDialogProps<TPayload> {
	isOpenInitially?: boolean;
	initialPayload?: TPayload;
}

export const useDialog = <TPayload extends unknown>({
	isOpenInitially = false,
	initialPayload,
}: IUseDialogProps<TPayload> = {}): IUseDialogReturn<TPayload> => {
	const [isOpen, setIsOpen] = useState(isOpenInitially);
	const [payload, setPayload] = useState(initialPayload);

	const open = useCallback(
		(newPayload?: TPayload) => {
			if (!isEqual(payload, newPayload)) {
				setPayload(newPayload);
			}
			setIsOpen(true);
		},
		[payload],
	);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	return useMemo(
		() => ({
			open,
			close,
			isOpen,
			payload,
			setIsOpen,
		}),
		[close, open, isOpen, payload],
	);
};

export default useDialog;
