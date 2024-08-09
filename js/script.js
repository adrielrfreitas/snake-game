const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const size = 20

const snake = [ 
    { x: 0, y: 0},
    { x: 20, y: 0}
]

let direction, loopId

const drawSnake = () => 
{
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index) => 
        {
        
        if (index == snake.length - 1)
        {
           ctx.fillStyle = "white"
        }
        ctx.fillRect(position.x, position.y, size, size)
    })
}

const moveSnake = () =>
{
    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "right")
    {
        snake.push({x: head.x + size, y: head.y})
    }

    if (direction == "left")
    {
        snake.push({x: head.x - size, y: head.y})
    }
    
    if (direction == "up")
    {
        snake.push({x: head.x, y: head.y - size})
    }
        
    if (direction == "down")
    {
        snake.push({x: head.x, y: head.y + size})
    }
    
    snake.shift()
}

const gameLoop = () => 
{
    clearInterval(loopId)
    ctx.clearRect(0, 0, 600, 600)
    moveSnake()
    drawSnake()

    loopId = setTimeout(() => 
        {
            gameLoop()
        }, 300)
}

gameLoop()

document.addEventListener("keydown", ({key}) => 
{
    if (key == "ArrowRight" && direction != "left" && direction != "a")
    {
        direction = "right"
    }

    if (key == "ArrowLeft" && direction != "right" && direction != "d")
    {
        direction = "left"
    }

    if (key == "ArrowUp" && direction != "down" && direction != "s")
    {
        direction = "up"
    }

    if (key == "ArrowDown" && direction != "up" && direction != "w")
    {
        direction = "down"
    } 
        
    if (key == "d" && direction != "left" && direction != "a")
    {
        direction = "right"
    }
        
    if (key == "a" && direction != "right" && direction != "d")
    {
        direction = "left"
    }
        
    if (key == "w" && direction != "down" && direction != "s")
    {
        direction = "up"
    }
        
    if (key == "s" && direction != "up" && direction != "w")
    {
        direction = "down"
    }    
})

