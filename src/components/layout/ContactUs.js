
export default function ConnectUs() {
    return(<div>

           <section className="bg-black rounded-xl">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12 rounded-lg">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 rounded-lg">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    </aside>

                    <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="mt-6 text-2xl font-bold text-lime-400 sm:text-3xl md:text-4xl">
                        Welcome to OSS 
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                        quibusdam aperiam voluptatum.
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="FirstName" className="block text-sm  font-medium text-gray-700">
                            First Name
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            className="mt-1 w-full rounded-md h-8 border-gray-200 bg-white text-sm pl-3 text-black shadow-sm"
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                            </label>

                            <input
                            type="text"
                            id="LastName"
                            name="last_name"
                            className="mt-1 w-full rounded-md h-8 border-gray-200 bg-white text-sm pl-3 text-black shadow-sm"
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> College Email </label>

                            <input
                            type="email"
                            id="Email"
                            name="email"
                            className="mt-1 w-full rounded-md h-8 border-gray-200 bg-white text-sm pl-3 text-black shadow-sm"
                            required
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700"> message </label>

                            <input
                            type="message"
                            id="message"
                            name="message"
                            className="mt-1 w-full h-28 pl-3 text-black rounded-md border-gray-200 bg-white text-sm shadow-sm"
                            required
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />
                            <span className="text-sm text-gray-700">
                                I want to receive emails about events, product updates and company announcements.
                            </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                            Send Email
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                            Messege at   
                            <a href="#" className="text-lime-400 underline pl-2">instagram</a>.
                            </p>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
                </section>
    </div>)
}