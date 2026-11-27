---
title: Arduino Nano sensor interface PCB
subtitle:
summary: A printed circuit board designed for interfacing a heart rate/blood oxygen sensor with an Arduino Nano.
image: /_static/img/projects/arduino-nano-sensor-interface-pcb.png
skills:
  - KiCad
  - PCB Design
repo_url: https://github.com/yurii-potsiluienko/spo2-kicad-tutorial
order: 4
---

# Arduino Nano sensor interface PCB

## Overview

This project was created by following a KiCad tutorial to learn the fundamentals of schematic capture and PCB layout.

The PCB integrates several components, including an Arduino Nano, a MAX30102 sensor module, and an SSD1306 OLED display.

## Components

* [Arduino Nano](https://store-usa.arduino.cc/collections/nano-family/products/nano-r4-with-headers)
* [MAX30102 pulse oximeter / heart rate sensor module](https://www.analog.com/en/products/max30102.html)
* [SSD1306 OLED display](https://www.adafruit.com/product/326)
* 3 push buttons
* 4 resistors
* 3 capacitors
* 1 LED

## Features

* I2C communication interface for the sensor and OLED display
* User input via push buttons
* Indicator LED for status/debugging

## Tools Used

* KiCad (schematic capture and PCB layout)
* GitHub for documentation

## What I Learned

* Creating schematics in KiCad
* PCB component placement
* Trace routing and board organization

## Images

### Schematic

![Schematic](images/schematic.png)

### PCB Layout

![PCB](images/pcb_layout.png)

### 3D View

![3D PCB](images/pcb_3d.png)

## Tutorial Reference

This project was created by following this tutorial:

- [KiCad PCB Design Tutorial](https://www.youtube.com/watch?v=vLnu21fS22s&list=PLUOaI24LpvQPls1Ru_qECJrENwzD7XImd)