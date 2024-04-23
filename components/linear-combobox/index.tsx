"use client";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHotkeys } from "@/hooks/use-hot-keys";
import { cn } from "@/lib/utils";
import * as React from "react";
import { CheckIcon } from "./icons/check";
import { HighIcon } from "./icons/high";
import { LowIcon } from "./icons/low";
import { MediumIcon } from "./icons/medium";
import { NoPriorityIcon } from "./icons/no-priority";
import { UrgentIcon } from "./icons/urgent";
import { Kbd } from "./kbd";

type Priority = {
	value: (typeof priorities)[number]["value"];
	label: string;
	icon: any;
};

const priorities = [
	{ value: "no-priority", label: "No priority", icon: NoPriorityIcon },
	{ value: "urgent", label: "Urgent", icon: UrgentIcon },
	{ value: "high", label: "High", icon: HighIcon },
	{ value: "medium", label: "Medium", icon: MediumIcon },
	{ value: "low", label: "Low", icon: LowIcon },
] as const;

export const LinearCombobox = () => {
	const [openPopover, setOpenPopover] = React.useState(false);
	const [openTooltip, setOpenTooltip] = React.useState(false);

	const [selectedPriority, setSelectedPriority] =
		React.useState<Priority | null>(null);

	const [searchValue, setSearchValue] = React.useState("");

	const isSearching = searchValue.length > 0;

	useHotkeys([
		[
			"p",
			() => {
				setOpenTooltip(false);
				setOpenPopover(true);
			},
		],
	]);

	return (
		<Popover open={openPopover} onOpenChange={setOpenPopover}>
			<Tooltip
				delayDuration={500}
				open={openTooltip}
				onOpenChange={setOpenTooltip}
			>
				<TooltipTrigger asChild>
					<PopoverTrigger asChild>
						<Button
							aria-label="Set priority"
							variant="ghost"
							size="sm"
							className="px-2 h-8 text-[0.8125rem] leading-normal font-medium text-primary"
						>
							{selectedPriority && selectedPriority.value !== "no-priority" ? (
								<>
									<selectedPriority.icon
										className={cn(
											"mr-2 size-4",
											selectedPriority.value !== "urgent" && "fill-primary",
										)}
										aria-hidden="true"
									/>
									{selectedPriority.label}
								</>
							) : (
								<>
									<NoPriorityIcon
										className="mr-2 size-4 fill-primary"
										aria-hidden="true"
										title="Set priority"
									/>
									Set priority
								</>
							)}
						</Button>
					</PopoverTrigger>
				</TooltipTrigger>
				<TooltipContent
					hideWhenDetached
					side="bottom"
					sideOffset={4}
					className="flex items-center gap-2 bg-background border text-xs px-2 h-8"
				>
					<span className="text-primary">Change priority</span>
					<Kbd />
				</TooltipContent>
			</Tooltip>
			<PopoverContent
				className="w-[206px] p-0 rounded-lg"
				align="start"
				onCloseAutoFocus={(e) => e.preventDefault()}
			>
				<Command className="rounded-lg">
					<CommandInput
						value={searchValue}
						onValueChange={(searchValue) => setSearchValue(searchValue)}
						className="text-[0.8125rem] leading-normal"
						placeholder="Set priority..."
					>
						{!isSearching && <Kbd />}
					</CommandInput>
					<CommandList>
						<CommandGroup>
							{priorities.map((priority, index) => (
								<CommandItem
									key={priority.value}
									value={priority.value}
									onSelect={(value) => {
										setSelectedPriority(
											priorities.find((p) => p.value === value) || null,
										);
										setOpenTooltip(false);
										setOpenPopover(false);
									}}
									className="group rounded-md flex justify-between items-center w-full text-[0.8125rem] leading-normal text-muted-foreground"
								>
									<div className="flex items-center">
										<priority.icon
											title={priority.label}
											className="mr-2 size-4 fill-muted-foreground group-hover:fill-primary"
										/>
										<span>{priority.label}</span>
									</div>
									<div className="flex items-center">
										{selectedPriority?.value === priority.value && (
											<CheckIcon
												title="Check"
												className="mr-3 size-4 fill-muted-foreground group-hover:fill-primary"
											/>
										)}
										<span className="text-xs">{index}</span>
									</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
