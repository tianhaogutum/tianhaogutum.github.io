---
layout: page
title: Effective of Search-Based Testing on a Deep Reinforcement-Learned Controller
description: My bachelorthesis during my study at TUM.
img: assets/img/drone.png
importance: 1
category: keyInternship
giscus_comments: true
---

### Overview

My bachelor thesis explores the application of decentralized control systems for drone swarms in various fields, including agriculture, logistics, military, and public rescue. Traditionally, centralized controllers manage swarm decision-making, but this centralized approach limits scalability due to bottlenecks in communication and processing. My research investigates the use of deep reinforcement learning (DRL) to implement decentralized control, which improves scalability and enables responsive decision-making directly at the drone level and then I combine Search-Based testing with Scenario-Based testing to conduct tesing on the controllers and see wehther it could
identify "edge cases".

### Approach

The proposed approach employs metaheuristic search techniques for scenario-based testing, a method proven effective in autonomous vehicle testing, to generate targeted test scenarios for DRL-based controllers in drone swarms. These scenarios are structured into groups representing distinct testing conditions, allowing for focused, efficient testing by selecting representative test cases from each group. This strategy enhances coverage while significantly reducing the total number of tests.

### Key Components of the Testing Setup

- **Scenario-Based Testing**: Grouping potential situations into specific test scenarios to efficiently test critical system behaviors.
- **Metaheuristic Search**: Using genetic algorithms to generate scenarios that reveal vulnerabilities in the DRL controllers.
- **Fitness Functions**: Defining safety metrics to evaluate scenario outcomes, such as collision avoidance and path efficiency.

### Experimental Setup

The experiments simulate a drone swarm navigating in a three-dimensional space with obstacles while directed toward a static goal. The **OpenSBT** framework, developed as part of the research, facilitates scenario-based testing by integrating various search algorithms, safety metrics, and simulations into a modular structure. The experimental code and framework are available on [GitHub](https://github.com).

### Results & Insights

This research demonstrates that metaheuristic search-based testing provides greater effectiveness in identifying edge cases compared to random testing methods. The structured, scenario-driven approach highlights potential weaknesses in the controllers’ decision-making processes under unexpected conditions, advancing the robustness of decentralized drone swarm systems for real-world applications.
