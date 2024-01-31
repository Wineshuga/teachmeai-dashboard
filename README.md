<a name="readme-top"></a>

<div align="center">
  <h3><b>TeachMeAI Dashboard</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 TeachMeAI Dashboard ](#-teachmeai-dashboard-)
  - [📅 Project plan ](#-project-plan-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites ](#prerequisites-)
    - [Setup ](#setup-)
    - [Install ](#install-)
    - [Usage ](#usage-)
  - [👥 Authors ](#-authors-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [📝 License ](#-license-)


# 📖 TeachMeAI Dashboard <a name="about-project"></a>

**TeachMeAI Dashboard** is a Task Management Dashboard for the AI product called [Teachmate](https://teachmateai.com/). Users get to see a list of tasks, filter tasks based on the tasks' status, add new tasks, and edit existing tasks.  

## 📅 Project plan <a name="project-plan"></a>

Below is a summary of the steps taken during development:

- Create Needed Routes:
  - Set up the required routes for smooth navigation within the application.
- Add Navigation Bar:
  - Implement a navigation bar for seamless page navigation.
- Create New Tasks Page:
  - Develop a dedicated page for adding new tasks.
- Initialize Data Storage:
  - Set up an array for temporary data storage.
- Implement Task Filtering:
  - Create a feature allowing users to filter tasks on the list.
- Add Newly Created Tasks:
  - Include functionality to add newly created tasks to render on page.
- Create Edit Page:
  - Develop an edit page for tasks and implement functionality to update the page.
- Responsive Styling with Tailwind:
  - Utilize Tailwind CSS for responsive styling.

During the development process, I initially explored the option of using localstorage for data persistence. While localstorage offers faster performance in synchronous operations, I opted for a local JSON file due to the following reasons:

- Local JSON files can handle larger amounts of data compared to the size limitations of localstorage (typically around 5-10 MB).
- Functions or methods designed for local JSON files can be seamlessly replaced with API calls to database endpoints during the transition to a production database.
- When migrating to a more robust database system in production, necessary adjustments to connect to the database can be made without fundamentally changing the application's data-handling logic.

Ultimately, I decided to use a simple array for temporary storage, realizing that the initial exploration surpassed the project's requirements.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>React</li>
    <li>Redux Toolkit</li>
    <li>Tailwind CSS</li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Users can see the list of all tasks**
- **Users can filter list using task status ('pending' or 'completed')**
  
## 🚀 Live Demo <a name="live-demo"></a>

- Coming soon

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites <a name="prerequisites">

In order to run this project you need:

- Code editor
- Node
- npm

### Setup <a name="setup">

Clone this repository to your desired folder:

Example commands:

```sh
  cd project
  git clone https://github.com/Wineshuga/teachmeai-dashboard.git
```

### Install <a name="install">

```sh
  npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage <a name="usage">

Initialize it with:

```
npm start
```
Note: The status of newly added tasks can be 'pending' or 'completed' depending on the date chosen by user. If the date is behind the current date, it would be rendered as 'completed', else 'pending'.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Nweneary Uzochukwu Winnie**

- GitHub: [Wineshuga](https://github.com/wineshuga)
- Twitter: [Wineshuga](https://twitter.com/wineshuga)
- LinkedIn: [Nweneary Uzochukwu Winnie](https://linkedin.com/in/wineshuga)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Wineshuga/teachmeai-dashboard/issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please show us support by givintg it a star⭐.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license" href="./LICENSE"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
