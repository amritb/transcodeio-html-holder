var typewriter={};typewriter.Typewriter=function(){var context;a_sentences=[];c_index=0;var options={blink_interval:600,type_interval:65,construct_timeout:600,deconstruct_timeout:1500,caret_symbol:'|',random:true};typewriter.init=function(context_id,sentences){context=context_id;a_sentences=sentences;typewriter.blink(context);};typewriter.blink=function(context_id,ms){if(typeof(ms)==='undefined')ms=options.blink_interval;var blink=false;var c=context_id;var timer=setInterval(function(){doBlink(c);},ms);doBlink=function(c){if(blink===true){removeCursor(c);blink=false;}else{addCursor(c);blink=true;}};removeCursor=function(c){document.getElementById(c).innerHTML=document.getElementById(c).innerHTML.replace(options.caret_symbol,'');};addCursor=function(c){document.getElementById(c).innerHTML+=options.caret_symbol;};type=function(s){clearInterval(timer);document.getElementById(c).innerHTML=s+options.caret_symbol;};};typewriter.typewrite=function(context_id,sentences){if(typeof(timeout)==='undefined')timeout=options.construct_timeout;if(options.random===true){typewriter.random();}setTimeout(function(){typewriter.construct(a_sentences[c_index],function(){setTimeout(function(){typewriter.deconstruct(a_sentences[c_index]);},options.deconstruct_timeout);});},timeout);};typewriter.deconstruct=function(s){var sentence=s;var timer=setInterval(function(){removeLastCharacter();},options.type_interval);function removeLastCharacter(){if(sentence.length>0){sentence=sentence.slice(0,-1);type(sentence);}else{clearInterval(timer);removeCursor(context);typewriter.blink(context);c_index=(c_index+1)%a_sentences.length;typewriter.typewrite(context,a_sentences);}}};typewriter.construct=function(s,callback){var sentence=s;var c_sentence="";var index=1;var timer=setInterval(function(){addLastCharacter(index);},options.type_interval);function addLastCharacter(i){if(index!=s.length+1){c_sentence=sentence.slice(0,i);type(c_sentence);index++;}else{clearInterval(timer);removeCursor(context);typewriter.blink(context);if(typeof(callback)!='undefined')callback();}}};typewriter.random=function(){c_index=Math.floor((Math.random()*a_sentences.length));};return{cycle:function(context_id,sentences){typewriter.init(context_id,sentences);typewriter.typewrite(context_id,sentences);},write:function(context_id,sentence,callback){typewriter.init(context_id,sentence);typewriter.construct(sentence,callback);},blink:function(context_id,ms){typewriter.blink(context_id,ms);}};}();