var customers = [
{
    "id":1,
    "first_name":"Allan",
    "last_name":"Cerveaux",
    "company":"Simplon",
    "role":"Formateur",
    "phone":"06.61.64.13.69",
    "email":"acerveaux@simplon.co",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia."
},
{
    "id":2,
    "first_name":"Jean",
    "last_name":"Pascal",
    "company":"Simplon",
    "role":"Employé",
    "phone":"06.61.25.35.69",
    "email":"jpascal@mail.co",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
},
{
    "id":3,
    "first_name":"Romuald",
    "last_name":"Laurem",
    "company":"S.Lipsum",
    "role":"Manager",
    "phone":"06.61.25.35.69",
    "email":"rlaureml@lipsum.co",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
}
]

var main = document.getElementById("main");

for (var i = 0; i < customers.length; i++) {

  var div = document.createElement("div");
  div.className = "card";
  main.appendChild(div);
  var custom = '<div class="content"><div class="header">' + customers[i].first_name + " " + customers[i].last_name + '</div>' + customers[i].company + " " +  customers[i].role + " " + customers[i].phone + " " + customers[i].email + " " + customers[i].description + '</div>';
  div.innerHTML = custom;

}

// Write you're code here. Enjoy !