<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Falgun - Metro Style Bootstrap Admin Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Admin Panel Template">
<meta name="author" content="Westilian: Kamrujaman Shohel">
<!-- styles -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/jquery.gritter.css" rel="stylesheet">
<link href="css/bootstrap-responsive.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.css">
<!--[if IE 7]>
<link rel="stylesheet" href="css/font-awesome-ie7.min.css">
<![endif]-->
<link href="css/tablecloth.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="css/ie/ie7.css" />
<![endif]-->
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="css/ie/ie8.css" />
<![endif]-->
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" href="css/ie/ie9.css" />
<![endif]-->
<link href='http://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
<!--fav and touch icons -->
<link rel="shortcut icon" href="ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
<!--============ javascript ===========-->
<script src="js/jquery.js"></script>
<script src="js/jquery-ui-1.10.1.custom.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.sparkline.js"></script>
<script src="js/bootstrap-fileupload.js"></script>
<script src="js/jquery.metadata.js"></script>
<script src="js/jquery.tablesorter.min.js"></script>
<script src="js/jquery.tablecloth.js"></script>
<script src="js/jquery.flot.js"></script>
<script src="js/jquery.flot.selection.js"></script>
<script src="js/excanvas.js"></script>
<script src="js/jquery.flot.pie.js"></script>
<script src="js/jquery.flot.stack.js"></script>
<script src="js/jquery.flot.time.js"></script>
<script src="js/jquery.flot.tooltip.js"></script>
<script src="js/jquery.flot.resize.js"></script>
<script src="js/jquery.collapsible.js"></script>
<script src="js/accordion.nav.js"></script>
<script src="js/jquery.gritter.js"></script>
<script src="js/tiny_mce/jquery.tinymce.js"></script>
<script src="js/custom.js"></script>
<script src="js/respond.min.js"></script>
<script src="js/ios-orientationchange-fix.js"></script>
<script>
/*===============================================
TEXT EDITOR
==================================================*/
        $(function() {
		$('textarea.chat-inputbox').tinymce({
			script_url : 'js/tiny_mce/tiny_mce.js',
			theme : "simple"
			});
		});
/*===============================================
TBALE THEMES
==================================================*/
$(function() {
        $(".paper-table").tablecloth({
          theme: "paper",
          striped: true,
          sortable: true,
          condensed: false
        });
      });
	  
$(function(){
		// global setting override
        /*
		$.extend($.gritter.options, {
		    class_name: 'gritter-light', // for light notifications (can be added directly to $.gritter.add too)
		    position: 'bottom-left', // possibilities: bottom-left, bottom-right, top-left, top-right
			fade_in_speed: 100, // how fast notifications fade in (string or int)
			fade_out_speed: 100, // how fast the notices fade out
			time: 3000 // hang on the screen for...
		});
        */
/**=========================
ONLOAD NOTIFICATION 
==============================**/
		$(window).load(function() {
			var unique_id = $.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a sticky notice!',
				// (string | mandatory) the text inside the notification
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
				// (string | optional) the image to display on the left
				image: 'images/notification-thumb.png',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: false,
				// (int | optional) the time you want it to be alive for before fading out
				time: '10000',
				// (string | optional) the class name you want to apply to that specific message
				class_name: 'my-sticky-class'
			});
			// You can have it return a unique id, this can be used to manually remove it later using
			/*
			setTimeout(function(){
				$.gritter.remove(unique_id, {
					fade: true,
					speed: 'slow'
				});
			}, 6000)
			*/
			return false;
		});
			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a notice without an image!',
				// (string | mandatory) the text inside the notification
				text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
			});
			return false;
});
/**=========================
SPARKLINE MINI CHART
==============================**/
$(function () {
    $(".line-min-chart").sparkline([50, 10, 2, 3, 40, 5, 26, 10, 15, 20, 40, 60], {
        type: 'line',
        width: '80',
        height: '40',
        lineColor: '#2b2b2b',
        fillColor: '#e5e5e5',
        lineWidth: 2,
        highlightSpotColor: '#0e8e0e',
        spotRadius: 3,
        drawNormalOnTop: true
    });
    $(".bar-min-chart").sparkline([50, 10, 2, 3, 40, 5, 26, 10, -15, 20, 40, 60], {
        type: 'bar',
        height: '40',
        barWidth: 4,
        barSpacing: 1,
        barColor: '#007f00'
    });
    $(".pie-min-chart").sparkline([3, 5, 2, 10, 8], {
        type: 'pie',
        width: '40',
        height: '40'
    });
    $(".tristate-min-chart").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: '40',
        posBarColor: '#bf005f',
        negBarColor: '#ff7f00',
        zeroBarColor: '#545454',
        barWidth: 4,
        barSpacing: 1
    });
});
/**=========================
LEFT NAV ICON ANIMATION 
==============================**/
$(function () {
    $(".left-primary-nav a").hover(function () {
        $(this).stop().animate({
            fontSize: "30px"
        }, 200);
    }, function () {
        $(this).stop().animate({
            fontSize: "24px"
        }, 100);
    });
});
</script>
<script type="text/javascript">
/*===============================================
FLOT BAR CHART
==================================================*/

    var data7_1 = [
        [1354586000000, 153],
        [1354587000000, 658],
        [1354588000000, 198],
        [1354589000000, 663],
        [1354590000000, 801],
        [1354591000000, 1080],
        [1354592000000, 353],
        [1354593000000, 749],
        [1354594000000, 523],
        [1354595000000, 258],
        [1354596000000, 688],
        [1354597000000, 364]
    ];
    var data7_2 = [
        [1354586000000, 53],
        [1354587000000, 65],
        [1354588000000, 98],
        [1354589000000, 83],
        [1354590000000, 80],
        [1354591000000, 108],
        [1354592000000, 120],
        [1354593000000, 74],
        [1354594000000, 23],
        [1354595000000, 79],
        [1354596000000, 88],
        [1354597000000, 36]
    ];
    $(function () {
        $.plot($("#visitors-chart #visitors-container"), [{
            data: data7_1,
            label: "Page View",
            lines: {
                fill: true
            }
        }, {
            data: data7_2,
            label: "Online User",
            points: {
                show: true
            },
            lines: {
                show: true
            },
            yaxis: 2
        }
        ],
        {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5,
                },
                shadowSize: 0,
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1
            },
            colors: ["#b086c3", "#ea701b"],
            tooltip: true,
            tooltipOpts: {
				  shifts: { 
					  x: -100                     //10
				  },
                defaultTheme: false
            },
            xaxis: {
                mode: "time",
                timeformat: "%0m/%0d %0H:%0M"
            },
            yaxes: [{
                /* First y axis */
            }, {
                /* Second y axis */
                position: "right" /* left or right */
            }]
        }
        );
    });
</script>
<script type="text/javascript">
/*===============================================
FLOT PIE CHART
==================================================*/

    $(function () {
        var data = [{
            label: "Page View",
            data: 70
        }, {
            label: "Online User",
            data: 30
        }];
        var options = {
            series: {
                pie: {
                    show: true,
					innerRadius: 0.5,
            show: true
                }
            },
            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },
			 colors: ["#b086c3", "#ea701b"],
            tooltip: true,
            tooltipOpts: {
				shifts: { 
					  x: -100                     //10
				  },
                defaultTheme: false
            }
        };
        $.plot($("#pie-chart-donut #pie-donutContainer"), data, options);
    });
</script>
</head>
<body>
<div class="layout">
	<!-- Navbar
    ================================================== -->
	<div class="navbar navbar-inverse top-nav">
		<div class="navbar-inner">
			<div class="container">
				<span class="home-link"><a href="index.html" class="icon-home"></a></span><a class="brand" href="./index.html"><img src="images/logo-falgun.png" width="103" height="50" alt="Falgun"></a>
				<div class="nav-collapse">
					<ul class="nav">
						<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-th-large"></i> Forms <b class="icon-angle-down"></b></a>
						<div class="dropdown-menu">
							<ul>
								<li><a href="form-elements.html"><i class="icon-list-alt"></i> Form Elements </a></li>
								<li><a href="form-components.html"><i class="icon-th"></i> Form Components </a></li>
								<li><a href="form-validation.html"><i class="icon-ok-circle"></i> Form Validation</a></li>
								<li><a href="form-wizard.html"><i class="icon-external-link"></i> Form Wizard </a></li>
								<li><a href="text-editor.html"><i class="icon-pencil"></i> WYSIWYG editor </a></li>
							</ul>
						</div>
						</li>
						<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-beaker"></i> Features <b class="icon-angle-down"></b></a>
						<div class="dropdown-menu">
							<ul>
								<li><a href="tables.html"><i class="icon-table"></i> Basic Tables</a></li>
								<li><a href="table-cloth.html"><i class="icon-table"></i> Tables-Theme</a></li>
								<li><a href="data-tables.html"><i class=" icon-th"></i> Data Tables</a></li>
								<li><a href="grid.html"><i class=" icon-columns"></i> Grid</a></li>
								<li><a href="typography.html"><i class=" icon-font"></i> Typography</a></li>
								<li><a href="calendar.html"><i class=" icon-calendar"></i> Calendar</a></li>
								<li><a href="file-manager.html"><i class=" icon-folder-open"></i> File Manager</a></li>
							</ul>
						</div>
						</li>
						<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-list-alt"></i> UI elements <b class="icon-angle-down"></b></a>
						<div class="dropdown-menu">
							<ul>
								<li><a href="components-widgets.html"><i class=" icon-list-alt"></i> Components &amp; UI Elements</a></li>
								<li><a href="buttons-icons.html"><i class=" icon-th-large"></i> Buttons &amp; Icons</a></li>
							</ul>
						</div>
						</li>
						<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-file-alt"></i> Pages <b class="icon-angle-down"></b></a>
						<div class="dropdown-menu">
							<ul>
								<li class="dropdown-submenu"><a href="#"><i class="icon-minus-sign"></i> Error Pages</a>
								<div class="dropdown-menu">
									<ul>
										<li><a href="page-403.html"><i class=" icon-file-alt"></i> 403 Error Page</a></li>
										<li><a href="page-404.html"><i class=" icon-file-alt"></i> 404 Error Page</a></li>
										<li><a href="page-405.html"><i class=" icon-file-alt"></i> 405 Error Page</a></li>
										<li><a href="page-500.html"><i class=" icon-file-alt"></i> 500 Error Page</a></li>
										<li><a href="page-503.html"><i class=" icon-file-alt"></i> 503 Error Page</a></li>
									</ul>
								</div>
								</li>
								<li><a href="login.html"><i class=" icon-unlock"></i> Login Page</a></li>
                                <li><a href="profile.html"><i class="icon-file"></i> Profile Page</a></li>
                                <li><a href="search-page.html"><i class="icon-file"></i> Search Page</a></li>
                                <li><a href="invoice.html"><i class="icon-file"></i> Invoice Page</a></li>
                                <li><a href="profile.html"><i class="icon-file"></i> Profile Page</a></li>
                                <li><a href="search-page.html"><i class="icon-file"></i> Search Page</a></li>
                                <li><a href="invoice.html"><i class="icon-file"></i> Invoice Page</a></li>
								<li><a href="gallery.html"><i class="icon-picture"></i> Gallery</a></li>
								<li><a href="pricing.html"><i class="icon-money"></i> Pricing Page</a></li>
								<li><a href="chat.html"><i class="icon-comments"></i> Chat Page</a></li>
							</ul>
						</div>
						</li>
						<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-bar-chart"></i> Charts <b class="icon-angle-down"></b></a>
						<div class="dropdown-menu">
							<ul>
								<li><a href="flot-chart.html"><i class="icon-bar-chart"></i> Flot Charts</a></li>
								<li><a href="google-chart.html"><i class="icon-google-plus-sign"></i> Goolge Chart</a></li>
							</ul>
						</div>
						</li>
					</ul>
				</div>
				<div class="btn-toolbar pull-right notification-nav">
					<div class="btn-group">
						<div class="dropdown">
							<a class="btn btn-notification dropdown-toggle" data-toggle="dropdown"><i class="icon-globe"><span class="notify-tip">30</span></i></a>
							<div class="dropdown-menu pull-right ">
								<span class="notify-h"> You have 20 notifications</span><a class="msg-container clearfix"><span class="notification-thumb"><img src="images/notify-thumb.png" width="50" height="50" alt="user-thumb"></span><span class="notification-intro"> In hac habitasse platea dictumst. Aliquam posuere quam in nul<span class="notify-time"> 3 Hours Ago </span></span></a><a class="msg-container clearfix"><span class="notification-thumb"><i class="icon-file"></i></span><span class="notification-intro"><strong>Files </strong>In hac habitasse platea dictumst. Aliquam posuere<span class="notify-time"> 8 Hours Ago </span></span></a><a class="msg-container clearfix"><span class="notification-thumb"><img src="images/user-thumb.png" width="50" height="50" alt="user-thumb"></span><span class="notification-intro"> In hac habitasse platea dictumst. Aliquam posuere<span class="notify-time"> 3 Days Ago </span></span></a><a class="msg-container clearfix"><span class="notification-thumb"><i class=" icon-envelope-alt"></i></span><span class="notification-intro"><strong>Message</strong> In hac habitasse platea dictumst. Aliquam posuere<span class="notify-time"> 2 Weeks Ago </span></span></a>
								<button class="btn btn-primary btn-large btn-block"> View All</button>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<div class="dropdown">
							<a class="btn btn-notification"><i class="icon-lock"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="leftbar leftbar-close clearfix">
		<div class="admin-info clearfix">
			<div class="admin-thumb">
				<i class="icon-user"></i>
			</div>
			<div class="admin-meta">
				<ul>
					<li class="admin-username">Kamrujam Shohel</li>
					<li><a href="#">Edit Profile</a></li>
					<li><a href="#">View Profile </a><a href="#"><i class="icon-lock"></i> Logout</a></li>
				</ul>
			</div>
		</div>
		<div class="left-nav clearfix">
			<div class="left-primary-nav">
				<ul id="myTab">
					<li class="active"><a href="#main" class="icon-desktop" title="Dashboard"></a></li>
					<li><a href="#forms" class="icon-th-large" title="Forms"></a></li>
					<li><a href="#features" class="icon-beaker" title="Features"></a></li>
					<li><a href="#ui-elements" class="icon-list-alt" title="UI&nbsp;Elements"></a></li>
					<li><a href="#pages" class="icon-file-alt" title="Pages"></a></li>
					<li><a href="#chart" class="icon-bar-chart" title="Chart"></a></li>
				</ul>
				<ul>
					<li><a href="chat.html" class="icon-comments" title="Chat"></a></li>
					<li><a href="text-editor.html" class="icon-pencil" title="WYSIWYG editor"></a></li>
				</ul>
			</div>
			<div class="responsive-leftbar">
				<i class="icon-list"></i>
			</div>
			<div class="left-secondary-nav tab-content">
				<div class="tab-pane active" id="main">
					<h4 class="side-head">Dashboard</h4>
					<div class="search-box">
						<div class="input-append input-icon">
							<input class="search-input" placeholder="Search..." type="text">
							<i class=" icon-search"></i>
							<button class="btn" type="button">Go!</button>
						</div>
					</div>
					<ul class="metro-sidenav clearfix">
						<li><span class="notify-tip">30</span><a href="#" class="brown"><i class="icon-user"></i><span>User</span></a></li>
						<li><a href="#" class="orange"><i class="icon-cogs"></i><span>Settings</span></a></li>
						<li><a href="#" class=" blue-violate"><i class="icon-lightbulb"></i><span>Support</span></a></li>
						<li><a href="#" class=" magenta"><i class="icon-bar-chart"></i><span>Statistics</span></a></li>
						<li><a href="#" class="green"><i class="icon-shopping-cart"></i><span>Orders</span></a></li>
						<li><a href="#" class=" bondi-blue"><i class="icon-time"></i><span>Events</span></a></li>
						<li><a href="#" class=" dark-yellow"><i class="icon-file-alt"></i><span>Post</span></a></li>
						<li><a href="#" class=" blue"><i class="icon-copy"></i><span>Documents</span></a></li>
					</ul>
					<div class="side-widget">
						<div class="board-widgets light-blue">
							<div class="board-widgets-head clearfix">
								<h4 class="pull-left">Bandwidth Usage</h4>
								<a href="#" class="widget-settings"><i class="icon-cloud"></i></a>
							</div>
							<div class="board-widgets-content">
								<div class="progress progress-striped active min progress-info">
									<div class="bar" style="width: 48%;">
									</div>
								</div>
								<div class="stat-text progress-stat">
									<i class="progres-percent">48%</i> 12000 MB / 25000 MB
								</div>
							</div>
						</div>
						<div class="board-widgets light-blue ">
							<div class="board-widgets-head clearfix">
								<h4 class="pull-left">Disk Usage</h4>
								<a href="#" class="widget-settings"><i class="icon-hdd"></i></a>
							</div>
							<div class="board-widgets-content">
								<div class="progress progress-striped active min progress-success">
									<div class="bar" style="width: 20%;">
									</div>
								</div>
								<div class="stat-text progress-stat">
									<i class="progres-percent">20%</i> 50GB / 250 GB
								</div>
							</div>
						</div>
						<div class="board-widgets gray">
							<div class="board-widgets-head clearfix">
								<h4 class="pull-left">Visitors</h4>
								<a href="#" class="widget-settings"><i class="icon-group"></i></a>
							</div>
							<div class="board-widgets-content">
								<div class="line-min-chart min-chart">
								</div>
								<div class="stat-text">
									 26458 <i class="up icon-sort-up"></i> 5%
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane" id="forms">
					<h4 class="side-head">Forms</h4>
					<ul id="nav" class="accordion-nav">
						<li><a href="form-elements.html"><i class="icon-list-alt"></i> Form Elements <span class="notify-tip">50</span></a></li>
						<li><a href="form-components.html"><i class="icon-th"></i> Form Components </a></li>
						<li><a href="form-validation.html"><i class="icon-ok-circle"></i> Form Validation<span>Quisque commodo lectus sit amet sem </span></a></li>
						<li><a href="form-wizard.html"><i class="icon-external-link"></i> Wizard </a></li>
						<li><a href="text-editor.html"><i class="icon-pencil"></i> WYSIWYG editor <span>Quisque commodo lectus sit amet sem </span></a></li>
					</ul>
				</div>
				<div class="tab-pane" id="features">
					<h4 class="side-head">Features</h4>
					<ul class="accordion-nav">
						<li><a href="tables.html"><i class="icon-table"></i> Basic Tables</a></li>
						<li><a href="table-cloth.html"><i class="icon-table"></i> Tables-Theme</a></li>
						<li><a href="data-tables.html"><i class=" icon-th"></i> Data Tables</a></li>
						<li><a href="grid.html"><i class=" icon-columns"></i> Grid</a></li>
						<li><a href="typography.html"><i class=" icon-font"></i> Typography</a></li>
						<li><a href="calendar.html"><i class=" icon-calendar"></i> Calendar</a></li>
						<li><a href="file-manager.html"><i class=" icon-folder-open"></i> File Manager</a></li>
					</ul>
				</div>
				<div class="tab-pane" id="ui-elements">
					<h4 class="side-head">UI Elements</h4>
					<ul class="accordion-nav">
						<li><a href="components-widgets.html"><i class=" icon-list-alt"></i> UI Components</a></li>
						<li><a href="buttons-icons.html"><i class=" icon-th-large"></i> Buttons &amp; Icons</a></li>
					</ul>
				</div>
				<div class="tab-pane" id="pages">
					<h4 class="side-head">Pages</h4>
					<ul class="accordion-nav">
						<li><a href="#"><i class="icon-minus-sign"></i> Error Pages</a>
						<ul>
							<li><a href="page-403.html"><i class=" icon-file-alt"></i> 403 Error Page</a></li>
							<li><a href="page-404.html"><i class=" icon-file-alt"></i> 404 Error Page</a></li>
							<li><a href="page-405.html"><i class=" icon-file-alt"></i> 405 Error Page</a></li>
							<li><a href="page-500.html"><i class=" icon-file-alt"></i> 500 Error Page</a></li>
							<li><a href="page-503.html"><i class=" icon-file-alt"></i> 503 Error Page</a></li>
						</ul>
						</li>
						<li><a href="login.html"><i class=" icon-unlock"></i> Login Page</a></li>
                                <li><a href="profile.html"><i class="icon-file"></i> Profile Page</a></li>
                                <li><a href="search-page.html"><i class="icon-file"></i> Search Page</a></li>
                                <li><a href="invoice.html"><i class="icon-file"></i> Invoice Page</a></li>
						<li><a href="gallery.html"><i class=" icon-picture"></i> Gallery</a></li>
						<li><a href="pricing.html"><i class="icon-money"></i> Pricing Page</a></li>
						<li><a href="chat.html"><i class="icon-comments"></i> Chat Page</a></li>
					</ul>
				</div>
				<div class="tab-pane" id="chart">
					<h4 class="side-head">Charts</h4>
					<ul class="accordion-nav">
						<li><a href="flot-chart.html"><i class="icon-bar-chart"></i> Flot Charts</a></li>
						<li><a href="google-chart.html"><i class="icon-google-plus-sign"></i> Goolge<span>Quisque commodo lectus sit amet sem </span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="main-wrapper">
		<div class="container-fluid">
			<div class="alert alert-error">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
				<i class="icon-exclamation-sign"></i><strong>Warning!</strong> Best check yo self, you're not looking too good.
			</div>
			<div class="row-fluid ">
				<div class="span12">
					<div class="primary-head">
						<h3 class="page-header">Dashboard</h3>
						<ul class="top-right-toolbar">
							<li><a data-toggle="dropdown" class="dropdown-toggle blue-violate" href="#" title="Users"><i class="icon-user"></i></a>
							</li>
							<li><a href="#" class="green" title="Upload"><i class=" icon-upload-alt"></i></a></li>
							<li><a href="#" class="bondi-blue" title="Settings"><i class="icon-cogs"></i></a></li>
						</ul>
					</div>
					<ul class="breadcrumb">
						<li><a href="#" class="icon-home"></a><span class="divider "><i class="icon-angle-right"></i></span></li>
						<li><a href="#">Library</a><span class="divider"><i class="icon-angle-right"></i></span></li>
						<li class="active">Data</li>
					</ul>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span12">
					<div class="switch-board gray">
						<ul class="clearfix switch-item">
							<li><span class="notify-tip">30</span><a href="#" class="brown"><i class="icon-user"></i><span>User</span></a></li>
							<li><a href="#" class="orange"><i class="icon-cogs"></i><span>Settings</span></a></li>
							<li><a href="#" class=" blue-violate"><i class="icon-lightbulb"></i><span>Support</span></a></li>
							<li><a href="#" class=" magenta"><i class="icon-bar-chart"></i><span>Statistics</span></a></li>
							<li><a href="#" class="green"><i class="icon-shopping-cart"></i><span>Orders</span></a></li>
							<li><a href="#" class=" bondi-blue"><i class="icon-time"></i><span>Events</span></a></li>
							<li><a href="#" class=" dark-yellow"><i class="icon-file-alt"></i><span>Post</span></a></li>
							<li><a href="#" class=" blue"><i class="icon-copy"></i><span>Documents</span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row-fluid ">
				<div class="span12">
					<div class="board-widgets gray">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left">Site Stat</h4>
							<a href="#" class="widget-settings"><i class="icon-group"></i></a>
						</div>
						<div class="board-widgets-content">
							<div class="row-fluid">
								<div class="span8">
									<div class="widget-container">
										<div id="visitors-chart">
											<div id="visitors-container" style="width: 100%;height:300px; text-align: center; margin:0 auto;">
											</div>
										</div>
									</div>
								</div>
								<div class="span4">
									<div class="widget-container">
										<div id="pie-chart-donut" class="pie-chart">
											<div id="legendPlaceholder">
											</div>
											<div id="pie-donutContainer" style="width: 100%;height:280px; text-align: left;">
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="stat-text">
								 26458 <i class="up icon-sort-up"></i> 5%
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row-fluid ">
				<div class="span3">
					<div class="board-widgets gray">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left">Visitors</h4>
							<a href="#" class="widget-settings"><i class="icon-group"></i></a>
						</div>
						<div class="board-widgets-content">
							<div class="line-min-chart min-chart">
							</div>
							<div class="stat-text">
								 26458 <i class="up icon-sort-up"></i> 5%
							</div>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets gray">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left">Page View </h4>
							<a href="#" class="widget-settings"><i class="icon-file-alt"></i></a>
						</div>
						<div class="board-widgets-content">
							<div class="bar-min-chart min-chart">
							</div>
							<div class="stat-text">
								 26458 <i class="down icon-sort-down"></i> 5%
							</div>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets gray">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left">Clicks </h4>
							<a href="#" class="widget-settings"><i class="icon-hand-up"></i></a>
						</div>
						<div class="board-widgets-content">
							<div class="pie-min-chart min-chart">
							</div>
							<div class="stat-text">
								 26458 <i class="down icon-sort-down"></i> 5%
							</div>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets gray">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left">Earn Money </h4>
							<a href="#" class="widget-settings"><i class="icon-money"></i></a>
						</div>
						<div class="board-widgets-content">
							<div class="tristate-min-chart min-chart">
							</div>
							<div class="stat-text">
								 26458 <i class="down icon-sort-down"></i> 5%
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row-fluid ">
				<div class="span3">
					<div class="board-widgets orange small-widget">
						<a href="#"><span class="widget-stat">325</span><span class="widget-icon icon-comments"></span><span class="widget-label">Comments</span></a>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets bondi-blue small-widget">
						<a href="#"><span class="widget-stat">568</span><span class="widget-icon icon-user"></span><span class="widget-label">User</span></a>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets green small-widget">
						<a href="#"><span class="widget-stat">255</span><span class="widget-icon icon-file-alt"></span><span class="widget-label">Files</span></a>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets brown small-widget">
						<a href="#"><span class="widget-stat">6587</span><span class="widget-icon icon-money"></span><span class="widget-label">Earnings ($)</span></a>
					</div>
				</div>
			</div>
			<div class="row-fluid ">
				<div class="span3">
					<div class="board-widgets green">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left"><i class="icon-inbox"></i> Inbox </h4>
							<a href="#" class="widget-settings"><i class="icon-cog "></i></a>
						</div>
						<div class="board-widgets-content">
							<span class="n-counter">235</span><span class="n-sources">Unread Messages</span>
						</div>
						<div class="board-widgets-botttom">
							<a href="#">Go to Inbox <i class="icon-double-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets blue-violate">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left"><i class=" icon-comment"></i> Comments </h4>
							<a href="#" class="widget-settings"><i class="icon-cog "></i></a>
						</div>
						<div class="board-widgets-content">
							<span class="n-counter">52</span><span class="n-sources">New Comments</span>
						</div>
						<div class="board-widgets-botttom">
							<a href="#">Go to Comments<i class="icon-double-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets dark-yellow">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left"><i class=" icon-file-alt"></i> Post </h4>
							<a href="#" class="widget-settings"><i class="icon-cog "></i></a>
						</div>
						<div class="board-widgets-content">
							<span class="n-counter">85</span><span class="n-sources">New Post</span>
						</div>
						<div class="board-widgets-botttom">
							<a href="#">Go to Post<i class="icon-double-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="board-widgets magenta">
						<div class="board-widgets-head clearfix">
							<h4 class="pull-left"><i class="icon-user"></i> User </h4>
							<a href="#" class="widget-settings"><i class="icon-cog "></i></a>
						</div>
						<div class="board-widgets-content">
							<span class="n-counter">65</span><span class="n-sources">New User</span>
						</div>
						<div class="board-widgets-botttom">
							<a href="#">Go to User<i class="icon-double-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span12">
					<h3 class=" page-header"> Tab Widgets</h3>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span6">
					<div class="tab-widget">
						<ul class="nav nav-tabs" id="myTab1">
							<li class="active"><a href="#user"><i class="icon-user"></i> Users</a></li>
							<li><a href="#post"><i class=" icon-file"></i> Post</a></li>
							<li><a href="#task"><i class=" icon-tasks"></i> Task List</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="user">
								<div class="user_list">
									<div class="user_block">
										<div class="info_block">
											<div class="widget_thumb">
												<img width="46" height="46" alt="User" src="images/user-thumb1.png">
											</div>
											<ul class="list_info clearfix">
												<li><span>Name: <i><a href="#">Zara Zarin</a></i></span></li>
												<li><span>IP: 194.132.12.1 Date: 13th Jan 2012</span></li>
												<li><span>User Type: Paid, <i>Package Name:</i><b>Gold</b></span></li>
											</ul>
										</div>
										<div class="clearfix">
											<div class="btn-group pull-left">
												<a href="#" class="btn btn-mini"><i class=" icon-remove"></i> Suspend</a><a href="#" class="btn "><i class=" icon-remove-sign"></i> Delete</a>
											</div>
											<div class="btn-group pull-right">
												<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a>
											</div>
										</div>
									</div>
									<div class="user_block">
										<div class="info_block">
											<div class="widget_thumb">
												<img width="46" height="46" alt="User" src="images/user-thumb1.png">
											</div>
											<ul class="list_info clearfix">
												<li><span>Name: <i><a href="#">Zara Zarin</a></i></span></li>
												<li><span>IP: 194.132.12.1 Date: 13th Jan 2012</span></li>
												<li><span>User Type: Paid, <i>Package Name:</i><b>Gold</b></span></li>
											</ul>
										</div>
										<div class="clearfix">
											<div class="btn-group pull-left">
												<a href="#" class="btn btn-mini"><i class=" icon-remove"></i> Suspend</a><a href="#" class="btn "><i class=" icon-remove-sign"></i> Delete</a>
											</div>
											<div class="btn-group pull-right">
												<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a>
											</div>
										</div>
									</div>
									<div class="user_block">
										<div class="info_block">
											<div class="widget_thumb">
												<img width="46" height="46" alt="User" src="images/user-thumb1.png">
											</div>
											<ul class="list_info clearfix">
												<li><span>Name: <i><a href="#">Zara Zarin</a></i></span></li>
												<li><span>IP: 194.132.12.1 Date: 13th Jan 2012</span></li>
												<li><span>User Type: Paid, <i>Package Name:</i><b>Gold</b></span></li>
											</ul>
										</div>
										<div class="clearfix">
											<div class="btn-group pull-left">
												<a href="#" class="btn btn-mini"><i class=" icon-remove"></i> Suspend</a><a href="#" class="btn "><i class=" icon-remove-sign"></i> Delete</a>
											</div>
											<div class="btn-group pull-right">
												<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="post">
								<div class="post_list clearfix">
									<div class="post_block clearfix">
										<h6><a href="#">Sed eu adipiscing nisi. Maecenas dapibus lacinia pretium. Praesent eget lectus ac odio euismod consequat. </a></h6>
										<ul class="post_meta clearfix">
											<li><span>Posted By:</span><a href="#">Joe Smith</a></li>
											<li><span>Date:</span><a href="#"> 30th April 2012</a></li>
											<li class="total_post"><span>Total Post: </span><a href="#">30</a></li>
										</ul>
										<div class="btn-group pull-left">
											<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a><a href="#" class="btn "><i class=" icon-remove"></i> Delete</a>
										</div>
										<div class="btn-group pull-right">
											<a href="#" class="btn"><i class=" icon-remove-sign"></i> Reject</a><a href="#" class="btn "><i class=" icon-ok"></i> Approve</a>
										</div>
									</div>
									<div class="post_block clearfix">
										<h6><a href="#">Sed eu adipiscing nisi. Maecenas dapibus lacinia pretium. Praesent eget lectus ac odio euismod consequat. </a></h6>
										<ul class="post_meta clearfix">
											<li><span>Posted By:</span><a href="#">Joe Smith</a></li>
											<li><span>Date:</span><a href="#"> 30th April 2012</a></li>
											<li class="total_post"><span>Total Post: </span><a href="#">30</a></li>
										</ul>
										<div class="btn-group pull-left">
											<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a><a href="#" class="btn "><i class=" icon-remove"></i> Delete</a>
										</div>
										<div class="btn-group pull-right">
											<a href="#" class="btn"><i class=" icon-remove-sign"></i> Reject</a><a href="#" class="btn "><i class=" icon-ok"></i> Approve</a>
										</div>
									</div>
									<div class="post_block clearfix">
										<h6><a href="#">Sed eu adipiscing nisi. Maecenas dapibus lacinia pretium. Praesent eget lectus ac odio euismod consequat. </a></h6>
										<ul class="post_meta clearfix">
											<li><span>Posted By:</span><a href="#">Joe Smith</a></li>
											<li><span>Date:</span><a href="#"> 30th April 2012</a></li>
											<li class="total_post"><span>Total Post: </span><a href="#">30</a></li>
										</ul>
										<div class="btn-group pull-left">
											<a href="#" class="btn"><i class=" icon-edit"></i> Edit</a><a href="#" class="btn "><i class=" icon-remove"></i> Delete</a>
										</div>
										<div class="btn-group pull-right">
											<a href="#" class="btn"><i class=" icon-remove-sign"></i> Reject</a><a href="#" class="btn "><i class=" icon-ok"></i> Approve</a>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="task">
								<ul class="task-list">
									<li class="done"><span class="task-check">
									<input name="" type="checkbox" checked value="">
									</span><a href="#">Etiam vulputate bibendum odio, vitae mollis urna rutrum id.</a></li>
									<li><span class="task-check">
									<input name="" type="checkbox" value="">
									</span><a href="#">Ut ac erat ac magna malesuada aliquam.</a></li>
									<li class="done"><span class="task-check">
									<input name="" type="checkbox" checked value="">
									</span><a href="#">Praesent scelerisque augue a augue lobortis id iaculis mi tincidunt.</a></li>
									<li><span class="task-check">
									<input name="" type="checkbox" value="">
									</span><a href="#">Phasellus tristique nulla at leo interdum pretium.</a></li>
									<li><span class="task-check">
									<input name="" type="checkbox" value="">
									</span><a href="#">Morbi tincidunt lacus et turpis fringilla in vehicula dolor semper.</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="span6">
					<div class="tab-widget">
						<ul class="nav nav-tabs" id="myTab2">
							<li class="active"><a href="#comments-post"><i class="icon-comments"></i> Commnets</a></li>
							<li><a href="#notify"><i class=" icon-envelope-alt"></i> Notification</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="comments-post">
								<div class="comment-items">
									<div class="item-block clearfix">
										<div class="item-thumb pull-left">
											<ul>
												<li class="item-pic"><img src="images/item-pic.png" width="34" height="34" alt="anchor"></li>
											</ul>
										</div>
										<div class="item-intro pull-left">
											<p>
												 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quam odio.
											</p>
											<div class="item-meta">
												<ul>
													<li>@jhone</li>
													<li>1 Min ago</li>
													<li>IP: 192.168.1.2</li>
												</ul>
											</div>
										</div>
                                        
									</div>
                                    <div class="item-block clearfix">
										<div class="item-thumb pull-left">
											<ul>
												<li class="item-pic"><img src="images/item-pic.png" width="34" height="34" alt="anchor"></li>
											</ul>
										</div>
										<div class="item-intro pull-left">
											<p>
												 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quam odio.
											</p>
											<div class="item-meta">
												<ul>
													<li>@jhone</li>
													<li>1 Min ago</li>
													<li>IP: 192.168.1.2</li>
												</ul>
											</div>
										</div>
                                        
									</div>
                                    <div class="item-block clearfix">
										<div class="item-thumb pull-left">
											<ul>
												<li class="item-pic"><img src="images/item-pic.png" width="34" height="34" alt="anchor"></li>
											</ul>
										</div>
										<div class="item-intro pull-left">
											<p>
												 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quam odio.
											</p>
											<div class="item-meta">
												<ul>
													<li>@jhone</li>
													<li>1 Min ago</li>
													<li>IP: 192.168.1.2</li>
												</ul>
											</div>
										</div>
                                        
									</div>
									<div class="item-block clearfix">
										<div class="item-thumb pull-left">
											<ul>
												<li class="item-pic"><img src="images/item-pic.png" width="34" height="34" alt="anchor"></li>
											</ul>
										</div>
										<div class="item-intro pull-left">
											<p>
												 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quam odio.
											</p>
											<div class="item-meta">
												<ul>
													<li>@jhone</li>
													<li>1 Min ago</li>
													<li>IP: 192.168.1.2</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="item-block clearfix">
										<div class="item-thumb pull-left">
											<ul>
												<li class="item-pic"><img src="images/item-pic.png" width="34" height="34" alt="anchor"></li>
											</ul>
										</div>
										<div class="item-intro pull-left">
											<p>
												 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quam odio.
											</p>
											<div class="item-meta">
												<ul>
													<li>@jhone</li>
													<li>1 Min ago</li>
													<li>IP: 192.168.1.2</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="notify">
								<ul class="notification-list">
									<li><a href="#"><i class=" icon-star gray"></i> Donec pretium enim vel nisl viverra posuere.</a></li>
									<li><a href="#"><i class=" icon-bell orange"></i> Vestibulum viverra magna vitae dui volutpat dapibus.</a></li>
									<li><a href="#"><i class=" icon-bolt brown"></i> Fusce eget ipsum in odio consectetur condimentum et id nisl.</a></li>
									<li><a href="#"><i class=" icon-ok-sign green"></i> Mauris fringilla metus in mauris molestie tempor</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span6">
					<div class="content-widgets">
						<div>
							<div class="widget-header-block">
								<h4 class="widget-header"><i class=" icon-table"></i> Table</h4>
							</div>
							<div class="content-box">
								<table class="paper-table">
							<tbody>
							<tr>
								<th>
									Name
								</th>
								<th>
									Email
								</th>
								<th>
									Phone
								</th>
							  </tr>
							<tr>
								<td>
									William
								</td>
								<td>
									sed@ut.com
								</td>
								<td>
									1 88 317 3405-3579
								</td>
							  </tr>
							<tr>
								<td>
									Armando
								</td>
								<td>
									aliquet.Proin.velit@nectellusNunc.ca
								</td>
								<td>
									1 48 785 9884-8986
								</td>
							  </tr>
							<tr>
								<td>
									Randall
								</td>
								<td>
									Phasellus@odioa.edu
								</td>
								<td>
									1 69 507 5179-0064
								</td>
							  </tr>
							<tr>
								<td>
									Trevor
								</td>
								<td>
									rutrum.lorem@loremac.edu
								</td>
								<td>
									1 37 926 6084-5261
								</td>
							  </tr>
							<tr>
								<td>
									Devin
								</td>
								<td>
									fermentum@magna.com
								</td>
								<td>
									1 85 482 9862-2045
								</td>
							  </tr>
							<tr>
								<td>
									Perry
								</td>
								<td>
									ornare.elit@orciDonec.ca
								</td>
								<td>
									1 35 451 5827-8907
								</td>
							  </tr>
							<tr>
								<td>
									Jonah
								</td>
								<td>
									ante.bibendum@loremipsumsodales.com
								</td>
								<td>
									1 57 742 3261-6798
								</td>
							  </tr>
							<tr>
								<td>
									Daquan
								</td>
								<td>
									Mauris@ipsumdolor.edu
								</td>
								<td>
									1 65 155 8114-9683
								</td>
							  </tr>
							<tr>
								<td>
									Fulton
								</td>
								<td>
									sem.egestas@Nullamscelerisque.edu
								</td>
								<td>
									1 39 708 6219-6913
								</td>
							  </tr>
							<tr>
								<td>
									Herrod
								</td>
								<td>
									tortor@mollis.edu
								</td>
								<td>
									1 25 984 4192-7830
								</td>
							  </tr>
							</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
                <div class="span6">
                <div class="content-widgets white">
						<div class="widget-head light-blue">
							<h3><i class="icon-comments-alt"></i> Chat</h3>
						</div>
						<div class="widget-container">
							<div class="tab-widget tabbable tabs-left chat-widget">
								<ul class="nav nav-tabs" id="chat-tab">
									<li class="active"><a href="#user"><span class="user-online"></span><i class="icon-user"></i> Online User </a></li>
									<li><a href="#user1"><span class="user-offline"></span><i class="icon-user"></i> Offline User </a></li>
									<li><a href="#user2"><span class="user-offline"></span><i class="icon-user"></i> Offline User </a></li>
									<li><a href="#user3"><span class="user-offline"></span><i class="icon-user"></i> Offline User </a></li>
									<li><a href="#user4"><span class="user-offline"></span><i class="icon-user"></i> Offline User </a></li>
									<li><a href="#user5"><span class="user-offline"></span><i class="icon-user"></i> Offline User </a></li>
									<li><a href="#user6"><span class="user-online"></span><i class="icon-user"></i> Online User </a></li>
									<li><a href="#user7"><span class="user-online"></span><i class="icon-user"></i> Online User </a></li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane active" id="user">
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation right-align">
											<a href="#" class="pull-right media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Marfy Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation right-align">
											<a href="#" class="pull-right media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Marfy Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation right-align">
											<a href="#" class="pull-right media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Marfy Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="user1">
										 User Offline
									</div>
									<div class="tab-pane" id="user2">
										 User Offline
									</div>
									<div class="tab-pane" id="user3">
										 User Offline
									</div>
									<div class="tab-pane" id="user4">
										 User Offline
									</div>
									<div class="tab-pane" id="user5">
										 User Offline
									</div>
									<div class="tab-pane" id="user6">
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation right-align">
											<a href="#" class="pull-right media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Marfy Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="user7">
										<div class="conversation">
											<a href="#" class="pull-left media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Jhon Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
										<div class="conversation right-align">
											<a href="#" class="pull-right media-thumb"><img src="images/item-pic.png" width="34" height="34" alt="user"></a>
											<div class="conversation-body ">
												<h4 class="conversation-heading">Marfy Says:</h4>
												<p>
													 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="chat-input">
									<textarea class="chat-inputbox span12" name="input"></textarea>
									<button class="btn btn-primary btn-large" type="button"><i class="icon-ok"></i> Send</button>
								</div>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
	</div>
	<div class="copyright">
		<p>
			 &copy; 2013 westilian
		</p>
	</div>
	<div class="scroll-top">
		<a href="#" class="tip-top" title="Go Top"><i class="icon-double-angle-up"></i></a>
	</div>
</div>
</body>
</html>