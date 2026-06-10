pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository Cloned'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('react-jenkins-demo') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('react-jenkins-demo') {
                    sh 'npm run build'
                }
            }
        }

    }

    post {
        success {
            archiveArtifacts artifacts: 'react-jenkins-demo/build/**'
        }
    }
}
