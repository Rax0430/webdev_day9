export default function NavBar() {
  return (
    <nav className="flex justify-center w-full p-3">
      <div className="flex justify-between gap-5 items-center max-w-[1280px] w-full-max">
        <div className="flex gap-5">
          <img
            src="https://coffeeproject.com/cdn/shop/files/coffeeproject-logo_BeanBannerNewLarge_transparent.png?v=1644553817&width=300"
            alt=""
          />
        </div>

        <div className="flex gap-5 font-medium">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Branches</a>
          <a href="">Contacts</a>
        </div>
        <div className="flex gap-5">
          <h1>x</h1>
          <h1>y</h1>
          <h1>z</h1>
        </div>
      </div>
    </nav>
    
  );
}
