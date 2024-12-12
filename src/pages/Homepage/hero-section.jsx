export default function HeroSection() {
  return (
    <section className="flex justify-center w-full bg-orange-900 items-center p-3">
      <div className="flex flex-col gap-3 w-full max-w-[1280px] ">
        <h1 className="text-white font-bold text-2xl text-left">Shop For</h1>
        <div className="flex"></div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-3">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/CoffeeSearchImage.jpg?v=1574271653"
              alt=""
              className="w-[300px] h-[300px] rounded-t-lg"
            />
            <span>
              <h1 className="text-white font-bold text-1xl">
                Unroasted coffee {"->"}
              </h1>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/tea.jpg?v=1678917646&width=535"
              alt=""
              className="w-[300px] h-[300px] rounded-t-lg"
            />
            <span>
              <h1 className="text-white font-bold text-1xl">Tea {"->"}</h1>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/GiftCard23.jpg?v=1700810577&width=535"
              alt=""
              className="w-[300px] h-[300px] rounded-t-lg"
            />
            <span>
              <h1 className="text-white font-bold text-1xl">
                Gift Card {"->"}
              </h1>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/Roasters.webp?v=1713995140&width=535"
              alt=""
              className="w-[300px] h-[300px] rounded-t-lg"
            />
            <span>
              <h1 className="text-white font-bold text-1xl">
                Roaster and Parts {"->"}
              </h1>
            </span>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </section>
  );
}
