# Backend
### Build the docker image
`docker build -t roman_numeral_calculator .`
### Run the image
`docker run -p 3000:8000 -d roman_numeral_calculator`
### Get ID of docker image
`docker ps`
### Stop docker image from running
`docker stop <id>`
### Test in browser
`localhost:3000?roman=IX`
### Alternatively, test in terminal
`curl -i localhost:3000?roman=IX`

# Frontend
Can be tested by running `npm start` from inside the folder, compiled version can be tested with this link: [click here](https://priceless-kilby-be61c3.netlify.com/)