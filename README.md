# some notes to myself

## Building a Docker Image
To build the Docker image in `dev` mode, run the following:
```
docker build -t tomato_frontend:dev .
```
Source: https://mherman.org/blog/dockerizing-a-react-app/

note: You only need to build the image once, and use it until the installed dependencies (like Python packages) or OS-level package versions need to be changed. Not every time your code is modified.

## Starting a Docker Image
To start the Docker container in `dev` mode, run the following:
```
docker run \
    -d \
    --rm \
    -p 3000:3000 \
    -v ${PWD}:/app \
    -e CHOKIDAR_USEPOLLING=true \
    tomato_frontend:dev
```
-d: This runs your container in detached mode. Simply put, when you leave a terminal session, it keeps your container running still.
-p: This is used to publish the port you would like your application to run on. If you run your container without publishing a port, whatever is running in your container will only be accessible in your container.

Source: https://medium.com/geekculture/getting-started-with-docker-in-your-react-js-application-the-basics-6e5300cf749d
