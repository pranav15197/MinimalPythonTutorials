import React from 'react'
import { Link } from 'react-router-dom'
import download_python from '../assets/download_python.png'
import terminal from '../assets/terminal.gif'

function Setup() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Setup your computer for python development</h1>
      <br/>
      <p>
        Setting up python is extremely easy. We just need two things
        <ol>
          <li>We need to install python.</li>
          <li>We need a code editor to write python code.</li>
        </ol>
      </p>
      <br/>
      <h2>Install Python</h2>
      <p>
        If you are using <b>Ubuntu</b> or <b>Mac</b>, you can skip this step.
        Python will be already installed on your computer.
      </p>
      <p>
        If you are on windows,
        visit this <a target="blank" href='https://www.python.org/downloads/'>webpage</a> and download
        the latest python version by clicking the big yellow button that says download
        python.
      </p>
      <p>
        <img alt="download python" src={download_python}/>
      </p>
      <p>
        Once the .exe file is downloaded, run it by double-clicking on it. Then just like
        any other installation on windows, just keep clicking next until the installation
        is complete. 
      </p>
      <br/>
      <h2>Check if your python works</h2>
      <p>  
        To make sure python
        is working you need to open a <b>terminal</b>. A terminal lets you
        directly type in commands that your computer can understand. Here's how
        you can open the terminal on your computer.
      </p> 
      <table>
        <tr>
          <td valign="top" width="100">Ubuntu</td>
          <td>
            you can do this by pressing 
            <span class="key">Control</span> + 
            <span class="key">Alt</span> + 
            <span class="key">T</span>
          </td>
        </tr>
        <tr>
          <td valign="top" width="100">Mac</td>
          <td>
            press <span class="key">Command</span> +
            <span class="key">P</span> to open the spotlight search. 
            Then search for terminal and press enter.
          </td>
        </tr>
        <tr>
          <td valign="top" width="100">Windows</td>
          <td>
            Go to the start menu. Search for <b>Command Prompt</b> and click on it.
          </td>
        </tr>
      </table>
      <p>
        Once you have the terminal open, just type in <b>python</b> and press enter.
        Hopefully, you would see something like this.
        <img src={terminal} alt="python terminal" />
        What you see above is called a <b>python shell</b>. It allows you to run
        python commands. You can give it a try. type 2 + 2 and press enter.
        You should see the answer 4 appear on the next line. Pretty cool right? To close the shell just type <b>exit()</b> and press enter.
      </p>
      <p>
        Congratulations! you now have python working on your computer.
      </p>
      <p>
        Terminals are a programmer's best friend. I know it feels confusing and even 
        scary to some, but it's important that you get used to them. You'll thank me
        later.
      </p>
      <br/>
      <h2>Install Visual Studio Code</h2>
      <p>
        Technically you can just use the python shell to write and run python code.
        But most programs that you will write will be 100s or even 1000s of lines long.
        It doesn't make sense to type the entire code in the shell every time.
      </p>
      <p>
        In general, we write code in text files. Think of these as recipes. Your computer
        is like a cook. You write the recipe of the dish on a piece of paper and hand 
        it to the computer, which then reads the recipe line by line and executes it.
      </p>
      <p>
        To write text files, we need a Text editor. While there are loads of good text editors
        to choose from, I recommend Visual Studio Code (or just VSCode in short). To download and install it, you
        can follow the instructions given <a target="blank" href="https://code.visualstudio.com/download">here</a>.
      </p>
      <br/>
      <h2>Summary</h2>
      <p>
        You now have everything you need in order to learn and write python code. From now
        on I'll assume that you know how to open the terminal on your computer and that you have 
        VSCode installed.
      </p>
      <p>
        So let's not waste any more time and move to your first real tutorial!
      </p>
      <footer>
      Next tutorial -
      <Link to="/hello-world">Hello World!</Link>
      </footer>

    </div>
  );
}

export default Setup
