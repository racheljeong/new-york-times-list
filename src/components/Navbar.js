'use client';
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../components/home.module.css";


export default function Navbar() {

    const router = useRouter();
    //console.log(router); //url정보, pathname등 알 수 있음
    

    // Public에 있는 파일들은 별도의 경로 필요없이 /파일명으로 가져다쓰면 됨
    return (
        <nav className={`${styles.nav}`}>
        <img className={`${styles.logoImg}`} src="/NYTlogo.png"/>
            <div className={`${styles.navContainer}`}>
            <Link className={`${styles.linkDeco}`} href="/" style={{color : router.pathname === "/" ? "salmon" :"rgb(182, 182, 208)", margin: "10px"}}>Home</Link>
            <Link className={`${styles.linkDeco}`} href="/about" style={{color : router.pathname === "/about" ? "salmon" :"rgb(182, 182, 208)", margin: "10px"}}>About</Link>
            </div>   
        </nav>
    );
}