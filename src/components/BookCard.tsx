import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

interface BookCardProps {
  book: Book;
  onBookingClick: (book: Book) => void;
}

const BookCard = ({ book, onBookingClick }: BookCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="p-4">
        <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg mb-4 overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardTitle className="text-lg font-montserrat text-gray-800 line-clamp-2">
          {book.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {book.author}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {book.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">
            {book.price} ₽
          </span>
          <Button
            onClick={() => onBookingClick(book)}
            disabled={!book.available}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            {book.available ? "Забронировать" : "Нет в наличии"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
