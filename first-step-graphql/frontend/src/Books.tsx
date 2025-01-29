import "./App.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query Books {
    books {
      title
      author
    }
  }
`;

interface Book {
  title: string;
  author: string;
}

interface BooksData {
  books: Book[];
}

function Books() {
  const { loading, error, data } = useQuery<BooksData>(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:(</p>;

  return (
    <>
      {data?.books.map(({ title, author }) => (
        <div key={title}>
          <p>
            {title} / {author}
          </p>
        </div>
      ))}
    </>
  );
}
export default Books;
