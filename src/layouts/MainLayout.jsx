import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const MainLayout = () => {
    const [firstLoading, setFirstLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoading(false);
        }, 3000);
    }, []);

    // ! FIXME: how to make loader properly?

    return (
        <>
            {firstLoading ? (
                <>
                    <LoadingScreen opacity={1}></LoadingScreen>
                </>
            ) : (
                <>
                    <Header></Header>
                    <main className="main">
                        <Outlet></Outlet>
                    </main>
                    <Footer></Footer>
                </>
            )}
        </>
    );
};

export default MainLayout;
