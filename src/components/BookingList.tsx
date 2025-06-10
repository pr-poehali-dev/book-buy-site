import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BookingData } from "./BookingForm";

interface BookingListProps {
  bookings: BookingData[];
}

const BookingList = ({ bookings }: BookingListProps) => {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Пока нет забронированных книг</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
        Мои бронирования
      </h2>

      {bookings.map((booking) => (
        <Card key={booking.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-montserrat">
              {booking.book.title}
            </CardTitle>
            <CardDescription>
              {booking.book.author} • Забронировано {booking.bookingDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Имя:</span>
                <p className="text-gray-600">{booking.customerName}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <p className="text-gray-600">{booking.email}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Телефон:</span>
                <p className="text-gray-600">{booking.phone}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Цена:</span>
                <p className="text-purple-600 font-bold">
                  {booking.book.price} ₽
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookingList;
