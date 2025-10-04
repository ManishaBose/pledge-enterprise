import { WhyChooseUs } from "./WhyChooseUs";

export const HomePage = function () {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Empowering Mobility. Enhancing Lives.
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Pledge Enterprise is a trusted supplier of high-quality Ortho Aids and
          Surgical Products — from Walkers and Wheelchairs to Commode Stools and
          Accessories. Delivering comfort, reliability, and care across India.
        </p>

        <div className="py-32 sm:py-48 lg:py-56">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Why choose us?
          </p>

          <WhyChooseUs />
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-800 sm:text-4xl">
          About Us!
        </h2>
        <p className="mt-6 text-lg/8 text-pretty text-gray-700">
          Founded by Ritesh Gupta, Pledge Enterprise combines years of industry
          experience with a commitment to quality manufacturing and timely
          supply. Whether you order online via Amazon and Flipkart or through
          our offline network, you can count on consistent excellence.
        </p>
      </div>
    </div>
  );
};
