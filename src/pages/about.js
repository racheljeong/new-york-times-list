import Seo from "../components/Seo";


export default function about () {
    return (
        <div>
            <Seo title="About" />
            <h1>About us</h1>
            <p>BEST SELLERS METHODOLOGY
A version of this list appears in the October 22, 2023 issue of The New York Times Book Review. Rankings on weekly lists reflect sales for the week ending October 7, 2023. Lists are published early online.</p>
       
        <style jsx>{`
        
        p,h1 {
            max-width: 620px;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            flex-direction: column;
        }
        
    `}</style>
        </div>
    );
}