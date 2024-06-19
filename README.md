[![LinkedIn][linkedin-shield]][linkedin-url]
<br />

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skald1311/cooksta">
    <img src="https://github.com/skald1311/brain-disease-detector/assets/84189062/80312060-3f41-4b52-b6bc-25d35f0b548c" alt="Logo" width="100" height="100">
  </a>



<h3 align="center">Brain Disease Detector</h3>

  <p align="center">
    Detect brain diseases using YOLOv8 with high accuracy from MRI 
    <br />
    <br />
    <a href="https://github.com/skald1311/cooksta/issues">Report Bug</a>
    ·
    <a href="https://github.com/skald1311/cooksta/issues">Request Feature</a>
  </p>
</div>

<br/>

[![React][React-badge]][React-url]
[![TypeScript][Typescript-badge]][Typescript-url]
[![AWS-Lambda][AWS-Lambda-badge]][AWS-Lambda-url]
[![AWS-APIG][AWS-APIG-badge]][AWS-APIG-url]
[![Docker][Docker-badge]][Docker-url]
[![HTML5][HTML5-badge]][HTML5-url]
[![CSS][CSS-badge]][CSS-url]
[![Tailwind][Tailwind-badge]][Tailwind-url]



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://github.com/skald1311/brain-disease-detector/assets/84189062/99c6b07b-71fb-4edd-832f-3849b6c01314)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Built With -->
## Built With
*Frontend:*

* [![React][React-badge]][React-url]
* [![JavaScript][Javascript-badge]][Javascript-url]
* [![HTML5][HTML5-badge]][HTML5-url]
* [![CSS][CSS-badge]][CSS-url]
* [![Styled-components][Styled-Component-badge]][Styled-Component-url]
* [![Netlify][Netlify-badge]][Netlify-url]
<br/>

*Backend:*

* [![Python][Python-badge]][Python-url]
* [![Django][Django-badge]][Django-url]
* [![MongoDB][Mongo-badge]][Mongo-url]
* [![Vercel][Vercel-badge]][Vercel-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

**LIVE DEMO [HERE](https://cooksta.netlify.app/)**

**Since the application's data resides on MongoDB Atlas, you'll require the connection URL to access the database. However, as the URL contains my account's password, for security reasons, I haven't included the db_connection.py file. If you wish to host it locally, please reach out to me via LinkedIn, and I'll assist you in obtaining your own db_connection.py**

Once you've obtained db_connection.py, you can follow these next steps

1. Click the green button

  ![image](https://user-images.githubusercontent.com/84189062/210023644-49f6ee47-b8aa-479d-b192-c9985ef913cd.png)
   
   
2. Download ZIP

   ![image](https://user-images.githubusercontent.com/84189062/210023664-4d06ef4a-71a7-444d-9778-bf21c8ed30ae.png)
  
  
3. Extract the file
   ```sh
   Make sure all of the files are in the same folder!!!
   ```

4. Paste the db_connection.py file into the "backend" folder

5. Go into the "backend" folder
   ```sh
   cd backend
   ```

6. Create a virtual environment and activate it
   ```sh
   python -m venv .venv
   . .venv/Scripts/activate
   ```
   Some systems might be different (python3 rather python; . .venv/bin/activate rather than . .venv/Scripts/activate)

7. Install backend dependencies 
   ```sh
   pip install -r requirements.txt
   ```

7. Run the server
   ```sh
   python manage.py runserver
   ```
   In the terminal, you'll see a link, but it's not for the actual app. It's just for the backend server, so please refrain from clicking on it.

8. Open up a new terminal and cd into the "frontend" folder
   ```sh
   cd frontend
   ```
   
9. Install frontend dependencies
   ```sh
   npm i
   ```

10. Run frontend server
   ```sh
   npm run dev
   ```
  You'll find a link in the terminal. Hold down Control and left-click on the link to access it. Enjoy!


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Duong Hoang - [LinkedIn](https://www.linkedin.com/in/duongmhoang/)

Project Link: [cooksta.netlify.app](https://cooksta.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat
[linkedin-url]: https://www.linkedin.com/in/duongmhoang/
[Javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[Javascript-url]: https://www.javascript.com/
[Typescript-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[Typescript-url]: https://www.typescriptlang.org
[Python-badge]: https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat
[Python-url]: https://www.python.org
[HTML5-badge]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[HTML5-url]: https://en.wikipedia.org/wiki/HTML
[CSS-badge]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[CSS-url]: https://en.wikipedia.org/wiki/CSS
[Pytorch-badge]: https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=fff&style=flat
[Pytorch-url]: https://pytorch.org
[React-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat
[React-url]: https://react.dev
[Django-badge]: https://img.shields.io/badge/Django-092E20?logo=django&logoColor=fff&style=flat
[Django-url]: https://www.djangoproject.com
[Styled-Component-badge]: https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff&style=flat
[Styled-Component-url]: https://styled-components.com
[Netlify-badge]: https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=fff&style=flat
[Netlify-url]: https://www.netlify.com
[AWS-EC2-badge]: https://img.shields.io/badge/Amazon%20EC2-F90?logo=amazonec2&logoColor=fff&style=flat
[AWS-EC2-url]: https://aws.amazon.com/ec2/
[Mongo-badge]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[Mongo-url]: https://www.mongodb.com
[ReactRouter-badge]: https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat
[ReactRouter-url]: https://reactrouter.com/en/main
[Vercel-badge]: https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat
[Vercel-url]: https://www.vercel.com
[Tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat
[Tailwind-url]: https://tailwindcss.com
[Docker-badge]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat
[Docker-url]: https://www.docker.com
[AWS-Lambda-badge]: https://img.shields.io/badge/AWS%20Lambda-F90?logo=awslambda&logoColor=fff&style=flat
[AWS-Lambda-url]: https://aws.amazon.com/pm/lambda
[AWS-APIG-badge]: https://img.shields.io/badge/Amazon%20API%20Gateway-FF4F8B?logo=amazonapigateway&logoColor=fff&style=flat
[AWS-APIG-url]: https://aws.amazon.com/api-gateway/

<!--https://badges.pages.dev-->
