FROM openjdk:8u121-jdk-alpine

ADD ./wait.sh /home/wait.sh
COPY seriescarpincho-0.0.1-SNAPSHOT.jar /home/seriescarpincho.jar

EXPOSE 8080

CMD ["sh", "-c", "sh /home/wait.sh"]
