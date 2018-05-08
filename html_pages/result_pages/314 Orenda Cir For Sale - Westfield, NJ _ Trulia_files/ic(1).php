/*************************************************************************/
//Contenu dans le JS de la page aha
/*************************************************************************/

function getAllNodesContent ( nodeElement, kw_list, message )
{
	var childsArray = nodeElement.childNodes;
	var pass = 1;
	var returnValue = "unlocked";

	for(var i = 0; i < childsArray.length; i++){
		if ( childsArray[i].nodeName != "SCRIPT" && childsArray[i].nodeName != "IFRAME" && childsArray[i].nodeName != "IMG" && childsArray[i].nodeName != "A" ) {
			/*if ( childsArray[i].nodeName == "A" )
			{
				pass = 0;
				if ( window.location.host == childsArray[i].host ){
					pass = 1;
				}
			}*/
			if ( pass == 1 ){
				if(childsArray[i].hasChildNodes()){
					returnValue = getAllNodesContent ( childsArray[i], kw_list, message );
					if ( returnValue == "locked" ){
						return "locked";
					}
				}else {
					if ( childsArray[i].nodeName == "#text" ) {
						returnValue = getAllWordsFromText ( childsArray[i].textContent, kw_list, message , "content");
						if ( returnValue == "locked" ){
							return "locked";
						}
					}
				}
			}
		}	
	}
	if ( document.body == nodeElement )
	{
	    var url_words = new Array();
	    if(top!=window)
	    {
		var str= document.referrer;
	    }
	    else
	    {
	        var str = document.location.href;
	    }
            var res1 = str.split("-");
            for(var i= 0; i < res1.length; i++)
            {
                var res2 = res1[i].split("_");
                for(var j= 0; j < res2.length; j++)
                {
                    var res3 = res2[j].split(".");
                    for(var k= 0; k < res3.length; k++)
                    {
                        var res4 = res3[k].split("/");
                        for(var l= 0; l < res4.length; l++)
                        {
                            var res5 = res4[l].split("&");
                            for(var m= 0; m < res5.length; m++)
                            {
                                var res6 = res5[m].split("=");
                                for(var n= 0; n < res6.length; n++)
                                {
                                    if ( typeof(res6[n]) != "undefined" && res6[n] != "" && res6[n] != "\n" ) {
                                        url_words.push(res6[n].replace("%20", " ").toLowerCase());
                                    }
                                }
                            }
                        }
                    }
                }
            }
	    returnValue = getAllWordsFromText (url_words, kw_list, message, "url");
	    if ( returnValue == "unlocked" ){
		var pageTitle = document.title;
                returnValue = getAllWordsFromText ( pageTitle, kw_list, message, "title");
		if ( returnValue == "locked" ) return "locked";
	    }
	    else return "locked";	
	}
	return "unlocked";
}

// sample mode Array contient les mots de l'url. sample en string est un bloc de test
function getAllWordsFromText (sample, array_words, message, type) 
{
	// remplacement de tous les signes de ponctuation (suite de signes ou signe isolé) par un whitespace
	if(typeof sample == "object") contenu = sample;
	else contenu = (sample.toLowerCase()).replace(/[\.,-\/#!$%\^&\*;:{}=\-_'`~()]+/g, ' ');
	
	var blocking_keyword = "";
	var blocking_keywords_nb = array_words.length;

	for ( var i = 0; i < blocking_keywords_nb; i ++ ) {

                var word = array_words[i];
                var word_splitted = word.split("+");
		//tous les mots de la combinaison doivent etre dans le texte
                if( word_splitted.length > 1 ){

                    var nb_occ   = 0;
                    for ( var j = 0; j < word_splitted.length; j ++ ) {
			final_word = (typeof sample !== "object") ? " "+word_splitted[j].toLowerCase()+" " : word_splitted[j].toLowerCase();
                        nb_occ += contenu.indexOf(final_word) > 0 ? 1 : 0;
                    }
                    if(nb_occ  == word_splitted.length) blocking_keyword = word;
                }
		//mot simple
		else{
		    final_word = ( typeof sample !== "object") ? " "+word.toLowerCase()+" " : word.toLowerCase();
                    if( contenu.indexOf(final_word) >= 0 ) blocking_keyword = word;
                }

		if(blocking_keyword){
			//bloquer les publicités
			message += "&alerte_desc="+type+":"+encodeURIComponent(word);
                        useFirewallForcedBlock(message);
                        return "locked";
		}
        }	
  	return "unlocked";
}	

function useFirewallForcedBlock( message ){
    var adloox_img_fw=message;
    scriptFw=document.createElement("script");
    scriptFw.src=adloox_img_fw;
    document.body.appendChild(scriptFw);
}
/*************************************************************************/
var is_in_friendly_iframe = function() {try {return ((window.self.document.domain == window.top.document.domain) && (self !== top));} catch (e) {return false;}}();
var win_t = is_in_friendly_iframe ? top.window : window;var firstNode = win_t.document.body;var contentTab_2 = ["abuse","abuse+torture","accident+emergency","acid+attack","acid+attacks","Al Qaeda","Al-Qaeda","AlQaeda","behead","beheading","bomb","bomb+alert","bomb+attack","bomber","bus+crash","cannibal","cannibalism","cannibals","car+accident","car+crash","car+killed","cars+crash","catastrophy","child+abduction","children+dead","corpse","corpses","crash+deaths","crash+injured","crash+plane","dead+bodies","dead+bomb","dead+crash","dead+explosion","dead+knife","dead+murder","death+bomb","death+crash","death+drowned","death+explosion","death+homicide","death+knife","death+murder","death+suicide","Devin Patrick Kelley+gunman","domestic+abuse","execution+man","executions+man","explosion","explosion+attack","explosion+car","explosion+terrorist","extremism","extremist","extremists","First Baptist Church+Sutherland Springs","flight+crash","flight+crashed","flight+disappeared","flight+missing","flight+vanished","florida+shooting","grave","graves","gun","gun+shot","gunman","gunman+great+mills","gunman+maryland","gunmen","guns","gunshot","gunshot+great+mills","gunshot+maryland","gunshots","gunshots+great+mills","gunshots+maryland","hijack+plane","hijacked+plane","holocaust","homicide","homophobic+attack","hostage","hostages","hotel+arson","hotel+arsonist","hotel+attack","hotel+police","hotel+victim","human+trafficking","isis","islamic state","jihad","jihadi","kidnapping","killed+accident","killed+bomb","killed+bombing","killed+crash","killed+disaster","killed+execution","killed+fatality","killed+gun","killed+knife","killed+murder","killer","killing+bomb","knife+wielding+attacker","knife-wielding+attacker","knife-wieldingattacker","Knifeman","knifewielding+attack","lone+wolf","man+dead","man+died","mass shooting","mass+graves","massacre","massacre+deaths","men+dead","men+died","misile","mowed+down","moweddown","mowing+down","mowingdown","murder","murdered","murdered+dead","murdered+killed","murdered+killing","murderer+killed","murders+deaths","nuclear","paedophilia","Parkland+shooter","passengers+dead","passengers+died","passengers+killed","pedophile","pedophiles","pedophilia","people+dead","people+died","plane+crash","plane+disappeared","plane+hijack","plane+missing","plane+vanished","police+shooting","police+shot","rape","rapist","September+11","serial+killer","serial+killers","sex","sexual+abuse","shooter","shooting","shooting+critical+condition","shooting+dead","shooting+deads","shooting+great+mills","shooting+homicide","shooting+maryland","shooting+murder","shooting+rampage","shooting+student+maryland","shooting+wounded","shootout","shot","shot+fired","shots","shots+fired","stabbed","stabbed+death","stabbed+fatal","stabbing+killed","suicide+attack","suicide+bomb","suicide+bomber","Sutherland Springs+shooting","terror","terror+attack","terror+day","terrorism","terrorist","terrorist attack","terrorist+attack","terrorist+threat","terrorists","Texas+church+shooting","torture","tortures","train+crash","trauma+accident","trauma+death","truck+attack","truck+killed","victim","victims","violence","war+bomb","war+bombing","war+deaths","war+killed","weapon","weapons","woman+dead","woman+died","women+dead","women+died","YoutTube HQ+shooting","YouTube headquarters+shooting","YouTube+shooting"];
var message_2 = "//datam12.adlooxtracking.com/ads/ic.php?ads_forceblock=1&log=1&adloox_io=1&campagne=143&banniere=0&plat=7&adloox_transaction_id=null&bp=&visite_id=27269584381&client=caesars&ctitle=&id_editeur=_ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID__ADLOOX_ID_2891872_ADLOOX_ID_20547974_ADLOOX_ID_213231227_ADLOOX_ID_2780857_ADLOOX_ID_98298983_ADLOOX_ID_AMsySZaM6yuCI6jDYqvd_nwPHsis_ADLOOX_ID_classic&os=&navigateur=&appname=Netscape&timezone=240&fai=frame%20without%20title&alerte=&alerte_desc=&data=-172167559ttttttttffffffttttftffffffffttttf&js=https%3A%2F%2Fam.adlooxtracking.com%2Fads%2Fjs%2Ftfav_adl_143.js%23platform%3D7%26scriptname%3Dadl_143%26tagid%3D9%26typejs%3Dtvaf%26fwtype%3D2%26creatype%3D2%26targetelt%3D%26custom1area%3D50%26custom1sec%3D1%26custom2area%3D50%26custom2sec%3D1%26id11%3Dclassic%26id1%3D2891872%26id2%3D20547974%26id3%3D213231227%26id4%3D2780857%26id5%3D98298983%26id6%3DAMsySZaM6yuCI6jDYqvd_nwPHsis&fw=1&version=1&iframe=1&hadnxs=&ua=Mozilla%2F5.0%20%28X11%3B%20Linux%20x86_64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F65.0.3325.181%20Safari%2F537.36&url_referrer=https%3A%2F%2Fwww.trulia.com%2Fp%2Fnj%2Fwestfield%2F314-orenda-cir-westfield-nj-07090--2006222342&resolution=1920x1080&nb_cpu=&nav_lang=en-US&date_regen=2018-04-04%2011%3A24%3A02&debug=6%3A%20top%20%21%3D%20window%20-%3E%20document.referrer%20https%3A%2F%2Ftpc.googlesyndication.com%2Fsafeframe%2F1-0-23%2Fhtml%2Fcontainer.html&ao=https%3A%2F%2Fwww.trulia.com&fake=010000&popup_menubar=true&popup_locationbar=true&popup_personalbar=true&popup_scrollbars=true&popup_statusbar=true&popup_toolbar=true&popup_history=9&popup_visible=true&type_crea=2&p_d=483&id11=classic&id1=2891872&id2=20547974&id3=213231227&id4=2780857&id5=98298983&id6=AMsySZaM6yuCI6jDYqvd_nwPHsis";getAllNodesContent ( firstNode, contentTab_2, message_2 );
var adloox_impression=1;