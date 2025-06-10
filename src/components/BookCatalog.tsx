import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BookCard, { type Book } from "./BookCard";

interface BookCatalogProps {
  books: Book[];
  onBookingClick: (book: Book) => void;
}

const BookCatalog = ({ books, onBookingClick }: BookCatalogProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = ["all", "Фантастика", "Детективы", "Романы", "Научпоп"];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || book.description.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-2">
          Книжный магазин
        </h1>
        <p className="text-gray-600 mb-6">
          Найдите и забронируйте любимые книги
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Поиск по названию или автору..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />

          <div className="flex gap-2 flex-wrap">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
                className={
                  selectedGenre === genre
                    ? "bg-purple-600 hover:bg-purple-700"
                    : ""
                }
              >
                {genre === "all" ? "Все" : genre}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onBookingClick={onBookingClick} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Книги не найдены. Попробуйте изменить запрос.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookCatalog;
