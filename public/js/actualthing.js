var productos = [
	{"nombre": "lechuga", "descripcion": "muuuy fresca"},
	{"nombre": "tomate", "descripcion": "muuuy fresco"}
];

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function send(){
	var nombre = $("#nombre").val();
	var descripcion = $("#descripcion").val();
	if(!isEmpty(nombre)) {
		productos.push({"nombre": nombre, "descripcion": descripcion});
		$("#warning").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>'+"Bien!"+'</strong> '+"Producto agregado correctamente."+'</div>');
	}
	else $("#warning").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>'+"Error!"+'</strong> '+"El nombre del producto que has puesto no significa nada."+'</div>');
	update();
}

function set(i){
	var nombre = $("#nuevonombre"+i+10).val();
	var descripcion = $("#nuevadescripcion"+i+10).val();
	if(!isEmpty(nombre)){
		productos[i].nombre = nombre;
		productos[i].descripcion = descripcion;
		$("#warning").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>'+"Bien!"+'</strong> '+"Producto editado correctamente."+'</div>');
	}
	update();
}

function update(){
	$("#lista ul").html("");
	for (var i = 0; i <= productos.length-1; i++) {
		$("body").append("<div id='myModal"+i+10+"' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Edit product...</h4></div><div class='modal-body' id='add'><input id='nuevonombre"+i+10+"' class='form-control' value='"+productos[i].nombre+"' style='border-bottom-left-radius:0;border-bottom-right-radius:0;' placeholder='Name'><textarea id='nuevadescripcion"+i+10+"' class='form-control' style='border-top-left-radius:0;border-top-right-radius:0;' placeholder='Description'>"+productos[i].descripcion+"</textarea></div><div class='modal-footer'><button type='button' class='btn btn-warning' onclick=\"set("+i+");$(\'#myModal"+i+10+"\').modal(\'hide\');\">Edit</button></div></div></div></div>");
		$("#lista ul").append("<li class='list-group-item'><div class='btn-group right' role='group' aria-label='...'><button type='button' class='btn btn-warning' onclick=\"$(\'#myModal"+i+10+"\').modal(\'show\');\">Edit</button><button type='button' class='btn btn-danger' onclick='productos.splice("+i+", 1);update();'>Delete</button></div><h3>"+productos[i].nombre+"</h3><p>"+productos[i].descripcion+"</p></li>");
	}
}

$(document).ready(function(){
	update();
});