//<![CDATA[
var _$_d012=["\x23\x76\x75\x65\x57\x72\x61\x70\x70\x65\x72","\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","","\x61\x64\x64","\x67\x72\x69\x74\x74\x65\x72","\x68\x61\x73\x68\x76\x69\x72\x74\x75\x61\x6C\x5F\x75\x73\x65\x72\x6E\x61\x6D\x65","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x41\x63\x63\x6F\x75\x6E\x74\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x74\x65\x78\x74","\x70\x61\x72\x73\x65\x4A\x53\x4F\x4E","\x6E\x61\x6D\x65","\x4E\x61\x6D\x65","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x40","\x55\x73\x65\x72\x6E\x61\x6D\x65","\x61\x6A\x61\x78","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x43\x6F\x6E\x74\x72\x61\x63\x74\x73\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x63\x6F\x6E\x74\x72\x61\x63\x74\x5F\x6C\x69\x73\x74","\x64\x65\x73\x63","\x44\x61\x74\x61\x54\x61\x62\x6C\x65","\x23\x63\x6F\x6E\x74\x72\x61\x63\x74\x2D\x74\x61\x62\x6C\x65","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x50\x75\x72\x63\x68\x61\x73\x65\x73\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x6C\x69\x73\x74","\x23\x70\x75\x72\x63\x68\x61\x73\x65\x2D\x74\x61\x62\x6C\x65","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6C\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x77\x64\x5F\x6C\x69\x73\x74","\x23\x77\x64\x2D\x74\x61\x62\x6C\x65","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x4D\x69\x6E\x65\x72\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x6D\x69\x6E\x69\x6E\x67\x5F\x6C\x69\x73\x74","\x23\x6D\x69\x6E\x69\x6E\x67\x2D\x74\x61\x62\x6C\x65"];var vueHistory= new Vue({el:_$_d012[0],data:{name:_$_d012[1],username:_$_d012[1],contract_list:[],purchase_list:[],wd_list:[],mining_list:[]},components:{"\x6C\x65\x66\x74\x2D\x70\x61\x6E\x65\x6C":left_panel},methods:{createAlert:function(b,a){jQuery[_$_d012[4]][_$_d012[3]]({title:b,text:a,sticky:false,time:_$_d012[2]});return false},logout:function(){clearSession(_$_d012[5])}},mounted:function(){var c=this;$[_$_d012[14]]({url:db_name+ _$_d012[6]+ checkSession(_$_d012[5]),dataType:_$_d012[7],success:function(d){var e=$[_$_d012[8]](d);c[_$_d012[9]]= e[0][_$_d012[10]];c[_$_d012[11]]= _$_d012[12]+ e[0][_$_d012[13]]}});$[_$_d012[14]]({url:db_name+ _$_d012[15]+ checkSession(_$_d012[5]),dataType:_$_d012[7],success:function(d){var e=$[_$_d012[8]](d);c[_$_d012[16]]= e;setTimeout(function(){$(_$_d012[19])[_$_d012[18]]({"\x6F\x72\x64\x65\x72":[[0,_$_d012[17]]]})},1)}});$[_$_d012[14]]({url:db_name+ _$_d012[20]+ checkSession(_$_d012[5]),dataType:_$_d012[7],success:function(d){var e=$[_$_d012[8]](d);c[_$_d012[21]]= e;setTimeout(function(){$(_$_d012[22])[_$_d012[18]]({"\x6F\x72\x64\x65\x72":[[0,_$_d012[17]]]})},1)}});$[_$_d012[14]]({url:db_name+ _$_d012[23]+ checkSession(_$_d012[5]),dataType:_$_d012[7],success:function(d){var e=$[_$_d012[8]](d);c[_$_d012[24]]= e;setTimeout(function(){$(_$_d012[25])[_$_d012[18]]({"\x6F\x72\x64\x65\x72":[[0,_$_d012[17]]]})},1)}});$[_$_d012[14]]({url:db_name+ _$_d012[26]+ checkSession(_$_d012[5]),dataType:_$_d012[7],success:function(d){var e=$[_$_d012[8]](d);c[_$_d012[27]]= e;setTimeout(function(){$(_$_d012[28])[_$_d012[18]]({"\x6F\x72\x64\x65\x72":[[0,_$_d012[17]]]})},1)}})}})
//]]>