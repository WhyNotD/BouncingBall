window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 800
    canvas.width = 800

    const circle = {
        x: 200,
        y: 200,
        size: 20,
        /*speed x */
        dx: 3,
        /*speed y */
        dy: 4
    };

    function drawCircle() {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();

    };

    function update() {

        ctx.clearRect(0, 0, canvas.height, canvas.width);
        drawCircle();


        /*Change position */
        circle.x += circle.dx;
        circle.y += circle.dy;

        /*Detect side walls X */

        if (circle.x + circle.size > canvas.width || circle.x + circle.size < 40) {

            circle.dx *= -1;

        };

        /*Detect top/bottom walls Y */

        if (circle.y + circle.size > canvas.height || circle.y + circle.size < 40) {

            circle.dy *= -1;

        };


        requestAnimationFrame(update);
    }


    update();

});