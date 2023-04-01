const parent = document.querySelector('.parent');
const children = parent.querySelectorAll('.child');
const imageContain = parent.querySelectorAll('.image-contain');




// For the Third Div start
// Add event listener for mouseover
children[2].addEventListener('mouseover', function() {
  children[0].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
  children[1].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
  children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1.3)';
  children[3].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
  children[4].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
  children[2].querySelector('.image-contain').style.transform = 'scale(0.65)';
});

// Add event listener for mouseout
children[2].addEventListener('mouseout', function() {
  children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  children[2].querySelector('.image-contain').style.transform = 'scale(1)';
});
// For the Third Div end

// For the second Div start
// Add event listener for mouseover
children[1].addEventListener('mouseover', function() {
    children[0].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1.3)';
    children[2].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[1].querySelector('.image-contain').style.transform = 'scale(0.65)';
  });
  
  // Add event listener for mouseout
  children[1].addEventListener('mouseout', function() {
    children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[1].querySelector('.image-contain').style.transform = 'scale(1)';
  });
  // For the second Div end
  var imageCoontain = children[0].querySelector('.image-contain');
  // For the first Div start
// Add event listener for mouseover
children[0].addEventListener('mouseover', function() {
    children[0].style.transform = 'translate3d(3vw, 0px, 0px) scale(1.3)';
    children[1].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[0].querySelector('.image-contain').style.transform = 'translate3d(0px, 0px, 0px) scaleX(1)';
    
    
  
    
  });
  
  // Add event listener for mouseout
  children[0].addEventListener('mouseout', function() {
    children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[0].querySelector('.image-contain').style.transform = 'translate3d(0px, 0px, 0px) scaleX(1)';

    
    
  });
  // For the first Div end

   // For the fourth Div start
// Add event listener for mouseover
children[3].addEventListener('mouseover', function() {
    children[0].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1.3)';
    children[4].style.transform = 'translate3d(3vw, 0px, 0px) scale(1)';
    children[3].querySelector('.image-contain').style.transform = 'scale(0.65)';
  });
  
  // Add event listener for mouseout
  children[3].addEventListener('mouseout', function() {
    children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[3].querySelector('.image-contain').style.transform = 'scale(1)';
  });
  // For the fourth Div end

   // For the fifth Div start
// Add event listener for mouseover
children[4].addEventListener('mouseover', function() {
    children[0].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(-3vw, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1.3)';
    children[4].querySelector('.image-contain').style.transform = 'scale(0.65)';
  });
  
  // Add event listener for mouseout
  children[4].addEventListener('mouseout', function() {
    children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[1].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[2].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[3].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[4].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    children[4].querySelector('.image-contain').style.transform = 'scale(1)';
  });
  // For the fifth Div end


  // loop through all the child divs to add the event listeners
children.forEach(function(child, index) {
  child.addEventListener('mouseover', function() {
    // loop through all the child divs again to add the black overlay to those not being hovered
    children.forEach(function(child, i) {
      if (i !== index) {
        child.querySelector('.overlay').classList.add('show');
      }
    });
  });

  child.addEventListener('mouseout', function() {
    // loop through all the child divs again to remove the black overlay from those not being hovered
    children.forEach(function(child, i) {
      if (i !== index) {
        child.querySelector('.overlay').classList.remove('show');
      }
    });
  });
});