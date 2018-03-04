var para = document.getElementById('para');
var button = document.getElementById('breathing_button');
		function pressed() {
			button.style.display = "none";
		}
		function changeColor(newColor) {
			para.style.color = newColor;
		}

		function changeBackground(newColor) {
			document.body.style.background = newColor;
		}

		function i3() {
			changeBackground('green');
			document.getElementById('para').innerHTML = 'inhale for 3';
			setTimeout(i2, 1000);
		}

		function i2() {
			changeBackground('limeGreen');
			document.getElementById('para').innerHTML = 'inhale for 2';
			setTimeout(i1, 1000);
		}

		function i1() {
			changeBackground('springGreen');
			document.getElementById('para').innerHTML = 'inhale for 1';
			setTimeout(h7, 1000);
		}

		function h7() {
			changeBackground('#00cccc');
			document.getElementById('para').innerHTML = 'hold for 7';
			setTimeout(h6, 1000);
		}

		function h6() {
			changeBackground('#00b3b3');
			document.getElementById('para').innerHTML = 'hold for 6';
			setTimeout(h5, 1000);
		}

		function h5() {
			changeBackground('#008080');
			document.getElementById('para').innerHTML = 'hold for 5';
			setTimeout(h4, 1000);
		}

		function h4() {
			changeBackground('#006666');
			document.getElementById('para').innerHTML = 'hold for 4';
			setTimeout(h3, 1000);
		}

		function h3() {
			changeBackground('#004d4d');
			document.getElementById('para').innerHTML = 'hold for 3';
			setTimeout(h2, 1000);
		}

		function h2() {
			changeBackground('#003333');
			document.getElementById('para').innerHTML = 'hold for 2';
			setTimeout(h1, 1000);
		}

		function h1() {
			changeBackground('#00134d');
			document.getElementById('para').innerHTML = 'hold for 1';
			setTimeout(e8, 1000);
		}

		function e8() {
			changeBackground('#400080');
			document.getElementById('para').innerHTML = 'exhale for 8';
			setTimeout(e7, 1000);
		}

		function e7() {
			changeBackground('#6600cc');
			document.getElementById('para').innerHTML = 'exhale for 7';
			setTimeout(e6, 1000);
		}

		function e6() {
			changeBackground('#8000ff');
			document.getElementById('para').innerHTML = 'exhale for 6';
			setTimeout(e5, 1000);
		}

		function e5() {
			changeBackground('#8c1aff');
			document.getElementById('para').innerHTML = 'exhale for 5';
			setTimeout(e4, 1000);
		}

		function e4() {
			changeBackground('#a64dff');
			document.getElementById('para').innerHTML = 'exhale for 4';
			setTimeout(e3, 1000);
		}

		function e3() {
			changeBackground('#bf80ff');
			document.getElementById('para').innerHTML = 'exhale for 3';
			setTimeout(e2, 1000);
		}

		function e2() {
			changeBackground('#cc99ff');
			document.getElementById('para').innerHTML = 'exhale for 2';
			setTimeout(e1, 1000);
		}

		function e1() {
			changeBackground('#d9b3ff');
			document.getElementById('para').innerHTML = 'exhale for 1';
			setTimeout(done, 1000);
		}

		function done() {
			changeColor('black')
			changeBackground('white');
			document.getElementById('para').innerHTML = 'finished!';
		}
