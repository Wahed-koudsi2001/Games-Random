import { Outlet } from "react-router-dom";
import "./layout.css";

export default function LayoutHome() {
    return (
        <div className="layoutImgHome">
            <Outlet />
        </div>
    )
}
