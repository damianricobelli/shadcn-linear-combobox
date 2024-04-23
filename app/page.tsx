import { LinearCombobox } from "@/components/linear-combobox";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col py-24 px-5 gap-8 max-w-2xl mx-auto">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="font-bold text-4xl">Shadcn Linear Combobox</h1>
				<h2 className="font-medium text-xl text-muted-foreground text-center">
					<Balancer>
						A copy of the combobox that Linear uses to set the priority of a
						task.
					</Balancer>
				</h2>
			</div>
			<div className="flex flex-col gap-2 items-center">
				<div className="flex gap-4 items-center">
					<Button asChild>
						<Link
							href="https://github.com/damianricobelli/shadcn-linear"
							target="_blank"
						>
							<Star className="mr-2 size-4" />
							GitHub
						</Link>
					</Button>
					<ThemeSwitcher />
				</div>
			</div>
			<div className="my-4 flex flex-col gap-4">
				<h3 className="font-bold text-2xl">Motivations</h3>
				<p className="text-muted-foreground">
					Linear has a beautiful combobox to set the priority of a task. I
					wanted to recreate it using Shadcn UI
				</p>
				<p className="text-muted-foreground">
					You can check the original combobox by creating a Linear account and
					finally change the priority of a task{" "}
					<a
						href="https://linear.app/"
						target="_blank"
						className="text-primary underline"
						rel="noreferrer"
					>
						here
					</a>
				</p>
				<h3 className="font-bold text-2xl">Features</h3>
				<ul className="text-muted-foreground list-disc pl-6">
					<li>Set priority of a task</li>
					<li>Filter priorities</li>
					<li>Opening the combobox with the P key</li>
					<li>Hide kbd from input when doing a priority search</li>
					<li>Tooltip on button hover</li>
				</ul>
				<div className="my-2">
					<LinearCombobox />
				</div>
			</div>
		</main>
	);
}
