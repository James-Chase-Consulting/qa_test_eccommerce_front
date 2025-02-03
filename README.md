# Install Docker on your local machine

Visit docker website and download the appropriate version for your machine architecture

# Step 1: Build the Docker Image

```bash
docker build -t ecommerce-qa-test .
```

# Step 2: Run the Docker Container

```bash
docker run -p 4200:80 ecommerce-qa-test
```

# (Optional) Step 1 and 2 Combined in Docker Compose -

**N/B**: Skip this step if you have done step 1 and 2 else leave step 1 and 2 and do this step

```bash
docker-compose build --no-cache

docker-compose up
```

Stop the running container with

```bash
docker-compose down
```

# Step 3 Access the App

Step 1 and Step 2 will build the Docker Image and start the container and this ecommerce sample app will be available at

Open the browser and navigate to the link below:

```js
http://localhost:4200
```
