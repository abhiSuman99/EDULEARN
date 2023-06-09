import banner from '../../../assets/images/hero.png';


const Hero = () => {
    return (
        <div className=" py-20 bg-shade min-h-[600px]">
           <div className="grid grid-col-reverse md:grid-cols-2 container mx-auto">
            <div className="content flex justify-center flex-col">
               <div>
                 <h2 className='text-5xl font-bold text-text leading-tight mb-3 my-4 mx-8'>Future ready with EduLearn</h2>
                <h2 className='text-5xl font-bold text-primary leading-tight mb-3 my-4 mx-8'>Enroll. Learn. Excel.</h2>
                <p className='text-lg my- 4 mx-8'>Access all courses under one roof.
                    
                </p>

               </div>
                <div className="button my-5 mx-8">
                <button className=" px-4 py-2 mr-3 text-white bg-primary border-2 border-primary uppercase font-semibold">
            JOIN NOW
        </button>

              
                </div>
                
            </div>
            <div className="image flex items-end">
                <img src={banner} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Hero;