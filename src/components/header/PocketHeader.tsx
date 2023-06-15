import Link, { LinkProps } from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/Button";
import { NavLinks } from "@/components/NavLinks";

import { PropsWithChildren } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";

import {
	GlobalHeader,
	GlobalHeaderNav,
} from "../../../tina/__generated__/types";
import clsx from "clsx";
import { tinaField } from "tinacms/dist/react";

function MenuIcon(props: React.SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M5 6h14M5 18h14M5 12h14"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChevronUpIcon(props: React.SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M17 14l-5-5-5 5"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MobileNavLink({
	children,
	...props
}: PropsWithChildren<{ href: string }>) {
	return (
		<Popover.Button
			as={Link}
			className="block text-base leading-7 tracking-tight text-gray-700"
			{...props}
		>
			{children}
		</Popover.Button>
	);
}

export function PocketHeader({ data }: { data: GlobalHeader }) {
	const className = clsx(
		"relative z-50 flex justify-between py-8 px-4 sm:px-6 lg:px-8",
		"mx-auto max-w-7xl "
	);

	return (
		<header>
			<nav className={className}>
				{/* <Container className="flex items-center justify-between p-6 lg:px-8"> */}
				<div
					className={clsx("relative z-10 flex items-center gap-16", {
						["lg:flex-1"]: data.style === "righted",
					})}
				>
					<Link href="/" aria-label="Home">
						<Logo className="h-10 w-auto" />
					</Link>
				</div>
				<div
					className={clsx("hidden lg:flex lg:gap-12", {
						["ml-16 lg:flex-1"]: data.style === "default",
						["mr-10"]: data.style === "righted",
					})}
				>
					<NavLinks nav={data.nav as GlobalHeaderNav[]} />
				</div>
				<div className="flex items-center gap-6">
					<Popover className="lg:hidden">
						{({ open }) => (
							<>
								<Popover.Button
									className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
									aria-label="Toggle site navigation"
								>
									{({ open }) =>
										open ? (
											<ChevronUpIcon className="h-6 w-6" />
										) : (
											<MenuIcon className="h-6 w-6" />
										)
									}
								</Popover.Button>
								<AnimatePresence initial={false}>
									{open && (
										<>
											<Popover.Overlay
												static
												as={motion.div}
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
											/>
											<Popover.Panel
												static
												as={motion.div}
												initial={{ opacity: 0, y: -32 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{
													opacity: 0,
													y: -32,
													transition: { duration: 0.2 },
												}}
												className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
											>
												<div className="space-y-4">
													{/* <MobileNavLink href="#features">
														Features
													</MobileNavLink>
													<MobileNavLink href="#reviews">Reviews</MobileNavLink>
													<MobileNavLink href="#pricing">Pricing</MobileNavLink>
													<MobileNavLink href="#faqs">FAQs</MobileNavLink> */}
													{data.nav &&
														data.nav.map(
															(item, idx) =>
																item && (
																	<MobileNavLink
																		href={item.href ?? ""}
																		key={idx}
																		data-tina-field={tinaField(item, "label")}
																	>
																		{item.label}
																	</MobileNavLink>
																)
														)}
												</div>
												<div className="mt-8 flex flex-col gap-4">
													{data.actions &&
														data.actions.map((action, idx) => {
															switch (action?.type) {
																case "link":
																	return (
																		<Button
																			href="/login"
																			variant="outline"
																			key={idx}
																		>
																			Log in
																		</Button>
																	);
																default:
																	return (
																		<Button key={idx} href="#">
																			Download the app
																		</Button>
																	);
															}
														})}
												</div>
											</Popover.Panel>
										</>
									)}
								</AnimatePresence>
							</>
						)}
					</Popover>
					{data.actions &&
						data.actions.map((action, idx) => {
							switch (action?.type) {
								case "link":
									return (
										<Button
											href="/login"
											key={idx}
											variant="outline"
											className="hidden lg:block"
											data-tina-field={tinaField(action)}
										>
											{action?.label}
										</Button>
									);
								default:
									return (
										action && (
											<Button
												href="#"
												className="hidden lg:block"
												key={idx}
												data-tina-field={tinaField(action)}
											>
												{action?.label}
											</Button>
										)
									);
							}
						})}
				</div>
				{/* </Container> */}
			</nav>
		</header>
	);
}
