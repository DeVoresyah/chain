//<![CDATA[
var _$_ead9=["\x23\x76\x75\x65\x57\x72\x61\x70\x70\x65\x72","\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\x68\x61\x73\x68\x76\x69\x72\x74\x75\x61\x6C\x5F\x75\x73\x65\x72\x6E\x61\x6D\x65","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x61\x64\x6D\x69\x6E\x47\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x41\x63\x63\x6F\x75\x6E\x74","\x74\x65\x78\x74","\x70\x61\x72\x73\x65\x4A\x53\x4F\x4E","\x6C\x61\x74\x65\x73\x74\x5F\x75\x73\x65\x72","\x74\x6F\x70\x5F\x75\x73\x65\x72","\x64\x65\x73\x63","\x44\x61\x74\x61\x54\x61\x62\x6C\x65","\x23\x74\x6F\x70\x2D\x74\x61\x62\x6C\x65","\x23\x6C\x61\x74\x65\x73\x74\x2D\x74\x61\x62\x6C\x65","\x74\x6F\x74\x61\x6C\x5F\x75\x73\x65\x72","\x6C\x65\x6E\x67\x74\x68","\x53\x68\x61\x72\x65\x64\x48\x61\x73\x68\x72\x61\x74\x65","\x4C\x69\x74\x65\x73\x70\x65\x65\x64\x48\x61\x73\x68\x72\x61\x74\x65","\x53\x53\x44\x48\x61\x73\x68\x72\x61\x74\x65","\x74\x6F\x74\x61\x6C\x5F\x69\x6E\x63\x6F\x6D\x65","\x74\x6F\x74\x61\x6C\x5F\x6B\x68\x73","\x48\x61\x73\x68\x72\x61\x74\x65","\x61\x6A\x61\x78","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x61\x64\x6D\x69\x6E\x47\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x57\x69\x74\x68\x64\x72\x61\x77\x61\x6C","\x74\x6F\x74\x61\x6C\x5F\x70\x61\x79\x69\x6E\x67","\x41\x6D\x6F\x75\x6E\x74","\x74\x6F\x46\x69\x78\x65\x64","\x3F\x70\x72\x6F\x73\x65\x73\x3D\x67\x65\x74\x44\x61\x74\x61\x26\x64\x62\x3D\x41\x64\x6D\x69\x6E\x26\x75\x73\x65\x72\x6E\x61\x6D\x65\x3D","\x6E\x61\x6D\x65","\x4E\x61\x6D\x65","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x40","\x55\x73\x65\x72\x6E\x61\x6D\x65"];var vueDashboard= new Vue({el:_$_ead9[0],data:{name:_$_ead9[1],username:_$_ead9[1],total_income:0,total_paying:0,total_khs:0,total_user:0,latest_user:[],top_user:[]},components:{"\x6C\x65\x66\x74\x2D\x70\x61\x6E\x65\x6C":left_panel},methods:{logout:function(){clearSession(_$_ead9[2])}},mounted:function(){var a=this;$[_$_ead9[20]]({url:db_name+ _$_ead9[3],dataType:_$_ead9[4],success:function(b){var c=$[_$_ead9[5]](b);a[_$_ead9[6]]= c;a[_$_ead9[7]]= c;setTimeout(function(){$(_$_ead9[10])[_$_ead9[9]]({"\x6F\x72\x64\x65\x72":[[1,_$_ead9[8]]],"\x62\x50\x61\x67\x69\x6E\x61\x74\x65":false,"\x62\x4C\x65\x6E\x67\x74\x68\x43\x68\x61\x6E\x67\x65":false,"\x62\x49\x6E\x66\x6F":false,"\x69\x44\x69\x73\x70\x6C\x61\x79\x4C\x65\x6E\x67\x74\x68":10});$(_$_ead9[11])[_$_ead9[9]]({"\x6F\x72\x64\x65\x72":[[0,_$_ead9[8]]],"\x62\x50\x61\x67\x69\x6E\x61\x74\x65":false,"\x62\x4C\x65\x6E\x67\x74\x68\x43\x68\x61\x6E\x67\x65":false,"\x62\x49\x6E\x66\x6F":false,"\x69\x44\x69\x73\x70\x6C\x61\x79\x4C\x65\x6E\x67\x74\x68":10})},5);a[_$_ead9[12]]= c[_$_ead9[13]];var e=0,d=0,f=0;for(i= 0;i< c[_$_ead9[13]];i++){e+= c[i][_$_ead9[14]]* 0.5;d+= c[i][_$_ead9[15]]* 0.35;f+= c[i][_$_ead9[16]]* 0.25;a[_$_ead9[17]]= (e+ d+ f);a[_$_ead9[18]]+= c[i][_$_ead9[19]]}}});$[_$_ead9[20]]({url:db_name+ _$_ead9[21],dataType:_$_ead9[4],success:function(b){var c=$[_$_ead9[5]](b);for(i= 0;i< c[_$_ead9[13]];i++){a[_$_ead9[22]]+= c[i][_$_ead9[23]]};a[_$_ead9[22]]= parseFloat(a[_$_ead9[22]][_$_ead9[24]](8))}});$[_$_ead9[20]]({url:db_name+ _$_ead9[25]+ checkSession(_$_ead9[2]),dataType:_$_ead9[4],success:function(b){var c=$[_$_ead9[5]](b);a[_$_ead9[26]]= c[0][_$_ead9[27]];a[_$_ead9[28]]= _$_ead9[29]+ c[0][_$_ead9[30]]}})}})
//]]>