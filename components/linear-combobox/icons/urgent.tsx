import type { SVGProps } from "react";
import type { SVGRProps } from "./types";

export const UrgentIcon = ({
	title,
	titleId,
	desc,
	descId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width="1em"
		height="1em"
		fill="#fb773f"
		aria-label="Urgent Priority"
		aria-labelledby={titleId}
		aria-describedby={descId}
		{...props}
	>
		{desc ? <desc id={descId}>{desc}</desc> : null}
		<title id={titleId}>{title}</title>
		<path d="M3 1c-1.09 0-2 .91-2 2v10c0 1.09.91 2 2 2h10c1.09 0 2-.91 2-2V3c0-1.09-.91-2-2-2H3Zm4 3h2l-.246 4.998H7.25L7 4Zm2 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
	</svg>
);
