document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var x = parseInt(document.getElementById('number').value);
    var n = x - 12 + 6;
    document.getElementById('result').textContent = "小学" + n + "年生";
});
