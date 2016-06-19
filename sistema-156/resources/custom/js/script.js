var paginaAtual;
var totalPaginas;

function carregarConteudoByHash(hash) {
	$("#conteudoLicao").load(hash);
	$("li").removeClass("active");
	$("a[href='#" + hash + "']").parent().addClass("active");
}

function carregarConteudoWait() {
	setTimeout(carregarConteudo, 1000);
}

function carregarConteudo() {

	var hash = window.location.hash;
	
	if (hash == undefined || hash == "") {
		hash = "intro";
	} else {
		hash = hash.substring(1);
	}

	carregarConteudoByHash(hash);
	atualizarPaginador();
	alternarBotoesPaginador();
	atualizarBreadcrumbByHash(hash);
	setTimeout(definirAlturaPanel, 1000);
}

function atualizarBreadcrumbByHash(hash) {
	$(".breadcrumb").load("breadcrumb/" + hash);
}

function definirAlturaPanel() {
	var alturaConteudo = $("#conteudoLicao").outerHeight(true);
	var alturaMaxima = $(window).height() - $(".page-header").outerHeight();
	var alturaMenu = $("#menuLateral").outerHeight(true);

	if (alturaMaxima < alturaMenu) {
		alturaMaxima = alturaMenu;
	}

	var altura = alturaConteudo;
	if (altura > alturaMaxima) {
		altura = alturaMaxima;
	} else {
		altura = altura + 50;
	}

	$(".panel-body").height(altura);
}

function atualizarPaginador() {
	var listaLi = $("ul.nav-pills li");

	listaLi.each(function(indiceAtual) {
		if ($(this).hasClass("active")) {
			paginaAtual = indiceAtual + 1;
		}
	});

	totalPaginas = listaLi.size();

	w3DisplayData("botoesNavegacao", {"paginaAtual" : paginaAtual, "totalPaginas" : totalPaginas});
}

function alternarBotoesPaginador() {
	
	if (paginaAtual == 1) {
		$("#btnPaginaAnterior").addClass("disabled");
	} else {
		$("#btnPaginaAnterior").removeClass("disabled");
	}

	if (paginaAtual == totalPaginas) {
		$("#btnProximaPagina").addClass("disabled");
	} else {
		$("#btnProximaPagina").removeClass("disabled");
	}
}

function irProximaPagina() {
	var proximaPagina = paginaAtual + 1;
	var link = $("ul.nav-pills li:nth-child(" + proximaPagina + ") a").attr("href");
	// location.href = link;
	// location.reload();
}

function irPaginaAnterior() {
	var paginaAnterior = paginaAtual - 1;
	var link = $("ul.nav-pills li:nth-child(" + paginaAnterior + ") a").attr("href");
	// location.href = link;
	// location.reload();
}

function revelarRespostas() {
	$("div.resposta").each(function(resposta) {

		if ($(this).hasClass("correta")) {
			mostrarResposta(this);
		}

		$(this).find("input").each(function(){
			if ($(this).is(":checked")) {
				mostrarResposta($(this).parent().parent());
			}
		});
	});
}

function mostrarResposta(divResposta) {
	$(divResposta).find(".glyphicon").each(function() {
		$(this).show();
	});

	if ($(divResposta).hasClass("correta")) {
		$(divResposta).addClass("alert-success");
	} else {
		$(divResposta).addClass("alert-danger");
	}
}

function limparAvaliacao() {

	$("div.resposta").each(function(resposta) {
		limparResposta(this);		
	});
}

function limparResposta(divResposta) {
	$(divResposta).find(".glyphicon").each(function() {
		$(this).hide();
	});

	$(divResposta).removeClass("alert-success");
	$(divResposta).removeClass("alert-danger");

	$(divResposta).find("input").each(function(){
		$(this).removeAttr('checked');
	});
}