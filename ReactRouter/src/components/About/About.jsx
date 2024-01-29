export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://reactrouter.com/_docs/tutorial/15.webp"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              What is React Router ?
            </h2>
            <p className="mt-6 text-gray-600">
              React Router enables client side routing. In traditional websites,
              the browser requests a document from a web server, downloads and
              evaluates CSS and JavaScript assets, and renders the HTML sent
              from the server. When the user clicks a link, it starts the
              process all over again for a new page. Client side routing allows
              your app to update the URL from a link click without making
              another request for another document from the server. Instead,
              your app can immediately render some new UI and make data requests
              with fetch to update the page with new information.
            </p>
            <p className="mt-4 text-gray-600">
              This enables faster user experiences because the browser doesnt
              need to request an entirely new document or re-evaluate CSS and
              JavaScript assets for the next page. It also enables more dynamic
              user experiences with things like animation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
