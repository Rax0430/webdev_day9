import NavBar from "./components/nav-bar";
import HeroSection from "./pages/Homepage/hero-section";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col bg-white-300">
      <NavBar />
      <div className="bg-amber-950">
        <h1 className="text-orange-100 items-center text-center">
          Outstanding Customer Service | Fast Shipping | Industry Expertise
        </h1>
      </div>
      <HeroSection />
      <section className="bg-orange-200 w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 ">
          <h1>Newest Arrivals and Restocks</h1>
          <p>all coffee is unroasted</p>

          <div className="flex gap-5">
            <div className="flex flex-col gap-3 bg-white rounded-lg p-1">
              <img
                src="https://coffeeproject.com/cdn/shop/products/Special_Prep_e9570d42-17f6-440a-898c-5922bd4b31b7.jpg?v=1574370799&width=360"
                alt=""
                className="w-[200px] h-[200px] p-3"
              />
              <h1 className="pl-3">Kopiko 3 in 1</h1>
              <h1 className="pl-3">$ 8.00 USD</h1>
              <div className="w-full flex items-center justify-between border border-gray-500 p-3 rounded-md">
                <button>-</button>
                <input
                  type="text"
                  className="w-[100px] bg-transparent text-center"
                  value={0}
                />
                <button>+</button>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-3 bg-white rounded-lg p-1">
                <img
                  src="https://coffeeproject.com/cdn/shop/files/kenya3.jpg?v=1727146259&width=360"
                  alt=""
                  className="w-[200px] h-[200px] p-3"
                />
                <h1 className="pl-3">Kopiko 3 in 1</h1>
                <h1 className="pl-3">$ 8.00 USD</h1>
                <div className="w-full flex items-center justify-between border border-gray-500 p-3 rounded-md">
                  <button>-</button>
                  <input
                    type="text"
                    className="w-[100px] bg-transparent text-center"
                    value={0}
                  />
                  <button>+</button>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-3 bg-white rounded-lg p-1">
                  <img
                    src="https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360"
                    alt=""
                    className="w-[200px] h-[200px] p-3"
                  />
                  <h1 className="pl-3">Kopiko 3 in 1</h1>
                  <h1 className="pl-3">$ 8.00 USD</h1>
                  <div className="w-full flex items-center justify-between border border-gray-500 p-3 rounded-md">
                    <button>-</button>
                    <input
                      type="text"
                      className="w-[100px] bg-transparent text-center"
                      value={0}
                    />
                    <button>+</button>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col gap-3 bg-white rounded-lg p-1">
                    <img
                      src="https://coffeeproject.com/cdn/shop/files/colombia4.jpg?v=1727148052&width=360"
                      alt=""
                      className="w-[200px] h-[200px] p-3"
                    />
                    <h1 className="pl-3">Kopiko 3 in 1</h1>
                    <h1 className="pl-3">$ 8.00 USD</h1>
                    <div className="w-full flex items-center justify-between border border-gray-500 p-3 rounded-md">
                      <button>-</button>
                      <input
                        type="text"
                        className="w-[100px] bg-transparent text-center"
                        value={0}
                      />
                      <button>+</button>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3 bg-white rounded-lg p-1">
                      <img
                        src="https://coffeeproject.com/cdn/shop/files/20240923_134614.jpg?v=1727126289&width=360"
                        alt=""
                        className="w-[200px] h-[200px] p-3"
                      />
                      <h1 className="pl-3">Kopiko 3 in 1</h1>
                      <h1 className="pl-3">$ 8.00 USD</h1>
                      <div className="w-full flex items-center justify-between border border-gray-500 p-3 rounded-md">
                        <button>-</button>
                        <input
                          type="text"
                          className="w-[100px] bg-transparent text-center"
                          value={0}
                        />
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="-full flex items-center justify-between border border-orange-500 bg-orange-500 pl-8 pr-8 pt-3 pb-3 rounded-md text-white">
          View All
        </button>
      </section>
    </main>
  );
}

export default App;
