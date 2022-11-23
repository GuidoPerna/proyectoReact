import NavBarReact from "./Nav";

export const Layout = ({children}) => {
    return(
        <main>
        <NavBarReact/>
        {children}
    </main>
    );
};