FROM openjdk:11-jre-alpine
ARG JAR_FILE=build/*.jar
ENV CUSTOM_NAME default
COPY ${JAR_FILE} test-app.jar
EXPOSE 8080
CMD ["java", "-Dtest.customName=${CUSTOM_NAME}", "-jar", "test-app.jar"]