import { ContactDetails } from "@/components/ContactDetails";

export default function Home() {
  return (
    <div>
      <div className="py-12 mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          We’re always here to help.
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Whether you’re looking to place an order, explore our product range,
          or have any inquiries, reach out — our team will get back to you
          promptly.
        </p>
        <div className="py-32 sm:py-48 lg:py-56">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Get in Touch
          </p>
          <ContactDetails />
        </div>
        <div className="py-12 sm:py-24 lg:py-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Business Details
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Director:
              </span>
              <span className="text-gray-900 dark:text-white">
                Ritesh Gupta
              </span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                GST No.:
              </span>
              <span className="text-gray-900 dark:text-white">
                07ACUPG9306M1ZZ
              </span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                MSME Status:
              </span>
              <span className="text-gray-900 dark:text-white">Registered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
