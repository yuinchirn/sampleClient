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
musicMark.style.height = '200px';
musicMark.style.width = '200px';

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
	adAreaParent.insertBefore(banner,adArea);

	ga('send', 'event',  'click', 'musicMark', 'musicMark');
} , false );

adAreaParent.insertBefore(musicMark,adArea);
};
})();


