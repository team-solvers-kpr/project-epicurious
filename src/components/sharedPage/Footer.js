import FirstPart from './footer/FirstPart';
import MiddlePart from './footer/MiddlePart';
import LastPart from './footer/LastPart';


const Footer = () => {
    return (
<<<<<<< HEAD
            <div>
        <FirstPart></FirstPart>
        <MiddlePart></MiddlePart>
        <LastPart></LastPart>
=======
        <div class='mt-20 bg-gray-100  '>
            

             {/* // -- first part 1st phase of footer-- */}
            <section class=' mb-32 hidden lg:block  '>
            
            <div className='mb-32 '>
                    <h1 class='text-slate-700 font-bold mx-2 p-1 text-lg'>
                    OUR PARTNERS
                    </h1>

                   <div className='flex justify-between mx-48 '>
                   <div >
                   <img src={image} alt='' />
                    <h5 class=''> <a href='https://www.epicurious.com/source/gourmet' class='hover:underline underline-offset-0  text-slate-700    text-xs font-bold  ' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   <div>
                   <img src={image2} alt='' />
                    <h5 class='mt-4'> <a href='https://www.epicurious.com/source/bon-appetit' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   <div>
                   <img src={image3} alt='' />
                    <h5 class='mt-4'> <a href='https://www.epicurious.com/source/self' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   <div>
                   <img src={image4} alt='' />
                    <h5 class='m-11'> <a href='https://www.epicurious.com/source/randomhouse' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   </div>
                  
                   <div className='flex  mx-48'>
                   <div>
                   <img className='mix-blend-luminosity' src={image5} alt=''/>
                    <h5 class='my-2'> <a href='https://www.epicurious.com/source/weelicious' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   <div >
                   <img className='mix-blend-luminosity' src={image6} alt='' />
                    <h5 class='mt-8'> <a href='https://www.epicurious.com/source/harpercollins' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">view Recipes</a></h5>
                   </div>
                   </div>
                  
>>>>>>> bc812b93f460e75ac0e708a265a816582e415b6d
            </div>
        
    );
};

export default Footer;