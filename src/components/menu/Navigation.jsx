const Navigation = () => {
    return (
        <ul className="nav__bar__links">
            <li>Home</li>
            <li>Trait Planner</li>
            <li>Community Builds</li>
            <li
                href="https://discord.gg/S42Bgaz"
                target="_blank"
                rel="noreferrer"
                key="navBarLink:Discord"
            >
                Discord
            </li>
        </ul>
    )
}

export default Navigation
