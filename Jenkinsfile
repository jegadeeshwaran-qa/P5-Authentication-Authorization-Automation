pipeline {
    agent any

    options {
        skipDefaultCheckout()
    }

    stages {
        stage('Clone GitHub repository') {
            steps {
                checkout scm
            }
        }

        stage('Install npm dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
