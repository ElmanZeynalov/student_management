'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import Link, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

interface ICustomLinkProps
	extends Omit<MuiLinkProps, 'href'>,
		Pick<NextLinkProps, 'href' | 'as' | 'prefetch' | 'replace' | 'scroll' | 'shallow' | 'locale'> {}

export const CustomLink = forwardRef<HTMLAnchorElement, ICustomLinkProps>((props, ref) => {
	const { href, as, prefetch, replace, scroll, shallow, locale, ...other } = props;

	return (
		<NextLink
			href={href}
			as={as}
			prefetch={prefetch}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			locale={locale}
			passHref
		>
			<Link ref={ref} variant="body2" {...other} />
		</NextLink>
	);
});
