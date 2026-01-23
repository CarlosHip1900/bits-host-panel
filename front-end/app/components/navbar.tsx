import NavBarButton from "./navbar_button";

export function NavBar() {
    return (
        <nav className="bg-black/40 border border-cyan-400/20 rounded-full px-4 py-2">
            <ul className="flex items-center gap-3">
                <NavBarButton
                    route={"home"}
                    title={"Home"}
                    selected={true}
                />
                <NavBarButton
                    route={"nodes"}
                    title={"Nodes"}
                    selected={false}
                />

                <NavBarButton
                    route={"proxies"}
                    title={"Proxies"}
                    selected={false}
                />

                <NavBarButton
                    route={"database"}
                    title={"Databases"}
                    selected={false}
                />
            </ul>
        </nav>
    )
}
