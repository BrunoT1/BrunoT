// ---------------------------
// Grant Imbo | grantimbo.com
// ---------------------------


$(function() {

	/*-----------------------------------------------------
	    Variables
	-----------------------------------------------------*/

	var siteBody = $('body'),
		loading = $('<div class="loading-content"><div class="loading"><div>Loading</div></div></div>'),
		modal = $('<div class="modal"></div>'),
		menuButton = $('[data-button="menu"]'),
		contactPage = $('.contact-wrap'),
		docTitle = document.title;


	// add modal to body
	modal.appendTo(siteBody);

	siteBody.addClass('js');




	// load content
	loadPage = function() {
		$('.modal').fadeIn(200)
					.html(loading);

		setTimeout(function(){ 
			$('.modal').html('<div class="visit-site"><p>Uma nova aba foi aberta para melhor visualizar o video do xatspace.</p><a href="" target="_blank"></a></div>');
		}, 500);

		siteBody.css('overflow-y','hidden');
	},


	// portfolio menu
	menuButton.on('click', function() {
		$(this).toggleClass('active');
		$('header').toggleClass('active');
	});


	nav = function() {

		// nav bars
		welcomeNav = $('[data-nav="home"]'),
		folioNav = $('[data-nav="folio"]'),
		serviceNav = $('[data-nav="contact"]'),
		welcomePage = $('[data-page="home"]'),
		folioPage = $('[data-page="folio"]'),
		servicePage = $('[data-page="contact"]');


		welcomeNav.on('click', function(e) {
			folioPage.hide();
			servicePage.hide();
			welcomePage.fadeIn(300);

			welcomeNav.addClass('current-nav');
			folioNav.removeClass('current-nav');
			serviceNav.removeClass('current-nav');
			siteBody.removeClass('hideslant');


			e.preventDefault();
		});

		folioNav.on('click', function(e) {


			welcomePage.hide();
			servicePage.hide();
			folioPage.fadeIn(300);

			folioNav.addClass('current-nav');
			welcomeNav.removeClass('current-nav');
			serviceNav.removeClass('current-nav');
			siteBody.addClass('hideslant');


			e.preventDefault();
		});

		serviceNav.on('click', function(e) {
			welcomePage.hide();
			folioPage.hide();
			servicePage.fadeIn(300);

			serviceNav.addClass('current-nav');
			welcomeNav.removeClass('current-nav');
			folioNav.removeClass('current-nav');
			siteBody.removeClass('hideslant');

			e.preventDefault();
		});

	},

	nav();


	// show portfolio
	$(document).on('click', 'a.post-link', function() {
		loadPage();
	});


	// hide modal
	$(document).on('click', '.modal', function(e){

        var container = $(".portfolio-content");

        // if the target of the click isn't the container... nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $('.modal').fadeOut(300);
            siteBody.css('overflow-y','visible');
        };
    });


	// contact page
    contactPage.on('mouseover', function() {

    	contactPage.find('h1').addClass('hover');

    	setTimeout( function() { 
				contactPage.find('h1 span').addClass('hover');
		}, 300);

		setTimeout( function() { 
				contactPage.find('h1 b').addClass('hover');
		}, 500);
    });

	contactPage.on('mouseout', function() {

		contactPage.find('h1').removeClass('hover');

		setTimeout( function() { 
				contactPage.find('h1 span').removeClass('hover');
		}, 300);

		setTimeout( function() { 
				contactPage.find('h1 b').removeClass('hover');
		}, 500);
	});


	// pagination
	$('.pagination a.next').text('Selecione um xatspace, clique na imagem e uma nova janela se abrirá com um vídeo mostrando como é o xatspace escolhido por você!');
	$(document).on('click', '.pagination a.next', function(e) {
		loadPage();
		e.preventDefault();
	});


	$(document).on('click', '.folio-nav ul.sub-menu a', function(e) {
		loadPage();
		e.preventDefault();
	});


	


	console.log('-------------------------------------------------------');
	console.log('|    Written by Grant Imbo (2014) | grantimbo.com     |');
	console.log('-------------------------------------------------------');


});

const videoOverlay = document.querySelector('.video-overlay');
const video = videoOverlay.querySelector('video');

// Adiciona o evento de clique no elemento de sobreposição
videoOverlay.addEventListener('click', (event) => {
  // Verifica se o clique não está no elemento de vídeo
  if (event.target !== video) {
    // Fecha a sobreposição se o clique não está no elemento de vídeo
    videoOverlay.classList.remove('open');
    video.pause();
  }
});

// Adiciona o evento de clique nas imagens para abrir a sobreposição de vídeo
const images = document.querySelectorAll('.portfolio-thumb img');
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    videoOverlay.classList.add('open');
    video.play();
  });
});
