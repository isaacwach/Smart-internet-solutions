const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="navbar navbar-expand-lg bg-secondary navbar-secondary py-3">
   <div class="container pt-3 pb-2">
         <h4 class="text-light"> Smart Internet Solutions</h4>
         <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
               <li class="nav-item"><a href="index.html"><i class="fa fa-home"></i>Home</a></li>
               
               <li class="nav-item"><a href="services.html"><i class="fa fa-clone"></i>Services</a></li>
               <li class="nav-item"><a href="contact.html"><i class="fa fa-phone"></i>Contacts</a></li>
               <li class="nav-item"><a href="#sign-login"><i class="fa fa-user"></i>Users</a>
                     <div class="submenu bg-secondary">
                        <ul class="hov">
                           <li><button id="show-signin"><a href="register.html">Sign-Up</a></button></li>
                           <li><button id="show-login"><a href="loginpage.html">Login</a></button></li>
                        </ul>
                     </div>
               </li>
            </ul>
         </div>
   </div>
</div>
`;

footer.innerHTML = `

<section class="footer">

            <div class="address">
                

                <br>
                <div class="news">
                    Subscribe to our News Letter
                    <form>
                        <input type="text" name="email" id="email"
                            placeholder="Enter your email">
                    </form>
                    <button class="btn1">submit</button>
                </div>


            </div>
            <div class="mail">
                <h2>
                    Quick links
                </h2>
                <ul>
                    <li> <a href="#home">Home</a></li>
                    <li> <a href="#about">About us</a></li>
                    <li> <a href="#services">Services</a></li>
                </ul>

            </div>
            <div class="call">
                <h2>Contact us</h2>
                <a href="https://www.truecaller.com/" target="_blank"><i
                        class="fas fa-phone-alt phone"></i></a>
                <p>
                    PHONE <br>
                    +254722222222 <br>
                    +254738121212
                </p>
                <a href="https://accounts.google.com/b/1/AddMailService"
                    target="_blank"><i class="fas fa-envelope-open-text email"></i></a>
                <p>
                    EMAIL <br>
                    smartsolutions@gmail.com <br>
                    smartsolutionsr@info.com
                </p>

            </div>


        </section>
        <div class="images">
            <a href="https://www.facebook.com/" target="/self"> <i
                    class="fab fa-facebook-square fb"></i></a>
            <a href="https://twitter.com/login" target="/self"><i
                    class="fab fa-twitter-square tw"></i></a>
            <a href="https://www.instagram.com/accounts/login/" target="/self"> <i
                    class="fab fa-instagram tw"></i></a>
        </div>

        <p class="copyrite">
            &copy; Copyright Smart Internet Solutions.
        </p>


`;
