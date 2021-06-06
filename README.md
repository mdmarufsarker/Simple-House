to install node_modules type `npm install` in the command line

to watch sass type in the package.json scripts like that --> "compile:sass": "node-sass sass/main.scss css/style.css -w"

compile:sass is the command name, node-sass is the package name, sass/main.scss is the main sass source file name, css/style.css is the compiled sass code to css code name and w for watch the file all time. To run this in command line type `npm run compile-sass`. Now it will compile all the sass code to valid css code.