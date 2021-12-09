import Logo from './logo.svg';
import './myimage.jpg';



const Hero = () => {
    return (
            <div>
            <div class=" title">
            Cowley County Historical Society Museum
            </div>
            <div class="subtitle">
                "Sharing the past with the future"
            </div>
            <div class="parent">
            <button class="button"> Home </button>
            <button class="button2"> About </button> 
            <button class="button3"> Event Schedule </button> 
            <button class="button4"> Donate </button> 
            <button class="button4"> Memberships </button>
            </div>
        
            <img src= "myimage.jpg"/>
            
            <div class="line"> 
            </div>
            <div class="events">
                Upcoming Events:

                </div> 
                <div class="bob">
                Join us the 150 Year Celebration! (Further details located on events page) 

                </div>
                <div class="space"></div>
            <div class="sam">
                Cowley County History Day (Further details located on events page)
            </div>

            
            <div Class=" address">
            <div class="line"> </div>

            <div class= "s">
                Address:</div >

            <div class= "b">
                1011 Mansfield, Street, Winfield, Ks 67156
                </div>
            </div>

            <div class= "h">
               Hours:
            </div>

            <div class= "hours">
                Tuesday-Sunday; 1-4 p.m.
            </div>


            <div class= "hourscontinued">
                Closed on Holidays
            </div>

            <div class= "intro">
                Contact Information:
            </div>
       
       
        <div class=" contact">
            Phone: (620)221-4811
        </div>

        <div class= "contactcontinued">
                Email: cchsm@kans.com
            </div>

        </div>
        


       
       

    );
};

export default Hero;