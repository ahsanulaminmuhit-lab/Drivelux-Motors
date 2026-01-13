
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaBoxOpen,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const OrderSuccess = () => {

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="p-8">
        <div className="text-center">
          <div className="bg-green-100 inline-flex rounded-full p-4 mb-6">
            <FaCheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase! Your order has been confirmed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/allProducts">
                <FaArrowLeft className="mr-2" /> Continue Shopping
              </Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">
                <FaBoxOpen className="mr-2" /> View My Orders
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderSuccess;
