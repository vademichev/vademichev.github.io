window.onload = function() {
    fetch("hh.txt?mode=nocache").then(data => data.text()).then(data => {
        animateText(data)
      });
	  
	  		
	navigator.permissions.query({ name: "accelerometer" }).then((result) => {
		if (result.state === "denied") {
			console.log("Использование датчика не разрешено.");
		return;
	   }else{
		   const acl = new Accelerometer({ frequency: 60 });
				acl.addEventListener("reading", () => {
				console.log(`Acceleration along the X-axis ${acl.x}`);
				console.log(`Acceleration along the Y-axis ${acl.y}`);
				console.log(`Acceleration along the Z-axis ${acl.z}`);
			});
			acl.start();
	   }
  // Используйте датчик.
	});
			

}

function animateText(data) {
    var ele = document.getElementById("text"),
        txt = data.split("");
    var interval = setInterval(function(){
    if(!txt[0]){
        return clearInterval(interval);
    };
    ele.innerHTML += txt.shift();
    }, 150);
}