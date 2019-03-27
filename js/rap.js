function sound()
{
	// 対象となるID名
	var sound = 'sound';
	var video = 'bg-video';
	// 初回以外だったら音声ファイルを巻き戻す
	if(typeof(document.getElementById(sound).currentTime ) != 'undefined')
	{
		document.getElementById(sound).currentTime = 0;
	}
	if(typeof(document.getElementById(video).currentTime ) != 'undefined')
	{
		document.getElementById(video).currentTime = 0;
	}

	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById(sound).play();
	document.getElementById(video).play();
}

function stop()
{
	document.getElementById('sound').pause();
	document.getElementById('bg-video').pause();
}
