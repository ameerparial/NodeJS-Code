const div1 = document.getElementById('div1');

function render(){
    div1.innerHTML = <h1>${new Date().toLocaleDateString}</h1>
}

setInterval(render, 1000);


const arrs = [[1,2,3],[4,5,6], [7,8,9]];
[[f], [s], [t]]  = arrs;
console.log(f, s, t);