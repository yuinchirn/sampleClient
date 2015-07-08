(function(){

window.onload = function(){

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-64743938-1', 'auto', {'name': 'mad'});

// 挿入したjsタグ
var adJs = document.getElementById('mad_js');
var adJsParent = document.getElementById('mad_js').parentNode;

// 広告枠全体を囲うdiv
var adArea = document.createElement('div');
adArea.style.width = '100%';

// 広告枠素材を内包するdiv
var adContent = document.createElement('div');
adContent.style.width = '200px';
adContent.style.margin = '0 auto';
adArea.appendChild(adContent);

// 広告音用のaudioタグを用意
var audio = document.createElement('audio');
audio.id = 'audio';
audio.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/rock_long_bgm.mp3';
adContent.appendChild(audio);

// 音符マーク
var musicMark = document.createElement('img');
musicMark.id = 'musicMark';
musicMark.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/images.png';
musicMark.style.height = '170px';
musicMark.style.width = '170px';
musicMark.addEventListener( "click" , function () {

	// 音符マーク削除
	adContent.removeChild(musicMark);

	// 広告音再生
	document.getElementById('audio').play();

	// バナー表示
  	var banner = document.createElement('a');
	banner.id = 'banner';
	banner.href = 'http://rijfes.jp/';
	banner.onclick = ga('mad.send', 'event',  'click', 'banner', 'merry');
	var bannerImg = document.createElement('img');
	bannerImg.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/live_img.jpg'
	bannerImg.style.height = '200px';
	bannerImg.style.width = '300px';
	banner.appendChild(bannerImg);

	var list1 = document.createElement('li');
	list1.style.listStyle = 'none';
	list1.appendChild(banner);
	adContent.style.width = '300px';
	adContent.appendChild(list1);

	// 停止ボタン
	var stopBtn = document.createElement('img');
	stopBtn.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/stop.jpg';
	stopBtn.style.position = 'relative';
	stopBtn.style.marginLeft = 'auto';
	stopBtn.style.marginRight = 'auto';
	stopBtn.style.height = '30px';
	stopBtn.style.width = '30px';
	stopBtn.addEventListener( "click" , function () {
		document.getElementById('audio').pause();
	});

	var list2 = document.createElement('li');
	list2.style.listStyle = 'none';
	list2.appendChild(stopBtn);
	adContent.appendChild(list2);
	
	ga('mad.send', 'event', 'click', 'musicMark', 'merry');
} , false );

adContent.appendChild(musicMark);
adJsParent.insertBefore(adArea,adJs);

};
})();


