function get_coin()
 {
	var url = "http://vip.taobao.com/vip_home.htm?auto_take=true";
	var mywindow = window.open(url,"mywindow","height=600,width=800,top=100,left=240,resizable=yes,status=yes,toolbar=yes,menubar=yes,location=yes")
	
	window.focus();
}

get_coin();

