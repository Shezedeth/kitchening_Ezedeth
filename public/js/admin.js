var url = window.location;
console.log(url);

let params = new URLSearchParams(url.search)

// let nr = params.has('nr')
if(params.get)
Swal.fire({
    position: 'center',
    icon: 'secces',
    title: 'Producto agregado con exito',
    showConfirmButton: false,
    timer: 2500
    

})
window.location.href = '/admin'