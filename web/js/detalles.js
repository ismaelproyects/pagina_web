

$(document).ready(function()
{
"use strict";


var header = $('.header');

setHeader();

$(window).on('resize', function()
{
    setHeader();
});

$(document).on('scroll', function()
{
    setHeader();
});


function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}
});
