import Link from "next/link";

type NavBarButtonProps = {
    route: string;
    title: string;
    selected: boolean;
};

function NavBarButton({ route, title, selected }: NavBarButtonProps) {
    const base =
        "px-6 py-2 rounded-full font-bold text-sm transition";

    const classId = selected
        ? `${base} border-2 border-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-padding border-gradient-to-r from-blue-900 to-cyan-400`
        : `${base} hover:border hover:border-blue-500 hover:bg-black`;

    return (
        <Link href={route} className={classId}>
            {title}
        </Link>
    );
}

export default NavBarButton;
