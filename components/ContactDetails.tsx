export const ContactDetails = function () {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Phone:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          9818257268
        </p>
      </div>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Address:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          B-49, Harder Nagar, Delhi – 110084
        </p>
      </div>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Office Hours:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          10:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
};
