/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
let i = 1;

while (i<4){
    const nav = document.createElement('a');
    const list = document.getElementById('navbar__list');
    nav.textContent = "Section "+i;
    nav.href = "#section"+i;
    nav.classList.add('menu__link');
    const li = document.createElement('li')
    li.appendChild(nav);
    list.appendChild(li);
    i++;
}



const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
const paragraph2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."

document.getElementById('button1').addEventListener('click',function(){
    //document.body.appendChild(document.getElementById('section2'));
    const nav = document.createElement('a');
    const list = document.getElementById('navbar__list');
    nav.textContent = "Section "+i;
    nav.href = "#section"+i;
    nav.classList.add('menu__link');
    const li = document.createElement('li')
    li.appendChild(nav);
    list.appendChild(li);



     

    const added_section = document.createElement('section');
    const div = document.createElement('div');
    div.className = 'landing__container';
    const header = document.createElement ('h2'); 
    header.innerHTML = 'Section '+i;
    const p1 = document.createElement('p');
    p1.textContent = paragraph1;
    const p2 = document.createElement('p');
    p2.textContent = paragraph2;
    div.appendChild(header);
    div.appendChild(p1);
    div.appendChild(p2);
    added_section.appendChild(div);
    added_section.id = 'section'+i;
    const main = document.getElementById('main');
    main.appendChild(added_section);
    i++;
    

})


document.getElementById('button2').addEventListener('click',function(){
    const list = document.getElementById('navbar__list');
    const sections = [...document.querySelectorAll("section")];
    list.removeChild(list.lastChild);
    sections[sections.length-1].remove();
    i--;
})

window.addEventListener('scroll',function(){
    const sections = this.document.querySelectorAll('section');
    for (let section of sections){
        const pos = section.getBoundingClientRect();
        if (pos.bottom >= 300 || pos.top >= 50){
            section.classList.add('your-active-class');
        }
        
        else {
            section.classList.remove('your-active-class');
        }
    }
})


