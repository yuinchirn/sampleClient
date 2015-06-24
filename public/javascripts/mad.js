(function(){

window.onload = function(){

// 挿入したjsタグ
var adArea = document.getElementById('mad_js');
var adAreaParent = document.getElementById('mad_js').parentNode;

/* 音符マーク */
var musicMark = document.createElement('img');
musicMark.id = 'musicMark';
musicMark.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/images.png';
musicMark.style.position = 'relative';
musicMark.style.marginLeft = 'auto';
musicMark.style.marginRight = 'auto';
musicMark.style.height = '100px';
musicMark.style.width = '100px';

// 広告音用のaudioタグを用意
var audio = document.createElement('audio');
audio.id = 'audio';
audio.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/rock_long_bgm.mp3';
// 再生終了時の処理
// audio.addEventListener('ended', function(){});
adAreaParent.insertBefore(audio,adArea);

musicMark.addEventListener( "click" , function () {

	// 音符マーク削除
	adAreaParent.removeChild(musicMark);

	// 広告音再生
	document.getElementById('audio').play();

	// バナー表示
  	var banner = document.createElement('a');
	banner.id = 'banner';
	banner.href = 'http://rijfes.jp/';
	banner.onclick = ga('send', 'event',  'click', 'banner', 'banner');
	var bannerImg = document.createElement('img');
	bannerImg.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/live_img.jpg'
	bannerImg.style.position = 'relative';
	bannerImg.style.marginLeft = 'auto';
	bannerImg.style.marginRight = 'auto';
	bannerImg.style.height = '200px';
	bannerImg.style.width = '300px';

	banner.appendChild(bannerImg);
	var list1 = document.createElement('li');
	list1.style.listStyle = 'none';
	list1.appendChild(banner);
	adAreaParent.insertBefore(list1,adArea);

	var stopBtn = document.createElement('img');
	stopBtn.src = 'https://s3-ap-northeast-1.amazonaws.com/mad-test/stop.jpg'
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
	adAreaParent.insertBefore(list2,adArea);

	ga('send', 'event',  'click', 'musicMark', 'musicMark');
} , false );

adAreaParent.insertBefore(musicMark,adArea);
};
})();


