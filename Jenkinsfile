pipeline {
  agent any
  stages {
    stage('Deploy To Staging') {
      steps {
        sh '''cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
scp -i /keys/null.pem index.html centos@3.112.193.240:/tmp'''
      }
    }
  }
}