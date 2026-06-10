pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Node Application') {
            steps {
                sh 'node app.js'
            }
        }

    }
}
