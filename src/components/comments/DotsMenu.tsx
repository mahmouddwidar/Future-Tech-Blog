import { DotsMenuOption } from "@/utils/type";
import DotsMenuIcon from "../icons/DotsMenuIcon";
import { useState } from "react";

export default function DotsMenu({ options }: { options: DotsMenuOption[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="relative right-0 z-10">
			<button className="hover:cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
				<DotsMenuIcon className="size-5 fill-white group-hover:fill-grey-50" />
			</button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-dark-15 shadow-lg">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={option.onClick}
                            className={`block cursor-pointer w-full px-4 py-2 text-left text-sm text-grey-90 transition-colors duration-200 hover:bg-dark-10 ${option.className}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
		</div>
	);
}
