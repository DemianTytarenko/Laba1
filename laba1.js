function calculate() {
			const start = document.getElementById("start").value;
			const end = document.getElementById("end").value;
			const func = document.getElementById("function").value;
			const url = `https://newton.vercel.app/api/v2/area/${start}:${end}|${encodeURIComponent(func)}`;

			fetch(url)
				.then(response => response.json())
				.then(data => {
					const result = document.getElementById("result");
					result.innerHTML = `Площа під кривою: ${data.result}`;
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}