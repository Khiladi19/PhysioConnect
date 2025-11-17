import { motion } from "framer-motion";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Book Your Session
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-xl mb-3"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full p-3 border rounded-xl mb-3"
        />
        <textarea
          placeholder="Address"
          className="w-full p-3 border rounded-xl mb-3"
          rows="3"
        ></textarea>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium mt-2">
          Send OTP
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full py-2 rounded-xl border"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
}
