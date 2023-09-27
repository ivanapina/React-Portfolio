import profilePic from '/src/assets/profile-pic.png';

export default function Home() {
    return (
      <div className="container text-center mb-5">
        <img src={profilePic} alt="Profile Picture" height="200"/>
        <h1>About Me</h1>
        <p>
          Hello, my name is Ivana and I am a software developer with a background in Fashion and Sustainability!
          I am motivated in building applications that help make businesses more sustainable by using the latest technology to solve todays issues within the Fashion Industry. 
        </p>
      </div>
    );
  }
  