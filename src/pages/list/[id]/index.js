import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../list.module.css";


export default function Detail ({results}) {
    const router = useRouter();
    //console.log(`Detail`,router);
    console.log(`Detail`,results);
    const name = results.display_name;
    
  
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.name}`}>{name}</h1>
                <div className={`${styles.bookList}`}>
                {results?.books.map((book) => (
                <div className={`${styles.bookCard}`} key={book.rank}>
                    {book.book_image ? 
                        <img className={`${styles.bookImage}`} src={book.book_image}/>
                        :
                        <img className={`${styles.bookImage}`} src="/noImg.png"/> }
                    <h3 className={`${styles.bookTitle}`}>{book.rank}. {book.title}</h3>
                    <h4 className={`${styles.author}`}>{book.author}</h4>
                    <button className={`${styles.bookPurchaseBtn}`}>
                        <Link className={`${styles.link}`} href={`${book.amazon_product_url}`}>Buy Now!</Link>
                    </button>
                </div>
            ))}
            </div>
        </div>

    );
   
}

export async function getServerSideProps(context) {
    //name이 undefined라 return값도 undefined 애러발생
    const { query } = context; // context에서 query 객체를 추출
    const { id } = query;
    //console.log(`id`, id);
   
    try {
        if (!id) {
            // name이 없을 때, 기본 값을 반환하거나 에러 처리
            throw new Error("id parameter is missing.");
        }
                                  
        const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`);
        //console.log(`response`,response);
        const { results } = await response.json();
        //console.log(results);

        return {
            props: {
                results: results || {}, // 빈 객체로 설정
            },
        };

    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                results: {}, // 에러 처리 또는 다른 기본값
            },
        };
    }
    
}