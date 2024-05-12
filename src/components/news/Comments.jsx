const Comments = (props) => {
  // console.log(props.comments.data);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.comments.data.map((item, i) => {
            return (
              <div key={i} className="p-4 md:w-full">
                <div className="flex rounded-lg h-full bg-gray-100 p-2 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img
                        src="/heroImg.jpg"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {item.users.firstName}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      {item.descriptions}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comments;
