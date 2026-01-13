import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCar, FaCalendar, FaMoneyBillWave, FaTag } from "react-icons/fa";


export default function OrderView() {
  return (
    <div className="p-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold text-center">
          My Orders
        </CardTitle>
      </CardHeader>

      <div className="overflow-hidden hover:shadow-md transition-shadow rounded-md bg-gray-100/50">
        <div className="p-0 rounded-md">
          <div className="md:flex h-full">
            {/* Image */}
            <div className="md:w-2/4 h-auto">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Car"
                className="h-full w-full object-cover md:max-h-40"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:w-3/4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Luxury BMW Z4 Convertible</h3>
                <Badge variant="success">Processed</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <FaCar className="text-gray-400" />
                  <span>BMW</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaTag className="text-gray-400" />
                  <span>Quantity: 1x</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-gray-400" />
                  <span className="font-semibold">$12,345</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendar className="text-gray-400" />
                  <span>12/02/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
