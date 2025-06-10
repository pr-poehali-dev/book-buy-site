import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import BookCatalog from "@/components/BookCatalog";
import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/BookingList";
import type { Book } from "@/components/BookCard";
import type { BookingData } from "@/components/BookingForm";

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Сначала - дружба",
    author: "Сунгуров Антон",
    price: 890,
    image:
      "https://cdn.poehali.dev/files/d4d18104-4891-4ceb-87eb-d2ec187fc195.jpg",
    description:
      "Романтическая история по мотивам одноимённого короткометражного фильма о том, как дружба может перерасти в нечто большее",
    available: true,
  },
  {
    id: "2",
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    price: 750,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description: "Психологический роман о преступлении и морали",
    available: true,
  },
  {
    id: "3",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    price: 680,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description: "Фантастика о дьяволе в Москве",
    available: true,
  },
  {
    id: "4",
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    price: 590,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description: "Роман в стихах о любви и обществе",
    available: false,
  },
  {
    id: "5",
    title: "Анна Каренина",
    author: "Лев Толстой",
    price: 820,
    image:
      "https://images.unsplash.com/photo-1471023492936-e2b34dea3b1f?w=300&h=400&fit=crop",
    description: "Роман о любви и семье в высшем обществе",
    available: true,
  },
  {
    id: "6",
    title: "Идиот",
    author: "Фёдор Достоевский",
    price: 740,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    description: "Роман о князе Мышкине и его судьбе",
    available: true,
  },
];

const Index = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [currentView, setCurrentView] = useState<"catalog" | "bookings">(
    "catalog",
  );
  const { toast } = useToast();

  const handleBookingClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleBookingSubmit = (booking: BookingData) => {
    setBookings((prev) => [...prev, booking]);
    toast({
      title: "Бронирование успешно!",
      description: `Книга "${booking.book.title}" забронирована на имя ${booking.customerName}`,
    });
  };

  const handleCloseForm = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setCurrentView("catalog")}
            variant={currentView === "catalog" ? "default" : "outline"}
            className={
              currentView === "catalog"
                ? "bg-purple-600 hover:bg-purple-700"
                : ""
            }
          >
            Каталог книг
          </Button>
          <Button
            onClick={() => setCurrentView("bookings")}
            variant={currentView === "bookings" ? "default" : "outline"}
            className={
              currentView === "bookings"
                ? "bg-purple-600 hover:bg-purple-700"
                : ""
            }
          >
            Мои бронирования ({bookings.length})
          </Button>
        </div>

        {currentView === "catalog" ? (
          <BookCatalog books={mockBooks} onBookingClick={handleBookingClick} />
        ) : (
          <BookingList bookings={bookings} />
        )}

        <BookingForm
          selectedBook={selectedBook}
          onBookingSubmit={handleBookingSubmit}
          onClose={handleCloseForm}
        />
      </div>
    </div>
  );
};

export default Index;
