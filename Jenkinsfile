pipeline {
  agent any
  stages {
    stage('NPM Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('NPM Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy To Staging') {
      steps {
        sh 'cp -R /root/.jenkins/workspace/parking_boy_front_end_dev/dist/* /usr/share/nginx/html/boy'
      }
    }
  }
}