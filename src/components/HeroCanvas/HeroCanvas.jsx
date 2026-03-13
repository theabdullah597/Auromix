import { useEffect, useRef } from 'react'
import './HeroCanvas.css'

export default function HeroCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        let W, H, nodes, animId

        const COLORS = ['rgba(245,192,70,', 'rgba(106,60,255,', 'rgba(46,196,182,', 'rgba(61,139,255,']

        function resize() {
            W = canvas.width = canvas.offsetWidth
            H = canvas.height = canvas.offsetHeight
        }

        function initNodes() {
            nodes = Array.from({ length: 55 }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 2.5 + 1,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                pulse: Math.random() * Math.PI * 2,
            }))
        }

        function draw() {
            ctx.clearRect(0, 0, W, H)

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 160) {
                        const opacity = (1 - dist / 160) * 0.18
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(124, 170, 255, ${opacity})`
                        ctx.lineWidth = 1
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            // Draw nodes
            nodes.forEach(n => {
                n.pulse += 0.03
                const glow = (Math.sin(n.pulse) + 1) / 2
                const radius = n.r + glow * 1.2

                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4)
                grad.addColorStop(0, n.color + '0.7)')
                grad.addColorStop(1, n.color + '0)')

                ctx.beginPath()
                ctx.arc(n.x, n.y, radius * 3, 0, Math.PI * 2)
                ctx.fillStyle = grad
                ctx.fill()

                ctx.beginPath()
                ctx.arc(n.x, n.y, radius, 0, Math.PI * 2)
                ctx.fillStyle = n.color + '0.9)'
                ctx.fill()

                n.x += n.vx
                n.y += n.vy

                if (n.x < 0) n.x = W
                if (n.x > W) n.x = 0
                if (n.y < 0) n.y = H
                if (n.y > H) n.y = 0
            })

            animId = requestAnimationFrame(draw)
        }

        resize()
        initNodes()
        draw()

        const ro = new ResizeObserver(() => {
            resize()
            initNodes()
        })
        ro.observe(canvas)

        return () => {
            cancelAnimationFrame(animId)
            ro.disconnect()
        }
    }, [])

    return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
