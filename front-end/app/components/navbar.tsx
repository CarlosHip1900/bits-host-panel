import Link from "next/link";

export function NavBar() {
    return (
        <nav className="bg-black/40 border border-cyan-400/20 rounded-full px-4 py-2">
                <ul className="flex items-center gap-3">
                    { NavBarButton("home", "Home", true) }
                    { NavBarButton("nodes", "Nodes", false) }
                    { NavBarButton("proxies", "Proxies", false) }
                    { NavBarButton("database", "Database", false) }
                </ul>
            </nav>
    )
}

function NavBarButton(route: string, title: string, selected: boolean){
    var classId = selected ?
     "px-6 py-2 rounded-full border-2 border-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-padding border-gradient-to-r from-blue-900 to-cyan-400"
      : "px-6 py-2 rounded-full font-bold text-sm hover:border hover:border-blue-500 hover:bg-black";

    return (
        <Link
        href={route}
        className={classId}>
            {title}
        </Link>
    )
}