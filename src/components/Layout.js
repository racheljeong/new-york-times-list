import Navbar from "./Navbar";


export default function Layout ({children}) {
    //여기서 children이란 _App.js에서 넘겨준 <Component {...pageProps} />
    return (
        <>
        <Navbar />
        <div>{children}</div>
        </>
    );
}