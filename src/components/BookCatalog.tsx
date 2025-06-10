import BookCard, { type Book } from "./BookCard";

interface BookCatalogProps {
  books: Book[];
  onBookingClick: (book: Book) => void;
}

const BookCatalog = ({ books, onBookingClick }: BookCatalogProps) => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-2">
          Романтическая книга
        </h1>
        <p className="text-gray-600 mb-6">
          Трогательная история о дружбе и любви
        </p>
      </div>

      <div className="flex justify-center">
        <div className="max-w-sm">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onBookingClick={onBookingClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;
