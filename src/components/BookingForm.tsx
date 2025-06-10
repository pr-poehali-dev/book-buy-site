import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Book } from "./BookCard";

export interface BookingData {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  book: Book;
  bookingDate: string;
}

interface BookingFormProps {
  selectedBook: Book | null;
  onBookingSubmit: (booking: BookingData) => void;
  onClose: () => void;
}

const BookingForm = ({
  selectedBook,
  onBookingSubmit,
  onClose,
}: BookingFormProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook) return;

    const booking: BookingData = {
      id: Date.now().toString(),
      ...formData,
      book: selectedBook,
      bookingDate: new Date().toLocaleDateString("ru-RU"),
    };

    onBookingSubmit(booking);
    setFormData({ customerName: "", email: "", phone: "" });
    onClose();
  };

  if (!selectedBook) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader>
          <CardTitle className="font-montserrat text-gray-800">
            Бронирование книги
          </CardTitle>
          <CardDescription>
            {selectedBook.title} - {selectedBook.author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                type="text"
                value={formData.customerName}
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.value })
                }
                required
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="example@mail.ru"
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                Забронировать
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
