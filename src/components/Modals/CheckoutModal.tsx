import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, ShoppingBag, CreditCard, MapPin, User } from 'lucide-react';
import type { AppDispatch, RootState } from '../../store';
import { clearCart, type CartItem } from '../../store/cart/cartSlice';
import PriceText from '../PriceText';
import type { ModalProps } from '../../store/modals/modalTypes';

function CheckoutModal({ isOpen, onClose }: ModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems: CartItem[] = useSelector<RootState, CartItem[]>((state) => state.cart.items);
  const cartPrice: number = useSelector<RootState, number>((state) => state.cart.totalAmount);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    dispatch(clearCart());
    setIsProcessing(false);
    onClose();
    
    // Reset form
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full h-full md:h-auto md:w-[90%] lg:w-[800px] md:max-h-[90vh] bg-white md:rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-[#1EA4CE]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-white" size={24} />
            <h2 className="text-lg md:text-xl font-semibold text-white">Checkout</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Order Summary - Mobile First */}
            <div className="w-full lg:w-2/5 p-4 md:p-6 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag size={20} />
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-4 max-h-[200px] lg:max-h-[300px] overflow-y-auto">
                {cartItems.map((cartItem) => (
                  <div key={cartItem.item.slug} className="flex items-center gap-3 p-3 bg-white rounded border">
                    <img
                      src={cartItem.item.itemType === 'mug' ? "/jot-market/mug.svg" : "/jot-market/shirt.svg"}
                      alt={cartItem.item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{cartItem.item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {cartItem.quantity}</p>
                    </div>
                    <PriceText price={cartItem.item.price * cartItem.quantity} />
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <PriceText price={cartPrice} />
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="w-full lg:w-3/5 p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <User size={20} />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin size={20} />
                    Shipping Address
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CreditCard size={20} />
                    Payment Information
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-gray-200 bg-white">
          <div className="flex flex-col md:flex-row gap-3 md:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full md:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="checkout-form"
              onClick={handleSubmit}
              disabled={isProcessing || cartItems.length === 0}
              className="w-full md:w-auto px-6 py-3 bg-[#1EA4CE] text-white rounded-md hover:bg-[#1a94b8] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  Complete Order
                  <PriceText price={cartPrice} color="white" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;