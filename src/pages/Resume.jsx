import myResume from '/src/assets/Resume.png';

export default function Blog() {
    return (
      <div className="container text-center mb-5">
        <h1>My Resume</h1>
        <p>
         Please feel free to <a href="/Contact">contact me</a> if you have any question or if you would like to connect!
        </p>
    
        <img src={myResume} alt="My Resume" width="600px"/></div>
      
    );
  }