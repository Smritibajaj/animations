//function where we are passing el = element where we are inserting text, toRotate = text from html/user, period = time period
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;// loop which is running 
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();// function to check which work is done. Delete of text and addition of text
    this.isDeleting = false; // flag for delete function
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
// element to be inserted
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;
// deleting work
    if (this.isDeleting) { delta /= 2; }
//period for full length
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};
// here we are getting data i.e. data type and data period
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
//creation of span
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    //css of typewrite 
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function myFunction() {
    var element = document.getElementById("container");
    var p = document.getElementById("container-md");
        element.classList.remove("width");
        element.classList.add("shrink");
        p.classList.add("visibility");
        var node = document.createElement("span");
        node.innerHTML = "<h1 style='color:white'>Thank You</h1>";
        
        setTimeout(function(){
        document.getElementById("creator").appendChild(node);  
        },5000);
  }
setTimeout(function(){
    var p = document.getElementById("container-md");
    p.classList.remove("visibility");

},5000);
