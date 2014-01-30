'use strict';

String.prototype.replaceAll = function(from, to){
    var str = this;
    var pos = str.indexOf(from);
    while (pos > -1){
        str = str.replace(from, to);
        pos = str.indexOf(from);
    }
    return (str);
}

/*
	Sample:
	var draws = ['/forums/:A/comments/:B/response/:C',
	             '/forums/:id/edit/',
	             'forums/:id',
	             'forums/:forum_id /comments/:id/'] 
	var uri = '/forums/1/comments/2/';
	
	Utils.getUriParams(uri,draws) == {forum_id:1, id:2}

*/

var Utils = function(){};

Utils.getDrawParams = function(draw){
    var params = draw.match(/:(.*?)(\/|$)/g);
    if(!params) {
        return []
    }
    for(var idx in params){
        params[idx] = params[idx].replace(/[\[/]/g,'');
    }
    return params;
}

// EXTRACT OBJECT WITH PARAMS
Utils.getUriParams = function(uri,draws) {
    var self = this;
    var keyValue = {};
    for(var idx in draws){
        
        var draw = ('/' + draws[idx] + '/').replaceAll('//','/').replaceAll(' ','').trim();
        draw = draw.substr(1, draw.length-2);
        var drawParts = draw.split('/');
        
        var uri2 = ('/' + uri + '/').replaceAll('//','/').replaceAll(' ','').trim();
        uri2 = uri2.substr(1, uri2.length-2);
        var uriParts = uri2.split('/');
    
        if (drawParts.length != uriParts.length) {        
            continue;
        }        
        
        keyValue = {};
        for(var jdx in uriParts){        
            var samePart = (uriParts[jdx] == drawParts[jdx]);        
            var isPartParam = Utils.getDrawParams(draw).indexOf(drawParts[jdx]) >= 0;
            if (drawParts[jdx].indexOf(':')>=0) {
                keyValue[drawParts[jdx].replaceAll(':','')] = uriParts[jdx];
            }
            if (!isPartParam) {
                if(!samePart){
                    break;
                }
            }
            
        }        
    }
    return keyValue;
}



