pipeline {
    agent any
    environment {
        sendmail = 'yes'
        recipients = '2797125@qq.com'
        docker_name="jingmin-server"
    }
    stages {
        stage('source') {
            steps{
                git credentialsId: 'c5e7ee35-441a-4b0d-985c-7599231173cf',
                branch: "${branch}",
                url: 'git@192.168.0.12:study/study_vite_vue3.git'
            }
        }
        stage('installpackage') {
            steps{
              sh 'yarn install'

            }
        }
        stage('install test') {
            steps{
              sh 'yarn test:unit'

            }
        }
        stage('build package') {
            steps{
              sh 'yarn build'
            }
        }
    }
}