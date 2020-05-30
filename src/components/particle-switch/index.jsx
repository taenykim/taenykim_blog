import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'
import { THEME_2 } from '../../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME_2.NONE : THEME_2.PARTICLE
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME_2.NONE: {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.setAttribute('id', 'particleCanvas')
      canvas.style.zIndex = -1
      canvas.style.position = 'fixed'
      canvas.style.top = 0
      canvas.style.left = 0
      const parentElem = document.querySelector('#___gatsby')
      const W = window.innerWidth
      const H = window.innerHeight
      canvas.width = W
      canvas.height = H

      //snowflake particles
      const mp = 75 //max particles
      const particles = []
      for (let i = 0; i < mp; i++) {
        particles.push({
          x: Math.random() * W, //x-coordinate
          y: Math.random() * H, //y-coordinate
          r: Math.random() * 4 + 1, //radius
          d: Math.random() * mp, //density
        })
      }

      //Lets draw the flakes
      function draw() {
        ctx.clearRect(0, 0, W, H)

        ctx.fillStyle = 'rgba(221, 191, 218, 0.8)'
        ctx.beginPath()
        for (let i = 0; i < mp; i++) {
          const p = particles[i]
          ctx.moveTo(p.x, p.y)
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
        }
        ctx.fill()
        update()
      }

      //Function to move the snowflakes
      //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
      let angle = 0
      function update() {
        angle += 0.01
        for (let i = 0; i < mp; i++) {
          const p = particles[i]
          //Updating X and Y coordinates
          //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
          //Every particle has its own density which can be used to make the downward movement different for each flake
          //Lets make it more random by adding in the radius
          p.y += Math.cos(angle + p.d) + 1 + p.r / 2
          p.x += Math.sin(angle) * 2

          //Sending flakes back from the top when it exits
          //Lets make it a bit more organic and let flakes enter from the left and right also.
          if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 3 > 0) {
              //66.67% of the flakes
              particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d }
            } else {
              //If the flake is exitting from the right
              if (Math.sin(angle) > 0) {
                //Enter from the left
                particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d }
              } else {
                //Enter from the right
                particles[i] = {
                  x: W + 5,
                  y: Math.random() * H,
                  r: p.r,
                  d: p.d,
                }
              }
            }
          }
        }
      }

      //animation loop
      setInterval(draw, 33)

      parentElem.appendChild(canvas)
      break
    }
    case THEME_2.PARTICLE: {
      var canvas = document.querySelector('#particleCanvas')
      canvas && canvas.remove()
      break
    }
  }
}

export const ParticleSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = _checked => {
    const theme = getTheme(_checked)
    setChecked(_checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    var checked = document.querySelector('#particleCanvas')
    handleChange(Boolean(checked))
    checked && checked.remove()
  }, [])

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch2">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch2"
          height={24}
          width={48}
          checkedIcon={<div className="icon checkedIcon">🌸</div>}
          uncheckedIcon={<div className="icon uncheckedIcon">🍂</div>}
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#fbaed2'}
          onHandleColor={'#282c35'}
        />
      </label>
    </div>
  )
}
