import Head from "next/head"; //Next.js제공
import Seo from "../components/Seo";
import Link from "next/link";

export default function Home({results}) {

  return (
    <div className="container">
      <Seo title="Home"/>
      {results?.map((list) => (
        <div key={list.list_name} >
          <Link href={`/list/${list.list_name_encoded}`}>
            <h1>{list.display_name}</h1>
          </Link>
        </div>
      ))}
       <style jsx>{`
    
        h1:hover{
          transform: scale(1.3) translateY(-5px);
          color:rgb(215, 204, 215);
        }
        
        h1{
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}



export async function getServerSideProps() {
    //client쪽이 아니라 server쪽(백엔드)에서만 작동하게되므로 client쪽에서는 절대 볼수없음!!!

    // list_name: 'Race and Civil Rights',
    // display_name: 'Race and Civil Rights',
    // list_name_encoded: 'race-and-civil-right
    // oldest_published_date: '2014-12-14',
    // newest_published_date: '2017-01-15',
    // updated: 'MONTHLY'
  const {results} = await (await fetch (`https://books-api.nomadcoders.workers.dev/lists`)).json();
  //console.log(results);
  return {
    props : {
      results,
    }
  };
}