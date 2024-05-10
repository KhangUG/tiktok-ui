import Header from "./Header";
import Sidebar from "./Sidebar";

function defaultLayout(children) {
    return (
        <div>
            <Header/>
            <div className="container">
                <Siidebar>

                </Siidebar>

                <Content className="content">{children}</Content>
            </div>
        </div>
    );
}

export default defaultLayout;