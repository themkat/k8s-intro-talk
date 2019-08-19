	# Little quick and dirty. Could probably have done a multi stage build and discarded the code
	# Forgivable since this is only an example :P 
FROM openjdk:8-slim

ADD . /code
WORKDIR /code
RUN ./mvnw clean install

CMD java -jar target/book-service-0.0.1-SNAPSHOT.jar
