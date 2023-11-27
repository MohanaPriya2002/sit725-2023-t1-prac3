const cardList=[
    {
        title: "Claire",
        image: "images/kitten2.jpg",
        link: "About Claire",
        descripton: "Hello! Hope you have a nice day!"
    },
    {
        title: "Blake",
        image: "images/kitten3.jpg",
        link: "About Blake",
        descripton: "Hey there! This is blake"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm= () => {
    let formData={};
    formData.first_Name=$('#first_Name').val();
    formData.last_Name=$('#last_Name').val();
    formData.password=$('#password').val();
    formData.email=$('#email').val();

    console.log("Form Data Submitted: ",formData);
}
const addCards=(items)=>{
    items.forEach(item => {
        let itemToAppend='<div class="col s4 center-align">'+'<div class="card"><div class="card-image waves-effect waves-block waves-light "><img class="activator" src="'+item.image+'">'+
        '</div><div class="card-content">'+
                '<span class="card-title activator darkslategrey-text text-darken-4">'+item.title+
                '<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
                '<span class="card-title darkslategrey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p><a>'+item.descripton+'</a></p>'+
            '</div></div></div>';
            $("#card-section").append(itemToAppend);
    });
}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});
    