pipeline {
  agent any
  stages {
    stage('Deploy To Staging') {
      steps {
        sh 'scp -i /keys/null.pem boy.tar centos@3.112.193.240:/tmp'
      }
    }
  }
}