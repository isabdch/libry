import { HeaderComponent } from "./HeaderStyles";

export function Header() {
    return (
        <HeaderComponent>
            <div className="container">
                <h1>e-Library</h1>
                <button>Sign In</button>
            </div>
        </HeaderComponent>
    )
}