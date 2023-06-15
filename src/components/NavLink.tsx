import Link from "next/link";
import { PropsWithChildren } from "react";

export function NavLink({
	href,
	children,
}: PropsWithChildren<{ href: string }>) {
	return (
		<Link
			href={href}
			className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
		>
			{children}
		</Link>
	);
}
