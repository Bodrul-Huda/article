import Link from "next/link";

const ProfileForm = (props) => {
  // console.log(props);
  return (
    <>
      <section className=" bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Profile Details
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    hrmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <p
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
                  >
                    {props.data.data.firstName}
                  </p>
                </div>
                <div>
                  <label
                    hrmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <p
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
                  >
                    {props.data.data.lastName}
                  </p>
                </div>
                <div>
                  <label
                    hrmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <p
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
                  >
                    {props.data.data.email}
                  </p>
                </div>
                <div>
                  <label
                    hrmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <p
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Steve Jobs"
                    required=""
                  >
                    {props.data.data.mobile}
                  </p>
                </div>

                <p>
                  <Link href="/dashboard/update">
                    <button className=" bg-gray-100 py-2 px-4 rounded-md text-sm font-light text-gray-800 hover:bg-gray-200 ">
                      Update Profile
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileForm;
