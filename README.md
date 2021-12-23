# Instant Messenger

<p align="center"><img src="https://raw.githubusercontent.com/rohitkv77-g/instant-messenger/main/frontend/src/js/assets/images/logo-dark.png" alt="gc-logo-nobg" border="0" width="500px"></p>
<h2>Demo </h2>

![Demo](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/ChattyAnimation.gif)

<h2>Table of Contents</h2>
<ul>
  <li><a href="#setup">Setup</a></li>
  <li><a href="#codebase">Codebase Overview</a></li>
  <li><a href="#tech">Tech Stack</a></li>
</ul>

<h2 id="setup">Setup</h2>
<p>In order to run the project locally, you must have node and npm installed globally.</p>

<h3>Step 1</h3>

Setting up mongo-database in Debian

1. Install MongoDB

```
sudo apt-get install -y mongodb-org
```

2. Start MongoDB.
   You can start the mongod process by issuing the following command:

```
sudo systemctl start mongod
```

If you receive an error similar to the following when starting mongod:

> Failed to start mongod.service: Unit mongod.service not found.

    Run the following command first:
    	sudo systemctl daemon-reload

    Then run the start command above again.

3. Verify that MongoDB has started successfully.
   sudo systemctl status mongod

   You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:
   sudo systemctl enable mongod

4. Stop MongoDB.
   As needed, you can stop the mongod process by issuing the following command:
   sudo systemctl stop mongod

5. Restart MongoDB.
   You can restart the mongod process by issuing the following command:
   sudo systemctl restart mongod

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.

Begin using MongoDB.

**Start a mongo shell on the same host machine as the mongod. You can run the mongo shell without any command-line options to connect to a mongod that is running on your localhost with default port 27017:
mongo**

<h3>Step 2</h3>
Clone the project and install dependencies in both frontend and backend directory.

```
git clone https://github.com/rohitkv77-g/instant-messenger.git
cd /frontend && npm install
cd ../
cd /backend && npm install
```

<h3>Step 3</h3>
Start a dev server .

```
cd /frontend && npm start
cd ../
cd /backend && npm start
```

<h2 id="codebase">Codebase Overview</h2>

![folder structure](https://dev-to-uploads.s3.amazonaws.com/i/xrlls8w9wokvbrzns7fn.png)

<h3>Frontend</h3>
<ul>
<li><b>build</b>: Base directory for the live version. It gets updated when you run "npm run build"</li>
<li><b>public</b>: index.html and template page.</li>
<li><b>src</b>: JavaScript entry point and it is where all the logic lives.</li>
<li><b>assets</b>: Pictures and logos.</li>
<li><b>components</b>: Presentational and dynamic react components.</li>
<li><b>views</b>: Call it pages if you prefer, views are build by combining components together.</li>
<li><b>redux</b>: Redux related logic (global state management).</li>
</ul>

<h3>Backend</h3>
<ul>
<li><b>Index.js</b>: Entry point.</li>
</ul>

<h2 id="tech">Tech Stack</h2>

![MERN](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)

<h3>Frontend</h3>
<ul>
<li><b>React</b>: JavaScript library for building user interfaces.</li>
<li><b>Redux</b>: State container.</li>
<li><b>TypeScript</b>: JavaScript superset.</li>
<li><b>SCSS</b>: CSS preprocessor.</li>
</ul>

<h3>Backend</h3>
<ul>
<li><b>Node</b>: JavaScript runtime.</li>
<li><b>Express</b>: Node library for building REST API.</li>
<li><b>MongoDB</b>: NoSQL Database.</li>
<li><b>SocketIO</b>: Enables real-time, bidirectional and event-based communication.</li>
</ul>

<h2 id="DFD">Data Flow Diagram (DFD)</h2>
<h3> Context Diagram</h3>
<p align="center">

![Context Diagram](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/Context%20Diagram%20for%20Chat%20App.svg)

</p>
<h3> Level 0 DFD </h3>

<p align="center">

![Level 0 DFD](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/Level%200%20DFD.svg)

</p>

<h3> Level 1 DFD </h3>

![Level 1 DFD](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/Level%201%20DFD.svg)

<h3> Level 2 DFD </h3>

![Level 2 DFD](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/Level%202%20DFD.svg)

<h2 id="Database">Database Schema</h2>

![Database Schema](https://raw.githubusercontent.com/BhCh7051/instant-messenger/main/Readme/DataBase.svg)
