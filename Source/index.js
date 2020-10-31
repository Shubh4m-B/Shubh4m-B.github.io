document.querySelectorAll('.name').addEventListener("mouseover", ()=>{
    this.classList.add('name-active');
});

document.querySelectorAll('.name').addEventListener("mouseout", ()=>{
    this.classList.remove('name-active');
});
