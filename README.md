# NYUBFWebsite

## What to DO

First, clone this repository, then run these two commands (note you do NOT have to navigate)

```
git pull
```
```
npm install
```
```
npm run dev
```

There should be a highlighted Local: (url), either copy paste that URL or CMD/Cnrl (depending on device) click that

You should now be at the website.

Back in VSCode navigate to this file going through this path /src/assets/members.json

You should see this file:

```json
      {
        "name": "Sean Balakhanei",
        "role": "Head of Development",
        "status": "Active",
        "image": "https://seanbalakhanei.me/resources/headshot_red_tie.jpg",
        "biography": "Sean Balakhanei is the head of the NYU Blockchain and Fintech Development Team. Currently a 3rd year computer science student at NYU Tandon with minors in Math and Finance. Works at Group One Trading as a Trading Analyst Intern, and is an upcoming Software Engineering Intern at Amazon."
      },
``` 
 
Scroll down to your name and fill in your bio, role, and add an image (just go anywhere online like your insta and copy image url off google)

Now go back to your local URL that you clicked earlier and horizontally scroll to your name to make sure it's working fine.

Now just
```
git add .
```
```
git commit -m "added [YOUR NAME]"
```
```
git push origin HEAD
```

Thanks!