

const onClick = () => {
        let el = document.getElementById("graph");
        const context = el.getContext("2d");          // retrieves the 2d drawing context.
        context.beginPath();                // begin drawing path command.
        
        context.arc(200, 200, 50, 0, 2 * 3.1415)
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "#ae5544";
        context.fillStyle = "#ae5544";

        context.stroke();
        context.fill();
        
  }


