const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const size = 20

const snake = [ 
    { x: 200, y: 200},
    { x: 220, y: 200}
]

const drawSnake = () => 
{
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index) => 
        {
        if(index == snake.length - 1)
        {
           ctx.fillStyle = "white"
        }
        ctx.fillRect(position.x, position.y, size, size)
    })
}

drawSnake()