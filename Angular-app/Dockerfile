
FROM node:6
RUN mkdir -p /586586-Hackathon-OutreachFundraiser-FrontEnd/outreach-fundraiser/src/app
WORKDIR /586586-Hackathon-OutreachFundraiser-FrontEnd/outreach-fundraiser/src/app
RUN npm cache clean
RUN npm install
COPY . /586586-Hackathon-OutreachFundraiser-FrontEnd/outreach-fundraiser/src/app
EXPOSE 4200
CMD ["npm","start"]