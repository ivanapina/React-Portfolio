import project1 from '/Users/ivanapina/React-Portfolio/src/assets/upyourstyle.png';
import project2 from '/Users/ivanapina/React-Portfolio/src/assets/popcornheads.png';
import project3 from '/Users/ivanapina/React-Portfolio/src/assets/weatherdashboard.png';
import project4 from '/Users/ivanapina/React-Portfolio/src/assets/publicaciones.png';
import gitHub from '/Users/ivanapina/React-Portfolio/src/assets/githubPortfolio.png';
import gitHub1 from '/Users/ivanapina/React-Portfolio/src/assets/githubPortfoliow.png';

export default function Portfolio() {
    return (
      <div className="container text-center mb-5">          
                   <h1>Portfolio</h1>  
                    <section className='projects-section bg-light' id='projects' style={{paddingTop: 20}}>
                    <p>
          I am eager to share with you some of my most recent projects that are currently deployed to github pages and some that are soon to be launched! If you have any questions please feel free to contact me.
        </p>   
                    <div className='container px-4 px-lg-5'>
                        <div className='row gx-0 mb-4 mb-lg-5 align-items-center'>
                            <div className='col-xl-8 col-lg-7'><img className='img-fluid mb-3 mb-lg-0' src={project2} alt='' /></div>
                            <div className='col-xl-4 col-lg-5'>
                                <div className='featured-text text-center text-lg-left'>
                                    <h4>PopCorn Heads</h4>
                                    <p className='text-black-50 mb-0'> is a movie review website which is focussed on various aspects of films and help people find the best film to watch next ans share their opinions on recently watched films.</p>
                                    <a href="https://github.com/Paysen1/Movie-Reviewer.git"><img src={gitHub} alt="gitHub icon" height="50"/></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='row gx-0 mb-5 mb-lg-0 justify-content-center' style={{paddingBottom: 20}}>
                            <div className='col-lg-6'><img className='img-fluid' src={project1} alt='...'/></div>
                            <div className='col-lg-6'>
                                <div className='bg-black text-center h-100 project'>
                                    <div className='d-flex h-100'>
                                        <div className='project-text w-100 my-auto text-center text-lg-left'>
                                            <h4 className='text-white'>UpYourStyle</h4>
                                            <p className='mb-0 text-white-50'>An application where you can find upcycling DIYs, connect with other sustainable advocates, and creators. You can share your creations, sell, and socialize with like minded people. 
                                            I am working on this project right now, and can not wait to share the results!  .</p>
                                            <div className='col-auto'><a href='/Contact'><button className='btn btn-primary' id='submitButton' type='submit'>Notify Me When Deployed!</button></a></div>
 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className='row gx-0 mb-5 mb-lg-0 justify-content-center' style={{paddingBottom: 20}}>
                            <div className='col-lg-6'><img className='img-fluid' src={project3} alt='...'/></div>
                            <div className='col-lg-6'>
                                <div className='bg-black text-center h-100 project'>
                                    <div className='d-flex h-100'>
                                        <div className='project-text w-100 my-auto text-center text-lg-left'>
                                            <h4 className='text-white'>Misty Weather Dashboard</h4>
                                            <p className='mb-0 text-white-50'>A seamless and minimalistic weather forecast dashboard created using third party API requests and parsing JSON data.</p>
                                            <a href="https://github.com/ivanapina/Weather-Dashboard.git"><img src={gitHub1} alt="gitHub icon" height="50"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='row gx-0 mb-5 mb-lg-0 justify-content-center' style={{paddingBottom: 20}}>
                            <div className='col-lg-6'><img className='img-fluid' src={project4} alt='...'/></div>
                            <div className='col-lg-6'>
                                <div className='bg-black text-center h-100 project'>
                                    <div className='d-flex h-100'>
                                        <div className='project-text w-100 my-auto text-center text-lg-left'>
                                            <h4 className='text-white'>Paperless Fashionista</h4>
                                            <p className='mb-0 text-white-50'>Find articles from the late 19th century Vogue magazine or todays edition of Harpers Bazaar, create virtual moodboards, and share your love for a paperless Fashion World. This project is under construction.</p>
                                            <div className='col-auto'><a href='/Contact'><button className='btn btn-primary' id='submitButton' type='submit'>Notify Me When Deployed!</button></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </section>
                        
   </div>
    );
  }