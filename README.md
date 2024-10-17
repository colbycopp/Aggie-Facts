# Run project
## Clone repo and change into project working directory
cd ~/
git clone https://github.com/carlos-ortiz03/Aggie-Facts.git
cd Aggie-Facts
## Build docker container
docker build -t aggie-facts . # Run container in background
## Run container
docker run -d  --name aggie-facts -p 3000:3000 aggie-facts
## list active and inactive containers
docker container ls -la
## Stop container
docker container stop aggie-facts
## Delete container
docker container rm aggie-facts  
