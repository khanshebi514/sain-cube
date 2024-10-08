
export default function Modal({ message, isSuccess, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-5 rounded-lg shadow-lg max-w-[400px] w-full">
      <h2 className={`text-xl font-bold ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
        {isSuccess ? 'Success' : 'Error'}
      </h2>
      <p className="mt-3">{message}</p>
      <button
        className="mt-5 w-full bg-blue-500 text-white py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
  )
}
