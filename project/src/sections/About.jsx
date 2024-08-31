const About = () => {
    return (
      <div id="scroll-target" className="ml-5 mt-10 mr-5  flex justify-center items-center m-automax-md:flex-col max-md:mb-4">
        <h2 className="mr-4 text-customGreen3 p-2 text-3xl font-bold ">
          About SnakeVoyage
        </h2>
        <hr></hr>
        <div className="border-l-2 rounded-sm p-4 text-lg">
          <p className="font-bold">
          Snakes are cute patootie i mean look at this guy ''🐍''
          <div className="w-40 flex justify-center items-center m-auto"> <img src="src\assets\icons\Snakes-see-crop_3x4.avif"/></div>
          how can anybody not love them?<br></br>
          but in all seriousness i made this projet for following reasons:

          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="">Sometimes it takes something easy and less tense to connect with people this may seem like a simple project but what i tried was to play around and bond with other country . It does not take a serious meeting of officials but simple fact as that mamushi the famous song of megan thee stallion is a snake species from japan and then you go in rabbit hole in japanese culture.</span> 
            </li>
            <li>
              <span className="">It is a simple 3D globe where when you click on coutry it shows the native snake species of that country</span> 
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;