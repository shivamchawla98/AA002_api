import React, { FC } from 'react';

type WishlistCheckBagProps = {
	width?: number;
	height?: number;
	className?: string;
};

const WishlistCheckBag: FC<WishlistCheckBagProps> = ({ width, height, className }) => {
	return (
		<svg version="1.1" id="Layer_1" height={height}
			className={className}
			style={{ margin: "auto" }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.57 122.88" xmlSpace="preserve">
			<g>
				<polygon className="st0" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "rgba(var(--color-accent), var(--tw-bg-opacity))" }} points="0,0 122.57,0 122.57,122.88 61.13,69.95 0,122.88 0,0" />
			</g>
		</svg>
	);
};

export default WishlistCheckBag;
