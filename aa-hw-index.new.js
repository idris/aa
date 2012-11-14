function hw_get_img_url ( page) {
	if ( page < 1) page = 1;
	if ( page > hw_p.length - 1) page = hw_p.length - 1;
	cur_hw_page = page;
	var p = page;
	var prefixed_page = p;
	if ( p < 10) prefixed_page = "00" + p;
	else if ( p < 100) prefixed_page = "0" + p;
	return "hw/" + Math.floor(page/100) + "/hw-p" + prefixed_page + ".png";
}

function hw_getchap( page) {
	// Return chapter of current page
	for (var i = 0; i < hw_c.length; i++) {
		if ( hw_c[i][1] >= page) { return i-1; }
	}
	return 0;
}

var hw_c = new Array(30);
for (i = 0; i < hw_c.length; ++i) hw_c[i] = new Array (2);
/* Not necessary is it?
hw_c[0] = [];
hw_c[1] = [];
hw_c[2] = [];
hw_c[3] = [];
hw_c[4] = [];
hw_c[5] = [];
hw_c[6] = [];
hw_c[7] = [];
hw_c[8] = [];
hw_c[9] = [];
hw_c[10] = [];
hw_c[11] = [];
hw_c[12] = [];
hw_c[13] = [];
hw_c[14] = [];
hw_c[15] = [];
hw_c[16] = [];
hw_c[17] = [];
hw_c[18] = [];
hw_c[19] = [];
hw_c[20] = [];
hw_c[21] = [];
hw_c[22] = [];
hw_c[23] = [];
hw_c[24] = [];
hw_c[25] = [];
hw_c[26] = [];
hw_c[27] = [];
hw_c[28] = [];
hw_c[29] = [];
*/

hw_c[0][0] = 	"Title" ;
hw_c[0][1] =  1;
hw_c[1][0] = 	"Intro" ;
hw_c[1][1] =  6;
hw_c[2][0] = 	"Alif" ;
hw_c[2][1] =  19;
hw_c[3][0] = 	"Ba" ;
hw_c[3][1] =  56;
hw_c[4][0] = 	"Ta" ;
hw_c[4][1] =  106;
hw_c[5][0] = 	"Tha" ;
hw_c[5][1] =  118;
hw_c[6][0] = 	"Jim" ;
hw_c[6][1] =  128;
hw_c[7][0] = 	"_Ha" ;
hw_c[7][1] =  169;
hw_c[8][0] = 	"Kha" ;
hw_c[8][1] =  242;
hw_c[9][0] = 	"Dal" ;
hw_c[9][1] =  287;
hw_c[10][0] = 	"Dhal" ;
hw_c[10][1] =  324;
hw_c[11][0] = 	"Ra" ;
hw_c[11][1] =  335;
hw_c[12][0] = 	"Za" ;
hw_c[12][1] =  390;
hw_c[13][0] = 	"Seen" ;
hw_c[13][1] =  409;
hw_c[14][0] = 	"Sheen" ;
hw_c[14][1] =  467;
hw_c[15][0] = 	"Saad" ;
hw_c[15][1] =  517;
hw_c[16][0] = 	"Dhaad" ;
hw_c[16][1] =  551;
hw_c[17][0] = 	"_Ta" ;
hw_c[17][1] =  568;
hw_c[18][0] = 	"Dha" ;
hw_c[18][1] =  598;
hw_c[19][0] = 	"Ain" ;
hw_c[19][1] =  603;
hw_c[20][0] = 	"Ghain" ;
hw_c[20][1] =  682;
hw_c[21][0] = 	"Fa" ;
hw_c[21][1] =  709;
hw_c[22][0] = 	"Qaf" ;
hw_c[22][1] =  754;
hw_c[23][0] = 	"Kaf" ;
hw_c[23][1] =  824;
hw_c[24][0] = 	"Lam" ;
hw_c[24][1] =  869;
hw_c[25][0] = 	"Mim" ;
hw_c[25][1] =  906;
hw_c[26][0] = 	"Nun" ;
hw_c[26][1] =  954;
hw_c[27][0] = 	"Ha" ;
hw_c[27][1] =  1033;
hw_c[28][0] = 	"Wow" ;
hw_c[28][1] =  1062;
hw_c[29][0] = 	"Ya" ;
hw_c[29][1] =  1122;

/*
	This data has been generously provided by:
	Ahmad Sheikh <ahmadzsheikh@gmail.com>
----
	Oct. 2012: Updating this index so that every header
describes the root the page *ends* with so the search algorithm can
finally be made consistent. A E Taal <ejtaal@gmail.com>
*/
var hw_p=[];

hw_p[1]="";
hw_p[2]="";
hw_p[3]="";
hw_p[4]="";
hw_p[5]="";
hw_p[6]="";
hw_p[7]="";
hw_p[8]="";
hw_p[9]="";
hw_p[10]="";
hw_p[11]="";
hw_p[12]="";
hw_p[13]="";
hw_p[14]="";
hw_p[15]="";
hw_p[16]="";
hw_p[17]="";
hw_p[18]="";
// And so it begins
hw_p[19]="ا";
hw_p[20]="ابيب";
hw_p[21]="اثر";
hw_p[22]="اثر";
hw_p[23]="اجر";
hw_p[24]="اخذ";
hw_p[25]="اخذ";
hw_p[26]="اخر";
hw_p[27]="ادب";
hw_p[28]="ادي";
hw_p[29]="اذن";
hw_p[30]="ارخن";
hw_p[31]="ارن";
hw_p[32]="ازى";
hw_p[33]="است";
hw_p[34]="اسف";
hw_p[35]="اسو";
hw_p[36]="اسفهان";
hw_p[37]="اطل";
hw_p[38]="افندى";
hw_p[39]="اكل";
hw_p[40]="الاي";
hw_p[41]="الف";
hw_p[42]="الومنيا";
hw_p[43]="ام";
hw_p[44]="امر";
hw_p[45]="امر";
hw_p[46]="امن";
hw_p[47]="انب";
hw_p[48]="انس";
hw_p[49]="انق";
hw_p[50]="اهل";
hw_p[51]="اوج";
hw_p[52]="اول";
hw_p[53]="اوم";
hw_p[54]="اي";
hw_p[55]="اين";
hw_p[56]="باذنجان";
hw_p[57]="باط";
hw_p[58]="بتع";
hw_p[59]="بح";
hw_p[60]="بحر";
hw_p[61]="بخل";
hw_p[62]="بدا";
hw_p[63]="بدع";
hw_p[64]="بدل";
hw_p[65]="بدو";
hw_p[66]="بذل";
hw_p[67]="برء";
hw_p[68]="برجل";
hw_p[69]="برد";
hw_p[70]="برش";
hw_p[71]="برق";
hw_p[72]="برم";
hw_p[73]="بره";
hw_p[74]="بز";
hw_p[75]="بسط";
hw_p[76]="بسل";
hw_p[77]="بشر";
hw_p[78]="بصر";
hw_p[79]="بضع";
hw_p[80]="بطح";
hw_p[81]="بطل";
hw_p[82]="بظر";
hw_p[83]="بعد";
hw_p[84]="بعد";
hw_p[85]="بغل";
hw_p[86]="بقل";
hw_p[87]="بكر";
hw_p[88]="بكم";
hw_p[89]="بلج";
hw_p[90]="بلطى";
hw_p[91]="بلغ";
hw_p[92]="بله";
hw_p[93]="بلو";
hw_p[94]="بنجاب";
hw_p[95]="بني";
hw_p[96]="بهدل";
hw_p[97]="بهم";
hw_p[98]="بوب";
hw_p[99]="بور";
hw_p[100]="بوغادة";
hw_p[101]="بول";
hw_p[102]="بيت";
hw_p[103]="بيض";
hw_p[104]="بيع";
hw_p[105]="بين";
hw_p[106]="تابوت";
hw_p[107]="تبع";
hw_p[108]="تبع";
hw_p[109]="تحت";
hw_p[110]="ترب";
hw_p[111]="ترك";
hw_p[112]="تعب";
hw_p[113]="تك";
hw_p[114]="تلمذ";
hw_p[115]="تم";
hw_p[116]="توب";
hw_p[117]="تير";
hw_p[118]="ثأر";
hw_p[119]="ثبت";
hw_p[120]="ثرو";
hw_p[121]="ثقب";
hw_p[122]="ثقل";
hw_p[123]="ثلج";
hw_p[124]="ثمل";
hw_p[125]="ثني";
hw_p[126]="ثوب";
hw_p[127]="ثيت";
hw_p[128]="جبر";
hw_p[129]="جبن";
hw_p[130]="جحر";
hw_p[131]="جد";
hw_p[132]="جدع";
hw_p[133]="جذب";
hw_p[134]="جذل";
hw_p[135]="جرء";
hw_p[136]="جرجر";
hw_p[137]="جرد";
hw_p[138]="جرف";
hw_p[139]="جري";
hw_p[140]="جز";
hw_p[141]="جزع";
hw_p[142]="جزى";
hw_p[143]="جسر";
hw_p[144]="جعب";
hw_p[145]="جف";
hw_p[146]="جل";
hw_p[147]="جلب";
hw_p[148]="جلس";
hw_p[149]="جلم";
hw_p[150]="جلى";
hw_p[151]="جمد";
hw_p[152]="جمع";
hw_p[153]="جمع";
hw_p[154]="جمع";
hw_p[155]="جمل";
hw_p[156]="جنب";
hw_p[157]="جنب";
hw_p[158]="جندفلى";
hw_p[159]="جني";
hw_p[160]="جهد";
hw_p[161]="جهز";
hw_p[162]="جو";
hw_p[163]="جوب";
hw_p[164]="جور";
hw_p[165]="جوز";
hw_p[166]="جوف";
hw_p[167]="جون";
hw_p[168]="جيش";
hw_p[169]="حب";
hw_p[170]="حبذ";
hw_p[171]="حبس";
hw_p[172]="حبل";
hw_p[173]="حث";
hw_p[174]="حجب";
hw_p[175]="حجر";
hw_p[176]="حجو";
hw_p[177]="حد";
hw_p[178]="حدب";
hw_p[179]="حدث";
hw_p[180]="حدس";
hw_p[181]="حذر";
hw_p[182]="حر";
hw_p[183]="حر";
hw_p[184]="حرج";
hw_p[185]="حرس";
hw_p[186]="حرف";
hw_p[187]="حرق";
hw_p[188]="حرك";
hw_p[189]="حرم";
hw_p[190]="حرى";
hw_p[191]="حزم";
hw_p[192]="حس";
hw_p[193]="حسب";
hw_p[194]="حصر";
hw_p[195]="حسن";
hw_p[196]="حسن";
hw_p[197]="حشم";
hw_p[198]="حصب";
hw_p[199]="حصر";
hw_p[200]="حصل";
hw_p[201]="حضر";
hw_p[202]="حضر";
hw_p[203]="حط";
hw_p[204]="حطم";
hw_p[205]="حف";
hw_p[206]="حفظ";
hw_p[207]="حفظ";
hw_p[208]="حفل";
hw_p[209]="حق";
hw_p[210]="حق";
hw_p[211]="حقر";
hw_p[212]="حك";
hw_p[213]="حكم";
hw_p[214]="حكم";
hw_p[215]="حكي";
hw_p[216]="حل";
hw_p[217]="حل";
hw_p[218]="حلب";
hw_p[219]="حلق";
hw_p[220]="حلم";
hw_p[221]="حم";
hw_p[222]="حمر";
hw_p[223]="حمض";
hw_p[224]="حمل";
hw_p[225]="حمل";
hw_p[226]="حمي";
hw_p[227]="حنث";
hw_p[228]="حنو";
hw_p[229]="حوج";
hw_p[230]="حور";
hw_p[231]="حوش";
hw_p[232]="حوط";
hw_p[233]="حول";
hw_p[234]="حول";
hw_p[235]="حول";
hw_p[236]="حول";
hw_p[237]="حي";
hw_p[238]="حي";
hw_p[239]="حيد";
hw_p[240]="حيف";
hw_p[241]="حيو";
hw_p[242]="خبث";
hw_p[243]="خبر";
hw_p[244]="خبو";
hw_p[245]="خثر";
hw_p[246]="خدر";
hw_p[247]="خدم";
hw_p[248]="خر";
hw_p[249]="خرج";
hw_p[250]="خرج";
hw_p[251]="خرج";
hw_p[252]="خرط";
hw_p[253]="خرق";
hw_p[254]="خزعبل";
hw_p[255]="خزن";
hw_p[256]="خسر";
hw_p[257]="خشع";
hw_p[258]="خص";
hw_p[259]="خص";
hw_p[260]="خصم";
hw_p[261]="خضر";
hw_p[262]="خط";
hw_p[263]="خطب";
hw_p[264]="خطر";
hw_p[265]="خطف";
hw_p[266]="خف";
hw_p[267]="خفت";
hw_p[268]="خفض";
hw_p[269]="خفي";
hw_p[270]="خل";
hw_p[271]="خلد";
hw_p[272]="خلص";
hw_p[273]="خلط";
hw_p[274]="خلع";
hw_p[275]="خلف";
hw_p[276]="خلق";
hw_p[277]="خلو";
hw_p[278]="خلو";
hw_p[279]="خمر";
hw_p[280]="خمن";
hw_p[281]="خنق";
hw_p[282]="خوص";
hw_p[283]="خون";
hw_p[284]="خير";
hw_p[285]="خيط";
hw_p[286]="خيل";
hw_p[287]="دب";
hw_p[288]="دبر";
hw_p[289]="دج";
hw_p[290]="دحض";
hw_p[291]="دخل";
hw_p[292]="دخمس";
hw_p[293]="درب";
hw_p[294]="درج";
hw_p[295]="درد";
hw_p[296]="درع";
hw_p[297]="درك";
hw_p[298]="دس";
hw_p[299]="دعب";
hw_p[300]="دعي";
hw_p[301]="دعو";
hw_p[302]="دفء";
hw_p[303]="دفع";
hw_p[304]="دفق";
hw_p[305]="دق";
hw_p[306]="دكتور";
hw_p[307]="دل";
hw_p[308]="دله";
hw_p[309]="دمج";
hw_p[310]="دمع";
hw_p[311]="دن";
hw_p[312]="دنو";
hw_p[313]="دهش";
hw_p[314]="دهن";
hw_p[315]="دود";
hw_p[316]="دور";
hw_p[317]="دور";
hw_p[318]="دور";
hw_p[319]="دوغ";
hw_p[320]="دول";
hw_p[321]="دون";
hw_p[322]="ديج";
hw_p[323]="دين";
hw_p[324]="ذا";
hw_p[325]="ذبل";
hw_p[326]="ذرع";
hw_p[327]="ذقن";
hw_p[328]="ذكر";
hw_p[329]="ذل";
hw_p[330]="ذنب";
hw_p[331]="ذهب";
hw_p[332]="ذو";
hw_p[333]="ذوق";
hw_p[334]="ذيل";
hw_p[335]="رءس";
hw_p[336]="رءف";
hw_p[337]="رءي";
hw_p[338]="رب";
hw_p[339]="ربط";
hw_p[340]="ربع";
hw_p[341]="ربك";
hw_p[342]="رتب";
hw_p[343]="رتم";
hw_p[344]="رجح";
hw_p[345]="رجع";
hw_p[346]="رجع";
hw_p[347]="رجن";
hw_p[348]="رحب";
hw_p[349]="رحم";
hw_p[350]="رخم";
hw_p[351]="رد";
hw_p[352]="ردء";
hw_p[353]="ردي";
hw_p[354]="رزق";
hw_p[355]="رسر";
hw_p[356]="رسل";
hw_p[357]="رسم";
hw_p[358]="رشح";
hw_p[359]="رشد";
hw_p[360]="رصد";
hw_p[361]="رضر";
hw_p[362]="رضي";
hw_p[363]="رعص";
hw_p[364]="رعي";
hw_p[365]="رغم";
hw_p[366]="رفد";
hw_p[367]="رفع";
hw_p[368]="رفع";
hw_p[369]="رفه";
hw_p[370]="رقب";
hw_p[371]="رقد";
hw_p[372]="رقم";
hw_p[373]="رك";
hw_p[374]="ركب";
hw_p[375]="ركز";
hw_p[376]="ركن";
hw_p[377]="رمز";
hw_p[378]="رمي";
hw_p[379]="رنق";
hw_p[380]="رهل";
hw_p[381]="روب";
hw_p[382]="روح";
hw_p[383]="روح";
hw_p[384]="رود";
hw_p[385]="روع";
hw_p[386]="روق";
hw_p[387]="روي";
hw_p[388]="ريح";
hw_p[389]="ريم";
hw_p[390]="زبر";
hw_p[391]="زجل";
hw_p[392]="زحم";
hw_p[393]="زرع";
hw_p[394]="زعبوط";
hw_p[395]="زعم";
hw_p[396]="زفر";
hw_p[397]="زكو";
hw_p[398]="زلق";
hw_p[399]="زمز";
hw_p[400]="زنجبار";
hw_p[401]="زهد";
hw_p[402]="زهو";
hw_p[403]="زود";
hw_p[404]="زول";
hw_p[405]="زي";
hw_p[406]="زيد";
hw_p[407]="زير";
hw_p[408]="زينكو";
hw_p[409]="سءم";
hw_p[410]="سبت";
hw_p[411]="سبر";
hw_p[412]="سبق";
hw_p[413]="سبق";
hw_p[414]="ست";
hw_p[415]="سجد";
hw_p[416]="سجم";
hw_p[417]="سحج";
hw_p[418]="سحل";
hw_p[419]="سخف";
hw_p[420]="سد";
hw_p[421]="سدل";
hw_p[422]="سر";
hw_p[423]="سرب";
hw_p[424]="سرح";
hw_p[425]="سرع";
hw_p[426]="سروال";
hw_p[427]="سطر";
hw_p[428]="سعد";
hw_p[429]="سعل";
hw_p[430]="سفر";
hw_p[431]="سفل";
hw_p[432]="سقط";
hw_p[433]="سقل";
hw_p[434]="سكب";
hw_p[435]="سكر";
hw_p[436]="سكن";
hw_p[437]="سل";
hw_p[438]="سلح";
hw_p[439]="سلس";
hw_p[440]="سلف";
hw_p[441]="سلك";
hw_p[442]="سلم";
hw_p[443]="سلم";
hw_p[444]="سلو";
hw_p[445]="سم";
hw_p[446]="سمد";
hw_p[447]="سمس";
hw_p[448]="سمع";
hw_p[449]="سمن";
hw_p[450]="سمي";
hw_p[451]="سنا";
hw_p[452]="سند";
hw_p[453]="سنط";
hw_p[454]="سهد";
hw_p[455]="سهل";
hw_p[456]="سوء";
hw_p[457]="سوخ";
hw_p[458]="سويد";
hw_p[459]="سوع";
hw_p[460]="سوق";
hw_p[461]="سوك";
hw_p[462]="سوي";
hw_p[463]="سيا";
hw_p[464]="سير";
hw_p[465]="سيس";
hw_p[466]="سينا";
hw_p[467]="شءن";
hw_p[468]="شاهين";
hw_p[469]="شبر";
hw_p[470]="شبك";
hw_p[471]="شبه";
hw_p[472]="شت";
hw_p[473]="شجر";
hw_p[474]="شح";
hw_p[475]="شحن";
hw_p[476]="شخص";
hw_p[477]="شد";
hw_p[478]="شدق";
hw_p[479]="شر";
hw_p[480]="شرب";
hw_p[481]="شرد";
hw_p[482]="شرط";
hw_p[483]="شرع";
hw_p[484]="شرف";
hw_p[485]="شرق";
hw_p[486]="شرك";
hw_p[487]="شرو";
hw_p[488]="شط";
hw_p[489]="شطف";
hw_p[490]="شعب";
hw_p[491]="شعر";
hw_p[492]="شعل";
hw_p[493]="شغل";
hw_p[494]="شغل";
hw_p[495]="شفر";
hw_p[496]="شفق";
hw_p[497]="شق";
hw_p[498]="شقذف";
hw_p[499]="شك";
hw_p[500]="شكل";
hw_p[501]="شكو";
hw_p[502]="شم";
hw_p[503]="شمر";
hw_p[504]="شمق";
hw_p[505]="شنج";
hw_p[506]="شهد";
hw_p[507]="شهد";
hw_p[508]="شهق";
hw_p[509]="شوب";
hw_p[510]="شور";
hw_p[511]="شوق";
hw_p[512]="شولم";
hw_p[513]="شيء";
hw_p[514]="شيخ";
hw_p[515]="شيع";
hw_p[516]="شيم";
hw_p[517]="صب";
hw_p[518]="صبح";
hw_p[519]="صبع";
hw_p[520]="صبو";
hw_p[521]="صحب";
hw_p[522]="صحر";
hw_p[523]="صخب";
hw_p[524]="صدر";
hw_p[525]="صدر";
hw_p[526]="صدق";
hw_p[527]="صدق";
hw_p[528]="صرح";
hw_p[529]="صرع";
hw_p[530]="صرف";
hw_p[531]="صرف";
hw_p[532]="صعد";
hw_p[533]="صغر";
hw_p[534]="صف";
hw_p[535]="صفر";
hw_p[536]="صفك";
hw_p[537]="صفو";
hw_p[538]="صل";
hw_p[539]="صلح";
hw_p[540]="صلح";
hw_p[541]="صلف";
hw_p[542]="صم";
hw_p[543]="صنا";
hw_p[544]="صنع";
hw_p[545]="صهر";
hw_p[546]="صوب";
hw_p[547]="صور";
hw_p[548]="صوغ";
hw_p[549]="صون";
hw_p[550]="صير";
hw_p[551]="ضأل";
hw_p[552]="ضبط";
hw_p[553]="ضحك";
hw_p[554]="ضحي";
hw_p[555]="ضر";
hw_p[556]="ضرب";
hw_p[557]="ضرب";
hw_p[558]="ضرس";
hw_p[559]="ضعف";
hw_p[560]="ضغط";
hw_p[561]="ضلع";
hw_p[562]="ضم";
hw_p[563]="ضمن";
hw_p[564]="ضهي";
hw_p[565]="ضيع";
hw_p[566]="ضيق";
hw_p[567]="ضيم";
hw_p[568]="طب";
hw_p[569]="طبع";
hw_p[570]="طبق";
hw_p[571]="طبن";
hw_p[572]="طرأ";
hw_p[573]="طرح";
hw_p[574]="طرد";
hw_p[575]="طرف";
hw_p[576]="طرق";
hw_p[577]="طرو";
hw_p[578]="طعن";
hw_p[579]="طفأ";
hw_p[580]="طفو";
hw_p[581]="طلب";
hw_p[582]="طلع";
hw_p[583]="طلع";
hw_p[584]="طلق";
hw_p[585]="طلم";
hw_p[586]="طمح";
hw_p[587]="طمن";
hw_p[588]="طهر";
hw_p[589]="طود";
hw_p[590]="طوع";
hw_p[591]="طوف";
hw_p[592]="طوق";
hw_p[593]="طول";
hw_p[594]="طوي";
hw_p[595]="طيب";
hw_p[596]="طير";
hw_p[597]="طيش";
hw_p[598]="ظرف";
hw_p[599]="ظل";
hw_p[600]="ظلم";
hw_p[601]="ظهر";
hw_p[602]="ظهر";
hw_p[603]="عبأ";
hw_p[604]="عبأ";
hw_p[605]="عبر";
hw_p[606]="عبر";
hw_p[607]="عتك";
hw_p[608]="عتل";
hw_p[609]="عجر";
hw_p[610]="عجر";
hw_p[611]="عجم";
hw_p[612]="عجم";
hw_p[613]="عدس";
hw_p[614]="عدل";
hw_p[615]="عدم";
hw_p[616]="عدن";
hw_p[617]="عذب";
hw_p[618]="عذب";
hw_p[619]="عرب";
hw_p[620]="عرب";
hw_p[621]="عرض";
hw_p[622]="عرض";
hw_p[623]="عرف";
hw_p[624]="عرف";
hw_p[625]="عرق";
hw_p[626]="عرق";
hw_p[627]="عز";
hw_p[628]="عز";
hw_p[629]="عزو";
hw_p[630]="عزو";
hw_p[631]="عش";
hw_p[632]="عشب";
hw_p[633]="عصب";
hw_p[634]="عصب";
hw_p[635]="عصو";
hw_p[636]="عصو";
hw_p[637]="عطر";
hw_p[638]="عطر";
hw_p[639]="عطل";
hw_p[640]="عطل";
hw_p[641]="عظم";
hw_p[642]="عظم";
hw_p[643]="عق";
hw_p[644]="عق";
hw_p[645]="عقد";
hw_p[646]="عقد";
hw_p[647]="عقف";
hw_p[648]="عقل";
hw_p[649]="عكس";
hw_p[650]="عكس";
hw_p[651]="علف";
hw_p[652]="علف";
hw_p[653]="علم";
hw_p[654]="علم";
hw_p[655]="علو";
hw_p[656]="علو";
hw_p[657]="علو";
hw_p[658]="علو";
hw_p[659]="عمد";
hw_p[660]="عمد";
hw_p[661]="عمر";
hw_p[662]="عمر";
hw_p[663]="عمل";
hw_p[664]="عمل";
hw_p[665]="عنب";
hw_p[666]="عنت";
hw_p[667]="عنق";
hw_p[668]="عنق";
hw_p[669]="عهد";
hw_p[670]="عهد";
hw_p[671]="عود";
hw_p[672]="عود";
hw_p[673]="عوذ";
hw_p[674]="عوذ";
hw_p[675]="عوق";
hw_p[676]="عوق";
hw_p[677]="عي";
hw_p[678]="عي";
hw_p[679]="عيش";
hw_p[680]="عيش";
hw_p[681]="عين";
hw_p[682]="غاب";
hw_p[683]="غجر";
hw_p[684]="غد";
hw_p[685]="غر";
hw_p[686]="غر";
hw_p[687]="غرز";
hw_p[688]="غرس";
hw_p[689]="غرن";
hw_p[690]="غرو";
hw_p[691]="غسل";
hw_p[692]="غش";
hw_p[693]="غض";
hw_p[694]="غض";
hw_p[695]="غفر";
hw_p[696]="غفر";
hw_p[697]="غل";
hw_p[698]="غلب";
hw_p[699]="غلف";
hw_p[700]="غلف";
hw_p[701]="غمر";
hw_p[702]="غمر";
hw_p[703]="غند";
hw_p[704]="غند";
hw_p[705]="غور";
hw_p[706]="غوز";
hw_p[707]="غيب";
hw_p[708]="غيب";
hw_p[709]="فأت";
hw_p[710]="فأت";
hw_p[711]="فتح";
hw_p[712]="فتح";
hw_p[713]="فتن";
hw_p[714]="فتن";
hw_p[715]="فجع";
hw_p[716]="فجع";
hw_p[717]="فخر";
hw_p[718]="فخر";
hw_p[719]="فرت";
hw_p[720]="فرت";
hw_p[721]="فرد";
hw_p[722]="فرد";
hw_p[723]="فرض";
hw_p[724]="فرض";
hw_p[725]="فرغ";
hw_p[726]="فرغ";
hw_p[727]="فرق";
hw_p[728]="فرق";
hw_p[729]="فسح";
hw_p[730]="فسح";
hw_p[731]="فسل";
hw_p[732]="فسو";
hw_p[733]="فصل";
hw_p[734]="فصل";
hw_p[735]="فضل";
hw_p[736]="فضل";
hw_p[737]="فطر";
hw_p[738]="فطر";
hw_p[739]="فعل";
hw_p[740]="فعم";
hw_p[741]="فك";
hw_p[742]="فك";
hw_p[743]="فلت";
hw_p[744]="فلت";
hw_p[745]="فلو";
hw_p[746]="فلو";
hw_p[747]="فهد";
hw_p[748]="فهر";
hw_p[749]="فور";
hw_p[750]="فور";
hw_p[751]="فوه";
hw_p[752]="فوه";
hw_p[753]="فيك";
hw_p[754]="فيل";
hw_p[755]="قبح";
hw_p[756]="قبح";
hw_p[757]="قبل";
hw_p[758]="قبل";
hw_p[759]="قبل";
hw_p[760]="قبل";
hw_p[761]="قحط";
hw_p[762]="قحط";
hw_p[763]="قدر";
hw_p[764]="قدر";
hw_p[765]="قدم";
hw_p[766]="قدم";
hw_p[767]="قدم";
hw_p[768]="قدم";
hw_p[769]="قر";
hw_p[770]="قر";
hw_p[771]="قرب";
hw_p[772]="قرب";
hw_p[773]="قرح";
hw_p[774]="قرح";
hw_p[775]="قرع";
hw_p[776]="قرع";
hw_p[777]="قرن";
hw_p[778]="قرن";
hw_p[779]="قزو";
hw_p[780]="قس";
hw_p[781]="قسو";
hw_p[782]="قسو";
hw_p[783]="قص";
hw_p[784]="قص";
hw_p[785]="قصر";
hw_p[786]="قصر";
hw_p[787]="قصم";
hw_p[788]="قصم";
hw_p[789]="قضى";
hw_p[790]="قضى";
hw_p[791]="قطر";
hw_p[792]="قطر";
hw_p[793]="قطع";
hw_p[794]="قطع";
hw_p[795]="قطع";
hw_p[796]="قطع";
hw_p[797]="قعد";
hw_p[798]="قعد";
hw_p[799]="قفع";
hw_p[800]="قفق";
hw_p[801]="قلا";
hw_p[802]="قلب";
hw_p[803]="قلب";
hw_p[804]="قلب";
hw_p[805]="قلق";
hw_p[806]="قلق";
hw_p[807]="قمر";
hw_p[808]="قمر";
hw_p[809]="قنب";
hw_p[810]="قنب";
hw_p[811]="قنم";
hw_p[812]="قنو";
hw_p[813]="قود";
hw_p[814]="قود";
hw_p[815]="قول";
hw_p[816]="قول";
hw_p[817]="قوم";
hw_p[818]="قوم";
hw_p[819]="قوم";
hw_p[820]="قوم";
hw_p[821]="قيد";
hw_p[822]="قيد";
hw_p[823]="قيض";
hw_p[824]="قيض";
hw_p[825]="كار";
hw_p[826]="كار";
hw_p[827]="كبر";
hw_p[828]="كبر";
hw_p[829]="كبش";
hw_p[830]="كبك";
hw_p[831]="كتب";
hw_p[832]="كتب";
hw_p[833]="كثر";
hw_p[834]="كثر";
hw_p[835]="كدس";
hw_p[836]="كدش";
hw_p[837]="كرج";
hw_p[838]="كرح";
hw_p[839]="كرم";
hw_p[840]="كرم";
hw_p[841]="كرو";
hw_p[842]="كرو";
hw_p[843]="كسح";
hw_p[844]="كسح";
hw_p[845]="كسم";
hw_p[846]="كسم";
hw_p[847]="كشف";
hw_p[848]="كشف";
hw_p[849]="كف";
hw_p[850]="كف";
hw_p[851]="كفل";
hw_p[852]="كفل";
hw_p[853]="كلأ";
hw_p[854]="كلأ";
hw_p[855]="كلك";
hw_p[856]="كلك";
hw_p[857]="كمد";
hw_p[858]="كمد";
hw_p[859]="كن";
hw_p[860]="كن";
hw_p[861]="كهر";
hw_p[862]="كهر";
hw_p[863]="كور";
hw_p[864]="كور";
hw_p[865]="كون";
hw_p[866]="كون";
hw_p[867]="كيف";
hw_p[868]="كيف";
hw_p[869]="لا";
hw_p[870]="لا";
hw_p[871]="لاى";
hw_p[872]="لب";
hw_p[873]="لبس";
hw_p[874]="لبس";
hw_p[875]="لج";
hw_p[876]="لج";
hw_p[877]="لحظ";
hw_p[878]="لحظ";
hw_p[879]="لحن";
hw_p[880]="لحن";
hw_p[881]="لذى";
hw_p[882]="لز";
hw_p[883]="لزم";
hw_p[884]="لزم";
hw_p[885]="لطف";
hw_p[886]="لطف";
hw_p[887]="لعل";
hw_p[888]="لعل";
hw_p[889]="لف";
hw_p[890]="لف";
hw_p[891]="لقب";
hw_p[892]="لقح";
hw_p[893]="لقي";
hw_p[894]="لقي";
hw_p[895]="لم";
hw_p[896]="لم";
hw_p[897]="لهب";
hw_p[898]="لهب";
hw_p[899]="لو";
hw_p[900]="لوب";
hw_p[901]="لوك";
hw_p[902]="لوك";
hw_p[903]="ليب";
hw_p[904]="ليب";
hw_p[905]="لين";
hw_p[906]="م";
hw_p[907]="مت";
hw_p[908]="مت";
hw_p[909]="مثل";
hw_p[910]="مثل";
hw_p[911]="مجر";
hw_p[912]="مجر";
hw_p[913]="محو";
hw_p[914]="مخ";
hw_p[915]="مد";
hw_p[916]="مد";
hw_p[917]="مذق";
hw_p[918]="مذق";
hw_p[919]="مرأ";
hw_p[920]="مرأ";
hw_p[921]="مرض";
hw_p[922]="مرض";
hw_p[923]="مزج";
hw_p[924]="مزج";
hw_p[925]="مسح";
hw_p[926]="مسح";
hw_p[927]="مسو";
hw_p[928]="مسو";
hw_p[929]="مصر";
hw_p[930]="مصر";
hw_p[931]="مطر";
hw_p[932]="مطر";
hw_p[933]="معن";
hw_p[934]="معن";
hw_p[935]="مكن";
hw_p[936]="مكن";
hw_p[937]="ملأ";
hw_p[938]="ملأ";
hw_p[939]="ملك";
hw_p[940]="ملك";
hw_p[941]="ملو";
hw_p[942]="ملو";
hw_p[943]="من";
hw_p[944]="منت";
hw_p[945]="منو";
hw_p[946]="منو";
hw_p[947]="مهن";
hw_p[948]="مهن";
hw_p[949]="مول";
hw_p[950]="مول";
hw_p[951]="ميز";
hw_p[952]="ميز";
hw_p[953]="ميل";
hw_p[954]="ميل";
hw_p[955]="نبت";
hw_p[956]="نبت";
hw_p[957]="نبع";
hw_p[958]="نبع";
hw_p[959]="نتأ";
hw_p[960]="نتج";
hw_p[961]="نجد";
hw_p[962]="نجد";
hw_p[963]="نجم";
hw_p[964]="نجو";
hw_p[965]="نحل";
hw_p[966]="نحل";
hw_p[967]="نخل";
hw_p[968]="نخل";
hw_p[969]="ندف";
hw_p[970]="ندف";
hw_p[971]="نرب";
hw_p[972]="نرب";
hw_p[973]="نزف";
hw_p[974]="نزق";
hw_p[975]="نزل";
hw_p[976]="نزل";
hw_p[977]="نسب";
hw_p[978]="نسب";
hw_p[979]="نسف";
hw_p[980]="نسف";
hw_p[981]="نشأ";
hw_p[982]="نشأ";
hw_p[983]="نشر";
hw_p[984]="نشر";
hw_p[985]="نشو";
hw_p[986]="نص";
hw_p[987]="نصح";
hw_p[988]="نصح";
hw_p[989]="نصى";
hw_p[990]="نض";
hw_p[991]="نطس";
hw_p[992]="نطس";
hw_p[993]="نظر";
hw_p[994]="نظر";
hw_p[995]="نظم";
hw_p[996]="نظم";
hw_p[997]="نعل";
hw_p[998]="نعم";
hw_p[999]="نفث";
hw_p[1000]="نفث";
hw_p[1001]="نفذ";
hw_p[1002]="نفذ";
hw_p[1003]="نفس";
hw_p[1004]="نفس";
hw_p[1005]="نفق";
hw_p[1006]="نفق";
hw_p[1007]="نقح";
hw_p[1008]="نقد";
hw_p[1009]="نقص";
hw_p[1010]="نقص";
hw_p[1011]="نقع";
hw_p[1012]="نقع";
hw_p[1013]="نقل";
hw_p[1014]="نقل";
hw_p[1015]="نكد";
hw_p[1016]="نكد";
hw_p[1017]="نكل";
hw_p[1018]="نكل";
hw_p[1019]="نمى";
hw_p[1020]="نمى";
hw_p[1021]="نهض";
hw_p[1022]="نهض";
hw_p[1023]="نهو";
hw_p[1024]="نهو";
hw_p[1025]="نوب";
hw_p[1026]="نوب";
hw_p[1027]="نور";
hw_p[1028]="نور";
hw_p[1029]="نول";
hw_p[1030]="نول";
hw_p[1031]="نوى";
hw_p[1032]="نوى";
hw_p[1033]="هاو";
hw_p[1034]="هاي";
hw_p[1035]="هتر";
hw_p[1036]="هتر";
hw_p[1037]="هجع";
hw_p[1038]="هجل";
hw_p[1039]="هدب";
hw_p[1040]="هدب";
hw_p[1041]="هدى";
hw_p[1042]="هدى";
hw_p[1043]="هرش";
hw_p[1044]="هرش";
hw_p[1045]="هزل";
hw_p[1046]="هزل";
hw_p[1047]="هفه";
hw_p[1048]="هفه";
hw_p[1049]="هلك";
hw_p[1050]="هلك";
hw_p[1051]="همد";
hw_p[1052]="همد";
hw_p[1053]="هند";
hw_p[1054]="هند";
hw_p[1055]="هوس";
hw_p[1056]="هوس";
hw_p[1057]="هون";
hw_p[1058]="هون";
hw_p[1059]="هيب";
hw_p[1060]="هيب";
hw_p[1061]="هيم";
hw_p[1062]="هيم";
hw_p[1063]="وبر";
hw_p[1064]="وبر";
hw_p[1065]="وثق";
hw_p[1066]="وثق";
hw_p[1067]="وجد";
hw_p[1068]="وجد";
hw_p[1069]="وجه";
hw_p[1070]="وجه";
hw_p[1071]="وجه";
hw_p[1072]="وجه";
hw_p[1073]="وحش";
hw_p[1074]="وحش";
hw_p[1075]="ود";
hw_p[1076]="ود";
hw_p[1077]="ورب";
hw_p[1078]="ورب";
hw_p[1079]="ورط";
hw_p[1080]="ورط";
hw_p[1081]="وزر";
hw_p[1082]="وزر";
hw_p[1083]="وزن";
hw_p[1084]="وزن";
hw_p[1085]="وسع";
hw_p[1086]="وسع";
hw_p[1087]="وسم";
hw_p[1088]="وسم";
hw_p[1089]="وشى";
hw_p[1090]="وصب";
hw_p[1091]="وصل";
hw_p[1092]="وصل";
hw_p[1093]="وضء";
hw_p[1094]="وضء";
hw_p[1095]="وضع";
hw_p[1096]="وضع";
hw_p[1097]="وطن";
hw_p[1098]="وطن";
hw_p[1099]="وعر";
hw_p[1100]="وعز";
hw_p[1101]="وفر";
hw_p[1102]="وفر";
hw_p[1103]="وفق";
hw_p[1104]="وفق";
hw_p[1105]="وقت";
hw_p[1106]="وقت";
hw_p[1107]="وقع";
hw_p[1108]="وقع";
hw_p[1109]="وقف";
hw_p[1110]="وقف";
hw_p[1111]="وقف";
hw_p[1112]="وقف";
hw_p[1113]="وكع";
hw_p[1114]="وكف";
hw_p[1115]="ولد";
hw_p[1116]="ولد";
hw_p[1117]="ولى";
hw_p[1118]="ولى";
hw_p[1119]="ومض";
hw_p[1120]="ومض";
hw_p[1121]="وهم";
hw_p[1122]="وهم";
hw_p[1123]="يد";
hw_p[1124]="يد";
hw_p[1125]="يسق";
hw_p[1126]="يسم";
hw_p[1127]="يوح";
hw_p[1128]="يود";
