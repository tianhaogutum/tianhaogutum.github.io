---
layout: page
title: High Precision Computation
description: 12.2023-03.2024 During a four-month internship, our team successfully reimplement gamma correction algorithm using C. We implemented the gamma correction and grayscale conversion algorithm through numerous local and global optimizations, using only basic arithmetic operations. In particular, we conducted an in-depth study of the Taylor series, enabling our calculations to match the standard library’s results with a 1:1 accuracy. Many of these optimization techniques are original innovations
img: assets/img/gamma2.png
importance: 2
category: keyInternship
related_publications: false
---

## High Precision Computation Project - Image Processing Grayscale Conversion and Gamma Correction

### Project Overview

In this project, we developed an algorithm in C to convert a color image into grayscale and adjust the brightness of the grayscale image through gamma correction. This project deepened our understanding of fundamental image processing techniques and provided practical experience in applying mathematical formulas to image data transformation.

### Project Structure & Content

The project is divided into two main phases:

- **Grayscale Encoding**: We use a weighted average method to convert the RGB values of a color image into grayscale. By adjusting the RGB weighting coefficients (a, b, c), we can control the sensitivity to different colors.
- **Gamma Correction**: Using a gamma correction formula based on human visual characteristics, we adjusted the brightness and contrast of the grayscale image. We experimented with different gamma values to observe their effects on the brightness of the image.

### Hands-On Experience

The project utilizes a custom PPM image format. By configuring input and output parameters, the program reads pixel data from a file, converts it to grayscale, applies gamma correction, and outputs a new image file. Key steps in the project include:

- Converting RGB values to grayscale using a weighted average formula.
- Experimenting with different gamma values to observe changes in image brightness.
- Providing flexible input parameters, allowing users to customize paths, RGB weights, gamma values, etc.

### Project Highlights

- **Modular Implementation**: Each step of the algorithm is designed as an independent function, making the code maintainable and extensible.
- **Performance Optimization**: Different versions of the algorithm were implemented to compare performance, with optional SIMD acceleration.
- **Parameterized Design**: Flexible input parameters and error-checking mechanisms make the program user-friendly and adaptable.

Through this project, we not only learned the basics of grayscale conversion and gamma correction but also improved our programming skills and algorithm optimization techniques. This project provides a solid foundation for tackling more complex image processing tasks in the future.
