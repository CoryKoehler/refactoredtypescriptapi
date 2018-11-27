## Install and run the server

### Development
#### Mongo
In App.ts will need to replace the mongo connection string with your local mongo connection string 

#### HTTPS
In config folder there is a key and cert file which are being used, would be safer to generate and replace with your own key/cert 
I used open SSL to generate.

Had problems on windows specfically with the & in package.json, need a todo to get the concurrent commands running.
```bash
npm install
npm run build
npm run dev
```


