// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
let v="hi";
function home(){
    document.getElementById("seconddiv").innerHTML=`<div >
    <br><br>
      <img class="cover_image" src="https://raw.githubusercontent.com/vka001/pic/main/cover.jpg" alt="MY PICTURE";>
      <br><br><br>
      <h1 class="initials">"He who is not courageous enough to take risks will accomplish nothing in life."</h1>
          <p class="quote" >-Muhammad Ali</p><br><br><br>
    </div>
    <div id="abtme"></div>
    <div></div>
    <br>`;
}

function abt(){
  document.getElementById("seconddiv").innerHTML=`<div class="homepage" >
  <h1 >ABOUT</h1>
  <p class="about">I'm an optimistic individual who has a positive outlook on life.I have certain traits which acquires a good sense of humour.<br>
      Currently I am presuing Masters in Technology (M.Tech) in Computer Science and Engineering ( 2021 - 2023 ),from one of India's best Institute <a href="https://www.iiit.ac.in/" class="links" target="_blank">International Institute of Technology , Hyderabad (IIIT,Hyderabad)</a>
      My area of interest is Data Structure and Algorithm.I have completed my Bachelors in Technology (B.Tech) in Computer Science and Engineering ( 2016 - 2020 ),from <a href="https://www.heritageit.edu/" class="links" target="_blank">Heritage Institute of Technology , Kolkata (HIT,Kolkata)</a>.I learnt many things and made lot of memories during my B.Tech and now looking forward to this new phase of learning.
      I am from the "Coal Capital of India" Dhanbad,Jharkhand.And I have completed my schooling that is Secondary Education( 2013 - 2014 ) and Senior Secondary Education( 2014 - 2016 ) both from <a href="http://davkoylanagar.com/" class="links" target="_blank">D.A.V. Public School,Koyla Nagar,Dhanbad</a>.I love listening to songs and I am a very good Table Tennis player.My current love is Chess and I am really very passionate about it.I refer myself as an "end pawn" which means currently I am a pawn but one day this pawn can become anything he wants.
      I strongly beleive that "Good things happen to those who Hustle."
  </p>   
  <ul id="sk">
      <b ><u>SKILLS</u></b>
      <li >
          C
      </li>
      <li>
          C++
      </li>
      <li>
          MySQL
      </li>
      <li>
          HTML
      </li>
      <li>
          CSS
      </li>
  </ul> 
<div class="shift">
  <table >
    <tr><th colspan="2">MY RESUME in PDF</th></tr>
    <tr>
      <th>
          RESUME
      </th>
      <th>
        <button><a href="https://drive.google.com/file/d/1b9BboiyV2LWc6hI8Y5uX0pzjQ6OLzyE4/view?usp=sharing" target="_blank">OPEN PDF</a></button> 
      </th>
    </tr>
  </table>
</div>
<br><br>
            <img class="cover_image1"  src="https://www.theindianexpert.com/wp-content/uploads/2019/11/IIIT-Hyderabad-Admission-2019-1.jpeg" alt="IIIT,Hyderabad" >IIITH

            <img class="cover_image1"  src="https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/4281/2018/4/18/Heritage-Institute-of-Technology-Kolkata-25.jpg" alt="HIT,Kolkata" >HITK

            <img class="cover_image1"  src="https://i.ytimg.com/vi/GNzKmlJQ8Ro/maxresdefault.jpg" alt="DAV,Dhanbad" >DAV
  </div>`;
}

function wins(){
  document.getElementById("seconddiv").innerHTML=`<div class="homepage">
  <br>
  <h1 >WINS</h1>
  <p>I have secured an AIR of 328 in Graduate Aptitude Test in Engineering(CSE) 2021.</p> 
  <p>I have received certificate of appreciation for proficiency in teaching in Literacy venture of
    Rotaract of HIT,Kolkata</p>
  <p>I served as the ”Seargents at Arms” at Rotaract Club of HITK,under the Rotaract Dis-
    trict Organisation 3291</p>
  <p>Represented school in Table Tennis at district level.</p>
  <p>In class 10th I got 10 CGPA which was highest marks in the school and received certificate of excellence by "Prabhat Khabar" local news channel. </p>
  <p>I am a teacher at Shishya Centre(A self intiative by RCHITK to teach underpre-
    viliged students in rural part of Kolkata)</p>
</div>`;
}

function contact(){
  document.getElementById("seconddiv").innerHTML=`<div class="homepage" >
  <h1>CONTACT</h1>
  <img class="location" src="https://raw.githubusercontent.com/vka001/pic/main/location.png" alt="location";>
  Mobile No: +917209293856<br>
  <br><br><a href="https://github.com/vka001" class="links">
  <i class="fa fa-github"></i> GITHUB</a> <br> 
  <a href="https://www.linkedin.com/in/vineet-agrawal-503a03152" class="links">
  <i class="fa fa-linkedin-square"></i> Linkedin</a>
</div>`;
}
