import Header from "../components/Header";
import Sidebar from "./Sidebar";

function defaultLayout( {children }) {
    return (
        <div>
            <Header/>
            <div className="container">
                <Sidebar>

                </Sidebar>

                <div className="content">{ children }</div>
            </div>
        </div>
    );
}

export default defaultLayout;