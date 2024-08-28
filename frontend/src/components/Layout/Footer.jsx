import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          <span className="text-[#56d879]">Subscribe</span>
          <span> us for daily news </span>
          events and offers
        </h1>
        <div>
          <input
            type="email"
            required
            placeholder="Enter your Email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full  ">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="sdsdad.png"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p className="font-Poppins">Get your farm something beautiful</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillLinkedin
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span> © 2024 Farmpal, All rights reserved. </span>
        <span> Terms ~ Privacy Policy </span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAwFBMVEX///9gu0coKT0AACYAACckJToMDiwhIjhdukNZuT0aGzORkZnDxMgAACQeHzZUtzcAACAREy4VFzAFCCnp6etVVWP19fbf3+IbHDRQtjGPzX+t2qKLi5P5+fqioqjV1di0tLlAQVHQ0NM5OktxwlxJSliZmaB1dX+wsLUAAB1tbXjC47tnvk/u9+wvMEN7xWie05HM58ZfX2uDyHLd79l/f4jP6cnp9eb2+/WUz4YAABO637G9vcKg05Xg8dwAAAb6TDctAAAMKElEQVR4nO2caWOiyhKGtZFFFBAQhai4JGrGJGY1y9Fk/v+/ur2wdEOTeM/N4Dm59XyYSQh04LWquqq6SaMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ku5efl4ebn5Ly/qD4fD/h+5nX8BT6MzI4oix8H/NM/2T8ddNe0sLaultKze+e4wIEdWsz94k/8wnt7aTtswmikG/vbua+W6c8XUVTsMbRWpoaYEi8bu16aG+/1HsL92csUy2tHF1efXrS0Vmcp8s9ttlr6rIqRrdmj/n8h21ZSJRm3OuX6uvm4w95Dqd5KoNrg81xBBf6jntk/Lza0j14wJFz1WThDLEOlbfiqIFWxwSF3WcNen5iqqsLTc4u7lV66xrW0HwqGFRWQ7r+G2T8xb9LlohOhdduUBS6RMiwd7WLdwUsONn5Tb9teqNZvOo+RSEyFJ8O/g+Gb99BzuONXwnHpbunTlIuQvykMudeQXbfCHcaxqWLeSvWFjU22JN/YtpHXruPmT8SZRzTD4pJfz0zvx2oWCM41ANuoudGc13PzJ2BdnA6MdNW/f3u9uDUkeF4mZ78rDoW0tG3aoeKta7v80vBRUa0e3Vy/Jz54luZwj5G8bG8u2kw4cuOM/fe8n5EK0qOjuhf9pyRSbhjAtBHplOXCwfnB1dSXYk9H8oAfv3kZJ/f5U0i3i014iW0VeO/gtjXk/A8HWjIvXBrEwp43j2xk7oaxbk7v8AcuG/IFs5MYPzj9G/CxqXJNDacGQJrf7YnxzuFmBxDb0s6dMGeVoP8pUSifNQvRL1GWMTVJ9zk9y76fjnrckZ4+P3OQ+aVywk55L5pb3LWcu6RG5ndPc/ql45AyJqfTOeW2UTKrXRXM7ywYYWrS31opPcvsn4lUwNtqJbHIN8dRLR8Uyop0PoapUN0Weu/1MeB816ATJkl+j3Xai6GKUnPb0iZd2TCob8tDhFE9wEu44M2pTke7JilX79m7/zBUDd8Uaqz3KftbvMdmQ6p//vwjHz5HMR6/er55es5+/vtyP3i6cUqnPVwrrxNyIcNv46xbbYDGLV/Fh+J3PMZiSMWffOuYn8HpEQq35+nE1OrtuR468EWLkZ05sFWXCea3lp8oN4rnva5rnaQpaJe2meLlZ78adTmc8Xj8EaYzsd6fD/oDQH067LJ+eLB827Mz1wzJPpg+B5rue57nWPG/8xeuHzgJXd+ff3ysVqvgoOXjztH9/vHYcLFhRrHYGr/HQzXWjygWzqm547Hu665/PbV9HqquyJx+7th2ahNDWzXTdZtfzFUXBErcsxf9rRo/1fyVnhratpBFhtm25ruvZdLGsl8/ow0usZ2MYfL8JCqGe5bB7YmByC2sao4x33jSHpo54dM3syMqtyYOP7DAmP1osSXvTosYxtlzFSy61lUw2JRtV9Xozemzwl8ZO9Hz3F+uBTueWtd1dzuKNRk/vZa3R6WXj8rIbzySd5/8RYSJl4apUSXE4VeP0566gG35QpZzITeYmMoNUzwdiHj71IOyIsc9U20xSQ+12OkHIBpuvOonJDCakv4f8GLsvPRBbZuqt/cAWChYs22qwW02/f566KstWqgiOkQ1bTE80OIS0ZdHgyHJqvnQ6IZro2UPG1IwKxW1AB/UFN8PauNlHEltc92USkmCRrftM48ause5i9b4bQTZWSb38PdlwDLFsUTdbF4Pxzk2ti0GF8mfJdwNqboWGJ6vcfGEcVVXN9OvuL2RyZR2tj7PloEG/MWwMyH/fjVCRJpn/35QNf7qbnsnPDUjf8jMDWXEWuuR9RfAp2oHKFWFDUi1d3l76LU4pVxSaqlzDuo8gW8TStdvqxfnPZcOPNDZ93uRCvut7rhb7clRjK/XAA904oggOyaxNaB5fukhJ7Sd2xeUfqnINsgkzaVIw7asX/4yzjKoNId2N7+W6KXk4PvilVegl0S0zwAmVSFy1WbKA6XNWG+i5UHNVlI3abw2y3fB5W3tfPpYJxnI4IyN6rRqz39HCbELN4zXxQVeY1CbE/jhTWhNDFdYOhxaiFskpgX1Uy0YhZR2/ata36pFNqBKMpJn7WPZS4/Gq4LvGJ4P210qqm58+w4Q8oroMOOi8h3VJL+vSQGZxfjwObWqRYR6/8DxiZ9+QMS3uo6hNNqFvm4Suj7K5Rc9iGMwkrqCbZqqZLXRp5HJ5PFoYuG52Fb0mt6XGxNOX2LqIDWbH5qqZryIGitbjl2hrk43vSSa1vGSRnuQmd8JBrgMiZbBMHDUVhbWXVp0Sq7y0HIeiZc00nMZRT84miqGSzyH4t8zEhkBtsgnJbWZChWau4byI7ozN78vdvEk0T2c9ui74xTbBKc1Ittn3gd5iq/75RLHy5BsnGHVNCQU10h74q1CSGkSjwmrqZ6GNMWAbUdPkU4z+FVDLyqxpaBF/HLYQJzhStVnl5X1aVNQi25sgUGpurxe5Su0mEVP02vbdZ2MyYrY2k4Qq4j5fboGmnuylldPYpL5JteyxiWKqqF5Vc2XSUVxUl2zi2nG+ALqn2+zJ7noaxQqLCdFHPkJYtdXU5TP8Yq4ghS7nZF5oswKWapnUqmMzrFqyiG1FG9t1yVZYA3Xy/R/3d4+3j+9sligszKcLgYS+9avi86d5WCqbcoyT0vwVacyyDhqbVGnESwxV5ycEjklsW9Z6QKfdemQrBi1Z9v9S2K8VcZvth4pSUSsfXE42Fx2zc5xW98lzB3aSoG2pluSrhSJdxx50NM1a95M4WNNexOvmV7p9FNq8vLHhhKxqqyl9iDS20WdH8hNz6HIO88NhK03QOllfYxe6ki5QR/G87TT7jTXJ9lxwQKf4wktpq5aQfcxc2aMQ6FyazqQ0H2l92cOheQpNQcZm6o/US6mGnlBDMBaqi7RkrqlTtlIx5dzyslxdFDtJ7Tf+6ku3KtIPPC5vO3KHzSVx5hbRy7SzSEgslVS3Xb88F8c9FbnpNFGrbK+losBpvu3vn5+e70eP7fI2VDFnW3mqLR93gCVQw+y0o+YEWrqS5m06IRBo9YBtb22XdqRfWvyotcpWdFMa4dqOI127KhUIuxBVZKBkXstrUlqn+1966UOyOTOw1ewY2VVN0jlX1Qtn938hvmder2zc1qyvifbitdj7KjZTkuo9fwa6w8aUZF2xkL/QZqU26Vse1+xmJUZXK22hJjkON7nWLFvj7WjdnOL7Q8Q8NOmkMDaR6mXf0SxOknbFfwnxakIbtIuVx79Bs6N9gXO1+FbNhHwWYd4RYbLVuKPi7Ejdim8lJBlqKFsVxTpxJjOl5sYV6oyh5YuPSeTV1+c2HwYX1MPVUhVPj3v5yiJtite6s/PuiDfVpO+qUUOwJbG+44lrB3RdFIXiow9dveDhVAo972+yX0KzvpIgdN7lPJdatFnryxDljfQljKj8DvOE7TdyS0GLLFRp/BJzn+0fNOecp11aaq+YLLOGkyocY16qFas4KluelByso/os38tT84sXr9rXH+WrcDjRfHy37oP4TAtNRbZoWcnCu56+5jw5LDVUfuODphuF4E97w+X8kC12aUm8jC0toHUYGX5Z3ysRb5+9iGvIXyZd+NZiOicvEOmz/Oikgz94HRUi3ibZ8WD6281uM3c1HXnlpuOUxPVeIfiTY63SZo4hXbNQEdFtEfi92YLoqJ7HYzVs1fcu68dtlXBG9PgiveTwm9gA+QsDSNuupuReJ9OxiXX0yjukNszeSHQP6e4uV9aqxUVBqRpYy9Mc1gpV/Xmw9T0yhdK9T6pn1rwH++kxKqe4OPc9k/gnZTKj/x10UhJ4vnY+32q+iU1N+uLQysrWAsnjWdJ3snBBUaoGsJd6kk3VHTf9GGzrgXxKcbJmZte94/9mfxFx1QGWLLrdH/HXZ2KbqIVUsgNa9aylfHtUf93S6KqWqpvKufycoVWqBrCXqtL+1JzaG/59QTLWRqF/TWMrfy3nj3LzPDq7jgjO9dnouXIhuUB3PKd/dkaxlp3q14Ym3fGDbvW8oPqc4PesdGz8Wx7jV16v5y07eRZ9Oe/5wSl3+78eqxfHt/yRo4lshLq25QIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACn4T/xrOj8g1/4AwAAAABJRU5ErkJggg=="
            alt=""
            style={{ width: "70px", objectFit: "contain" }}
            title="Payment Partner"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
