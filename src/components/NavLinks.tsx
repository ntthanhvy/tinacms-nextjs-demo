import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalHeaderNav } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

const defaultNav = [
	{ label: "Features", href: "#features" },
	{ label: "Reviews", href: "#reviews" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "FAQs", href: "#faqs" },
];

export function NavLinks({
	nav = defaultNav,
}: {
	nav?: Array<GlobalHeaderNav> | null;
}) {
	let [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

	return (
		<>
			{nav &&
				nav.map((item, index) => (
					<Link
						data-tina-field={tinaField(item, "label")}
						key={item.label}
						href={item.href ?? ""}
						className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm flex items-center text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === index && (
								<motion.span
									className="absolute inset-0 rounded-lg bg-gray-100"
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1, transition: { duration: 0.15 } }}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<span className="relative z-10">{item.label}</span>
					</Link>
				))}
		</>
	);
}
