#  Personal Website 

A simple website using server-side:

- Node.js platform
- Express web framework
- Morgan HTTP request logger
- Body-Parser to automatically parse HTTP request bodies
- NodeMailer for emailing contact form information
- Nodemon for live updates
- nconf to keep authorization information in a config.json file (not committed to repo)
- MailGun (10,000 free emails)

and client-side:

- BootStrap framework for responsiveness & styling
- Initializr from <http://www.initializr.com/>

## Links

- [Code Repository](https://github.com/raybox94/rayaan-app)

## Get Started

  ```Powershell
  > npm install -g nodemon
  > npm install
  > nodemon
  ```

Open browser `http://localhost:8081`.

## Set up Mailgun

1. Sign up for an account at <https://www.mailgun.com>.
1. Log in.
1. Go to your dashboard at<https://app.mailgun.com/app/dashboard>.
1. Scroll down to get your "Domain Name".  
1. On the right, click the eye to view your private API key.
1. Create a new config.json from the config.json.example.
1. Set your domain name and private api key as found above.
1. Add your private config.json to the .gitignore file.

## Deploy to Heroku Free Hosting

1. Register for a free Heroku account at <https://www.heroku.com/>.
1. Download and install Heroku CLK <https://devcenter.heroku.com/articles/heroku-cli>.
1. Log in to your Heroku cloud account.
1. From your dashboard, click New and add a new project.
1. Click the new project and click the Deploy tab.
1. Click 'Open app' to run your app and view the Heroku URL in the browser.
1. Open a Windows Command Window as Administrator, and run 'heroku login'.
1. Open Git Bash in your project folder, add the heroku remote (Command 1 below).
1. In Git Bash, push to your heroku remote (Command 2 below).


## References

Express in Action: Writing, building, and testing Node.js applications
by Evan M, <https://www.manning.com/books/express-in-action>
