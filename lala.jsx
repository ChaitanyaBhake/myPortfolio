    {/* All Projects */}
    {projects.map((project) => (
        <div
          className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color} `}
          key={project.id}
        >
          <div
            className={`flex flex-col lg:gap-8 gap-2 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)]  p-5 rounded-xl lg:w-[80%] lg:h-fit item  md:w-[50%] md:h-[70%] w-[92%] h-[80%] justify-between `}
          >
            {/* Title Div */}
            <div className="lg:h-[20%]  h-[15%] bg-gradient-to-tr from-black to-slate-400 bg-clip-text text-transparent lg:block md:block  bg-red-200">
              <h1 className="h-full text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl ">
                {project.title}
              </h1>
            </div>

            {/* Project Video and Desc Wrapper */}
            <div className=" lg:flex lg:overflow-y-visible lg:items-center lg:justify-start md:flex-row flex-col items-center justify-center gap-4 lg:h-[80%] h-full  w-full  overflow-y-auto ">
              {/* Project Video */}
              <div
                className={`lg:w-[50%] lg:h-fit h-fit rounded-3xl shadow-2xl lg:mb-0 mb-5   ${
                  shadowColorMap[
                    project.shadowColor
                  ] || ''
                }`}
              >
                {/* <div className="h-[50%] md:w-[100%] lg:hidden">
                  <img
                    src={project.img}
                    alt="projectPreview"
                    // width={320} // adjust based on breakpoints
                    // height={120}

                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div> */}

                {project.video && (
                  <div className="relative w-full h-full place-content-center">
                    {' '}
                    <video
                      autoPlay
                      muted
                      loop
                      src={project.video}
                      className="object-cover rounded-3xl w-full"
                    ></video>
                  </div>
                )}
              </div>

              {/* Project DESC */}
              <div className="lg:h-[100%] lg:w-[50%] w-full  h-[50%] flex flex-col items-center  rounded-2xl  shadow-[0_0_20px_rgba(0,0,0,0.2)] p-1  overflow-auto ">
                <ul
                  className=" list-disc lg:pl-9 lg:p-7 pl-5 pb-5 space-y-2 flex flex-col lg:gap-20 gap-1 
                xl:text-[1.7rem] lg:text-[1rem] text-[1rem] text-black italic"
                >
                  {project.desc
                    .split('.')
                    .map((sentence, index) =>
                      sentence.trim() ? (
                        <li
                          key={index}
                          className="border-b border-slate-200"
                        >
                          {sentence.trim()}.
                        </li>
                      ) : null
                    )}
                </ul>
              </div>
            </div>

            {/* Tech Icon Stack and See Demo Wrapper */}
            <div className="lg:flex flex  justify-between items-center ">
              {/* TechSTack Icons  */}
              {project.techStack && (
                <div className="flex gap-1 lg:-ml-0 -ml-2 ">
                  {project.techStack.map(
                    (icon, i) => (
                      <div
                        key={i}
                        className="lg:w-[44px] lg:h-[44px] w-[30px] h-[30px] bg-slate-700 p-2 rounded-full"
                      >
                        <img
                          src={icon}
                          alt="techIcon"
                          className="w-full h-full"
                        />
                      </div>
                    )
                  )}
                </div>
              )}

              {/* See Demo Button */}
              <Link
                href="#"
                className=" flex justify-end "
              >
                {' '}
                <button className="p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg bg-white text-slate-600 font-semibold lg:m-4 rounded-xl cursor-pointer">
                  See Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}