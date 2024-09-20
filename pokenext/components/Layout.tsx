import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps{
    children: ReactNode
}

export default function Layout({children}: LayoutProps){
    return (
        <>
        <Head>
            <link rel="shorcut icon" href="/images/favicon.ico"/>
            <title>Pokenext</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}